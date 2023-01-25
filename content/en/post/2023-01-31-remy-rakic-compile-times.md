---
author: Rémy Rakic
date: 2023-01-25T12:00:00Z
slug: remy-rakic-compile-times
title: "Improving Rust compile times to enable adoption of memory safety"
excerpt: "Guest author Rémy Rakic discusses his work to improve Rust compiler performance. "
---

<div class="">
  <blockquote class="blockquote">
    <span class="quote"></span>
    <div class="quote-text">
      <p class="font-italic lh-170">Rémy Rakic is helping us enable the adoption of memory safe software through work to improve Rust compile times. We asked him to provide his perspective on the work in this blog post. Thank you for your partnership and contributions, Rémy!</p>
      <footer class="blockquote-footer"><cite title="Source Title">Josh Aas, Head of ISRG's Prossimo project</cite></footer>
    </div>
  </blockquote>
</div>

## Introduction

Over the past few months I've been working as part of the Rust compiler performance working group on the initiative for better build times. I've been working on this effort through a contract with Prossimo that was generously supported by Google.

## Context

Rust compile times are very often brought up as an area needing improvement, including in the yearly [community survey](https://blog.rust-lang.org/2022/02/15/Rust-Survey-2021.html). Slow compile times can be barriers to adoption and improving them could therefore help broaden the language's impact. That's one of Prossimo's goals: improving the potential for more memory safe software, particularly in the most critical parts of Internet infrastructure (e.g., networking, TLS, DNS, OS kernels, etc).

In my mind, Rust has historically focused more on runtime performance than compilation times, much like [LLVM](https://llvm.org/), one of the most important components used in Rust compilation. I feel that's a common story for modern compilers, in both engineering and academia. Compared to some other older languages tailored to having a lightning fast single-pass compiler, this was not the most important principle in Rust's design. The primary focus of the designers was making sure the language would offer the desired safety guarantees without compromising on the performance of programs.

<div class="card border-0 pic-quote-right mw-240px mx-auto mb-4">
  <img alt="Rust Logo" class="rounded mx-auto img-fluid" src="/images/blog/rust-logo.png" />
</div>

Nonetheless, compile times have received a lot more attention recently and have noticeably improved over the years. There's more work we can do though. To help move things forward, tools and processes have been adopted and refined over time to help foster a culture of performance. Examples include:

- A suite of benchmarks for the compiler, used for every PR that is merged. Each one is benchmarked under various use-cases: in check, debug or release modes, with or without incremental compilation (with different granularity of changes), with many different hardware metrics that are recorded and graphed over time, as well as from the compiler's internal profiling infrastructure.

- These benchmarks can be triggered on-demand for a PR, prior to merging, in order to avoid surprises.

- A summary of the results is posted on each merged PR, to notify the authors, reviewers, and the working group, if a PR needs attention.

- A weekly triage process, to summarize the week's results, and have a friendly human in the loop in case there are calls to be made: help weed out sources of noise in the results (it happens sometimes), small inconsequential regressions that can be ignored or ones that would require more work, or unforeseen performance issues requiring a revert. We also celebrate the wins!

- These summaries are used to notify the compiler team in their weekly meeting of the recent progress, as well as the community, via This Week in Rust.

## Work

I worked with Prossimo on the following priorities:

- Make pipelined compilation as efficient as possible

- Improve raw compilation speed

- Improve support for persistent, cached and distributed builds

We start by looking for what's slow. Looking at this holistically, from the crate-compile level, might provide new insights, especially since we've rarely done this before. I gathered the 1000 most popular crates from [crates.io](http://crates.io/), and [gathered data](https://github.com/lqd/rustc-benchmarking-data/tree/main/results) for complete cargo builds including dependencies. I also gathered rustc self-profiling data for a higher-level view and profiled for sources of high memory usage. All of this was done in check, debug, and release modes, with varying degrees of parallelism.

From this high level view, we could see a few promising ways to move forward:

- Improvements to the compilation pipeline: profiling to find sources of slowness, and then find solutions and mitigations to these issues. That could be in rustc, cargo, or even rustup.

- Improve compile times of targeted crates: if popular crates contain sources of slowness, this can in turn impact all the crates that transitively depend on it. In some situations, it's possible to improve the crate itself in addition to the compiler and tools.

- Preventing future slowness: analyzing, tracking, mitigating regressions and bugs (e.g., incremental compilation issues that could lead to turning the feature off, as has happened before).

- And finally, help people achieve the above (both contributors and crate authors). It's a common occurrence that people would like to see sources of slowness in their projects, and having the compiler display this information would help them organize or refactor their code accordingly.

Based on these findings, the compiler performance working group drafted a [roadmap](https://hackmd.io/YJQSj_nLSZWl2sbI84R1qA), [updated our benchmark suite](https://hackmd.io/d9uE7qgtTWKDLivy0uoVQw) so that they stay relevant and representative of the practices people use, and developed [a policy](https://github.com/rust-lang/rustc-perf/pull/1318) to periodically update our benchmarks so that they stay relevant. We saw new hotspots and inefficiencies in these new crates, and some surprising finds related to pipelining and scheduling, to the common presence of build scripts, and the relative importance of proc-macros.

## An Overview of the Items I Worked On

The Compile-Time Function Evaluation Engine is seeing more use with the ongoing improvements and expansions to the "const" parts of the language. Its efficiency is important and will matter more and more in the future: some speedups were made here in the interning of allocations (which matters for example when traversing static arrays) by [limiting it](https://github.com/rust-lang/rust/pull/97585) to the allocations that are known to contain references or interior mutability. Some of these buffers can be big (which is another area where improvements can be made in the future), and also have derived data like masks to track whether each byte of an allocation is correctly initialized, however the hashing algorithm the compiler uses ([FxHash](https://github.com/rust-lang/rustc-hash/)) is more suited to shorter keys, and we can limit some of the costly interning work [by hashing less data overall](https://github.com/rust-lang/rust/pull/98097).

Hashing is used heavily in the compiler, and improvements to FxHash (or using a different algorithm) would have noticeable effects on compile times. While it's [surprisingly effective](https://nnethercote.github.io/2021/12/08/a-brutally-effective-hash-function-in-rust.html), we tried and measured an [interesting variation](https://github.com/rust-lang/rustc-hash/pull/18) that we ultimately chose not to land: it performed slightly differently on Intel vs AMD CPUs (and looked slightly better on the latter on some metrics). There are possible improvements still to be made on bigger buffers for example, where we could make better use of SIMD, but at the moment rustc still targets baseline x86-64 CPUs (SSE2) so that's a work item left for the future.

A related area is memory allocation (there's a saying that "rustc is a hashing and memory allocation benchmark in disguise"), and we already use jemalloc on linux and macOS. Since this is an active area of performance work for systems sofware, we regularly try alternative allocators as they keep improving. For example, Microsoft's [mimalloc](https://github.com/rust-lang/rust/pull/103944) or [snmalloc](https://github.com/microsoft/snmalloc). We've also tracked, tested, and updated rustc to the long-awaited [jemalloc 5.3 release](https://github.com/rust-lang/rust/pull/96790). Due to the way rustc is architectured in order to be used from our other tools, it's less easy to use custom allocators than in a regular rust program (`#[global_allocator]` can't be used, and there are additional requirements due to interacting with LLVM) so there still are some improvements to be made here: some (hard-to-avoid) inefficiencies on macOS are still present, and Windows is still using the default system allocator.

On the x86-64 targets, we mentioned rustc is built and distributed for x866-64 baseline CPUs, so we also tried to see whether performance would be improved with more recent microarchitecture levels instead: [x64-v2 ("SSE4")](https://github.com/rust-lang/rust/pull/95302#issuecomment-1079837472) and [x64-v3("AVX/AVX2")](https://github.com/rust-lang/rust/pull/95302#issuecomment-1080142891). While there are improvements via auto-vectorization, it is not yet worth the complications that distributing such artifacts would have to the infrastructure and CI. It's however an interesting area for future work, for both the libs and compiler teams: the compiler and standard library being able to make use of modern SIMD algorithms more easily, would have benefits that would improve upon auto-vectorization.

We mentioned above that some of the linux and macOS targets were using a custom allocator, but that's part of a bigger set of [configuration and distribution features](https://github.com/rust-lang/rust/issues/103595) made for better performance, and that can independently be enabled or disabled (mostly depending on whether the CI builders have the capacity to do that additional work). For example, in addition to having a custom allocator, doing Link-Time Optimization when building LLVM or rustc, doing Profile-Guided Optimizations for LLVM or rustc, using tools to optimize the final binaries (e.g. [BOLT](https://github.com/llvm/llvm-project/tree/main/bolt)). All of these are enabled on `x86_64-unknown-linux-gnu`. In the most recent survey, 60-70% of respondents answered that they were mainly targeting linux, but more than 30% were also targeting macOS and Windows. We've therefore worked on making improvements on these two targets, to match the level of polish seen by the Linux users. I was able to update our [bootstrap code, CI](https://github.com/rust-lang/rust/pull/96978) and perf collector to be able to use PGO for LLVM and rustc on Windows as well as enabling [ThinLTO when building rustc](https://github.com/rust-lang/rust/pull/103591) for additional improvements. The macOS builders didn't have the capacity to support such a change at the time, but the situation has since improved, and similar improvements will be done there in the future. [ThinLTO for rustc](https://github.com/rust-lang/rust/pull/105845) has already been enabled on nightly).

We were able to upgrade and deduplicate some rustc dependencies (and remove a now-unused jemalloc wrapper) to make the contributor experience slightly better, by improving rustc compile times locally and on CI.

We looked at speeding up parts of "trait coherence" (checking that there is at most one implementation of a trait for any given type) handling negative impls (an unstable feature used in parts of the standard library), by [doing less traversals](https://github.com/rust-lang/rust/pull/93343) when looking for its dedicated attributes.

Cargo and rustc support ["pipelining"](https://github.com/rust-lang/cargo/issues/6660) for faster compilation: if there's no linking involved, a crate can start compilation early, before its dependencies have completely finished their build. It only needs what is called "metadata" from them. So cargo asks rustc to emit it, and when it's available it can start building dependent crates if there's enough parallelism available. In benchmarks, we saw that the popular library `hyper` wasn't seeing this pipelining, neither were its users when building it. While there were different ways to fix this, an in-progress feature in cargo was being worked on, so we tested and benchmarked it and [helped `hyper` use it](https://github.com/hyperium/hyper/pull/2770) to fix the issue.

The benchmarks showed that some `build.rs` scripts could be slow to compile, and were surprisingly common. They showed missing pieces [in the language](https://github.com/rust-lang/rfcs/pull/3239), requiring this cargo-specific concept to achieve goals specific to a target or language version (MSRV), and took spots in compilation schedules and involved [overhead from rustup](https://github.com/rust-lang/rustup/issues/3031). We helped revive the RFC, so that [some of these scripts](https://github.com/rust-lang/log/issues/489) could be removed in the future and improve compile times, and made plans for faster compilation for them.

Most of the time, users will not build their whole set of dependencies (only after upgrading rustc, changing `RUSTFLAGS` or a combination of features, etc) but that happens often on CI (on builders with a generally low number of cores) and there were some improvements we could make in cargo here. First, some better defaults could be chosen when compiling build dependencies (build scripts and proc-macros, and their dependencies), in particular, debuginfo is less commonly useful here than for an actual binary/library. We've made a [prototype and benchmarked it](https://github.com/lqd/rustc-benchmarking-data/tree/main/experiments/cargo-build-defaults) on the 1000 crates dataset. There are [open PRs](https://github.com/rust-lang/cargo/pull/11252) to add this to cargo but review hasn't finished yet.

Then we also saw that proc-macros were serializing nodes, and seemed to be built later than we anticipated, sometimes participating in pipeline stalls. Looking at cargo's timing graphs, there were cases where compilation could be improved by changing the scheduling of the crate graph. Some prototypes were made and benchmarked on the 1000 crates dataset. The [first one](https://github.com/lqd/rustc-benchmarking-data/tree/main/experiments/cargo-schedules/pending-queue-sorted) managed to make use of the existing notion of "priority" in cargo (a proxy for the number of work items depending on a crate) to bias towards higher-priority crates whenever the choice of next crate to build was made, and has since [landed](https://github.com/rust-lang/cargo/pull/11032) in cargo. This is noticeable with a number of dependencies, or at low core counts (so matches the configuration seen on CIs, especially at the free tiers). The [second prototype](https://github.com/lqd/rustc-benchmarking-data/tree/main/experiments/cargo-schedules/pending-queue-prioritized) additionally allowed scheduling hints so users could assign higher priorities to some crates (in the spirit of this [feature request](https://github.com/rust-lang/cargo/issues/7437)) for example to build common proc-macro crates sooner (or any crate that could make better use of parallelism by being scheduled differently).

And finally to help users see whether proc-macros slowed down their builds, I [expanded the self-profiler](https://github.com/rust-lang/rust/pull/95689) to show [proc-macro expansion](https://github.com/rust-lang/rust/pull/95473), and [opt into finer details on demand](https://github.com/rust-lang/rust/pull/95739), to be able to analyze each proc-macro use and its duration. (Similarly supporting regular macros would be interesting in the future).

In the same spirit, since monomorphizations are often a compilation-time cost that is not easy to see, some work trying to show the number and sizes of generic function instantiations [has been started](https://github.com/rust-lang/rust/pull/105481). (It's helpful but there are still improvements to be made in the future: this is currently computed on the MIR, while stats on the actual LLVM IR emitted, like [cargo llvm-lines](https://github.com/dtolnay/cargo-llvm-lines/), would be even more helpful).

We were able to benchmark [bjorn3's cranelift codegen backend](https://github.com/bjorn3/rustc_codegen_cranelift) on full crates as well as on the build dependencies specifically (since they're also built for `cargo check` builds, and are always built without optimizations): there were no issues, and it performed impressively. It's well on its way to becoming a viable alternative to the LLVM backend for debug builds.

As improving compilation times for specific popular crates would be impactful throughout the ecosystem (in particular when rustc itself could have different tradeoffs when fixing a given issue), we noticed a few hotspots and made PRs to help out [async-std](https://github.com/async-rs/async-std/pull/1004), [quote](https://github.com/dtolnay/quote/pull/210), [diesel](https://github.com/diesel-rs/diesel/pull/3163).

I also re-started a long-term piece of work that is still ongoing: doing the prep work required to be able to [switch to use the lld linker on linux by default](https://github.com/rust-lang/compiler-team/issues/510). People tend to use the default linker (often `ld.bfd`) which is quite a bit slower than lld. Making cargo/rustc use it [would be noticeable](https://perf.rust-lang.org/compare.html?start=0d13f6afeba4935499abe0c9a07426c94492c94e&end=1b74e096b9bfb06f84a3007193dcd2f059cbdf6a) for the projects that aren't already using a faster linker.

We saw opportunities to remove some items from crate metadata: sometimes information could be stored redundantly, sometimes it's only used by a tool (e.g. rustdoc), and have started [this clean-up](https://github.com/rust-lang/rust/pull/98450). More work in this direction could be interesting in the future (and a bunch of work there has already been done by other contributors already): improvements in this area apply to the loading of all crates, and in particular speeding up decoding libstd/libcore's (although that is quite fast already) would ultimately apply to most compilation sessions.

As mentioned earlier, a big part of getting faster is not getting slower, so there were a lot of regression analyses (including the ones specific to our infrastructure, where we often roll up multiple PRs into one in order to save CI time) in performance and incremental compilation for example.

## Conclusion

This was a quick look at some of the work achieved in 2022, and other members of the working group have also published similar reports: [Nick Nethercote](https://nnethercote.github.io/) does so regularly, Jakub Beránek [recently did](https://kobzol.github.io/rust/rustc/2022/10/27/speeding-rustc-without-changing-its-code.html) as well. Many others have also contributed various improvements, from the standard library to the infrastructure, all that work combined together resulted in noticeable improvements to compile times.

The compiler performance working group has completed many if not all of the items in the roadmap, but performance work is never really done, and continues as we speak. Explorations and plans are being drafted for 2023, for example reviving the effort dedicated to making better use of parallelism in the compiler, and more.

I'd also like to thank Felix Klock and Wesley Wiser for their ideas, time, and guidance, the other members of the working group Ryan Levick, Mark Rousskov, Jakub Beránek and Nick Nethercote for their help, talent and the great work they did, and Prossimo for giving me the opportunity to contribute to that effort.

ISRG is a 501(c)(3) nonprofit organization that is 100% supported through the generosity of those who share our vision for ubiquitous, open Internet security. If you'd like to support our work, please consider [getting involved](/getinvolved/), [donating](/donate/), or encouraging your company to [become a sponsor](https://www.memorysafety.org/sponsor/).
