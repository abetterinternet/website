---
title: What is memory safety and why does it matter?
slug: memory-safety
---

Memory safety is a property of some programming languages that prevents programmers from introducing certain types of bugs related to how memory is used. Since memory safety bugs are often security issues, memory safe languages are more secure than languages that are not memory safe.

Memory safe languages include Rust, Go, C#, Java, Swift, Python, and JavaScript. Languages that are not memory safe include C, C++, and assembly.

## Types of Memory Safety Bugs

To begin understanding memory safety bugs, we'll consider the example of an application that maintains to do lists for many users. We'll look at a couple of the most common types of memory safety errors that can occur in programs that are not memory safe.

### Out of Bounds Reads and Writes

If we have a to do list with ten items, and we ask for the eleventh item, what should happen? Clearly we should receive an error of some sort. We should also get an error if we ask for the negative first item. 

Under these circumstances, a language that is not memory safe may allow a programmer to read whatever memory contents happen to exist before or after the valid contents of the list. This is called an out of bounds read. The memory before the first item of a list might be the last item of someone else's list. The memory after the last item of a list might be the first item of someone else's list. Accessing this memory would be a severe security vulnerability! Programmers can prevent out of bounds reads by diligently checking the index of the item they're asking for against the length of the list, but programmers make mistakes. It's better to use a memory safe language that protects you and your users from the class of bugs by default.

In a memory safe language we will get an error at compile time or a crash at run time. Crashing the program may seem severe, but it's better than letting users steal each others' data!

A closely related vulnerability is an out-of-bounds write. In this case imagine we tried to change the eleventh or negative first item in our to do list. Now we are changing someone else's to do list!

### Use After Free

Imagine we delete a to do list and then later request the first item of that list. Clearly we should receive an error, as we shouldn't be able to get items from a deleted list. Languages that are not memory safe allow programs to fetch memory that they've said they are done with, and that may now be used for something else. The location in memory may now contain someone else's to do list! This is called a use-after-free vulnerability.

## How common are memory safety vulnerabilities?

Extremely. A [recent study] found that 60-70% of vulnerabilities in iOS and macOS are memory safety vulnerabilities. [Microsoft estimates] that 70% of all vulnerabilities in their products over the last decade have been memory safety issues. [Google estimated] that 90% of Android vulnerabilities are memory safety issues. [An analysis of 0-days] that were discovered being exploited in the wild found that more than 80% of the exploited vulnerabilities were memory safety issues [^1].

The [Slammer worm] from 2003 was a buffer overflow (out-of-bounds write). So was [WannaCry] (out-of-bounds write). The [Trident exploit] against iPhones used three different memory safety vulnerabilities (two use-after-frees and an out-of-bounds read). [HeartBleed] was a memory safety problem (out-of-bounds read). [Stagefright] on Android too (out-of-bounds writes). The [Ghost] vulnerability in glibc? You betcha (out-of-bounds write).

These vulnerabilities and exploits, and many others, are made possible because C and C++ are not memory safe. Organizations which write large amounts of C and C++ inevitably produce large numbers of vulnerabilities that can be directly attributed to a lack of memory safety. These vulnerabilities are exploited, to the peril of [hospitals], [human rights dissidents], and [health policy experts]. Using C and C++ is [bad for society], [bad for your reputation], and it's [bad for your customers].

## What other problems are associated with languages that are not memory safe?

Languages that aren't memory safe also negatively impact stability, developer productivity, and application performance.

Because languages that are not memory safe tend to allow for more bugs and crashes, application stability can be greatly impacted. Even when crashes are not security sensitive they are still a very poor experience for users.

Worse, these bugs can be incredibly difficult for developers to track down. Memory corruption can often cause crashes to occur very far from where the bug actually is. When multi-threading is involved, additional bugs can be triggered by slight differences in which thread runs when, leading to even more difficult to reproduce bugs. The result is that developers often need to stare at crash reports for hours in order to ascertain the cause of a memory corruption bug. These bugs can remain unfixed for months, with developers absolutely convinced a bug exists, but having no idea of how to make progress on uncovering its cause and fixing it.

Finally, there is performance. In decades past, one could rely on CPUs getting significantly faster every year or two. This is no longer the case. Instead, CPUs now come with more cores. To take advantage of additional cores, developers are tasked with writing multi-threaded code.

Unfortunately, multi-threading exacerbates the problems associated with a lack of memory safety, As a result, efforts to take advantage of multi-core CPUs are often intractable in C and C++. For example - Mozilla had multiple failed attempts to introduce multi-threading into Firefox's C++ CSS subsystem before finally (successfully) rewriting the system in multi-threaded Rust.

## What's the right path forward?

Use memory safe languages! There are lots of great ones to choose from. Writing an operating system kernel or web browser? Consider Rust! Building for iOS and macOS? Swift's got you covered. Network server? Go's a fine choice. These are just a few examples, there are many other excellent memory safe languages to choose from (and many other wonderful use case pairings!).

Changing the programming language your organization uses is not something to be undertaken lightly. It means changing the skills you're looking for when you hire, it means retraining your workforce, it means rewriting large amounts of code. Nonetheless, we believe in the long term this is required, so we'd like to lay out why alternatives to adopting a new programming language have not been successful.

If we take for granted that using an unsafe language will produce some number of vulnerabilities, the question we'd want to ask is: are there techniques we can undertake to reduce this risk, without forcing ourselves to entirely change programming languages? And the answer is absolutely yes. Not all projects written in unsafe languages are equally unsafe and unreliable.

Some practices which can lower the risk of using an unsafe language are:

- Using [some modern C++ idioms] which can help produce more safe and reliable
  code
- Using [fuzzers] and [sanitizers] to help find bugs before they make it into
  production
- Using exploit mitigations to help increase the difficulty of exploiting
  vulnerabilities
- Privilege separation so that even when a vulnerability is exploited, the blast radius is smaller

These practices meaningfully lower the risk of using an unsafe language, and if we've failed to convince you to change languages, and you are going to continue to write C and C++, adopting these is an imperative. Unfortunately, they are also woefully insufficient.

The people who are the forefront of developing modern C++ idioms, fuzzers, sanitizers, exploit mitigations, and privilege separation techniques are browser and operating system developers — precisely the groups we highlighted at the start with statistics about the prevalence of memory safety problems. Despite these teams' investment in these techniques, their use of unsafe languages weighs them down. At pwn2own, a large hacking competition, in 2019 [over half of vulnerabilities exploited] in these products were due to a lack of memory safety, and with one exception, [every successful attack exploited] at least one memory safety vulnerability.

## Is dropping C and C++ really practical?

Hopefully by now we've convinced you that unsafe languages like C and C++ are fundamental root causes of huge swathes of the insecurity in our products, and that while there are practices you can undertake to reduce the risk, you can't get anywhere close to eliminating it. All of which may still leave you with a feeling that changing the programming language you use, to produce millions of lines of code, is an overwhelmingly large task. By breaking it down into manageable pieces, we can start making progress — our goal is not one big-bang rewrite-the-world, but rather to make progress towards reducing our risk.

The first place to start is with brand new projects. For these, you have the choice to simply use a memory safe language. These have the lowest risk, because you do not need to start by rewriting any code, though projects like this often do require improvements to testing or deployment infrastructure to support a new programming language. This was the approach taken in ChromeOS's CrosVM, a brand new component of the operating system.

If you don't have new projects, the next place to look for opportunities to use a memory safe language are new components of an existing project. Several of the memory safe languages have first-class support for interoperating with C and C++ codebases (both Rust and Swift, for example). This has a slightly higher initial investment required, as it requires integration into build systems, as well as building abstractions in a new language for objects and data that need to be passed across the boundary between the two languages. This is the strategy that was successfully used when [WebAuthn] was implemented as a new component of Firefox and by a project to enable writing [Linux kernel modules in Rust].

The thing both of these first two approaches have in common is they deal with new code. This has the advantage of having well defined interaction points with existing code, and not needing to rewrite anything to get started on the effort. It also gives you a chance to stem the bleeding: no new components in unsafe languages, and we'll deal with the existing code incrementally. For projects that don't have any natural new component to get started with using a memory safe language, adoption is more challenging.

In this case you need to look for some existing component to *rewrite* from an unsafe language to a safe language. It's best if the component you choose is something where you were already considering a rewrite: maybe for performance, or for security, or because the code was too difficult to maintain. You should attempt to pick something with as small a scope as possible for your first memory safety rewrite, in order to help the project be successful and ship as quickly as possible; this helps minimize the risk inherent in a rewrite. Stylo, the rewrite of Firefox's CSS engine in Rust, is a successful example of this approach.

Regardless of which approach is the right fit for your organization, there are a few things to keep in mind to maximize your chances of success. The first is to make sure you have internal champions and senior engineers who can provide code reviews and mentoring in a language that will be new to many team members. The natural extension of this is to make sure that engineers who will be working in a new language have resources available to them like books, trainings, or internal guides. Finally, you'll want to make sure you have the same shared infrastructure for your new language that you have for your old one, such as build system, test, deployment, crash reporting, and other integrations.

## Conclusion

Adopting a new programming language and beginning the process of migrating to it is not an easy task. It requires planning, resourcing, and ultimately an investment from your entire organization. Life would be much easier if we didn't have to contemplate such things. Unfortunately, a review of the data makes clear we simply cannot consider continuing to use unsafe languages for security sensitive projects.

The data bears out, over and over again, that when projects use unsafe languages like C and C++ they are burdened by an avalanche of security vulnerabilities. No matter how talented the engineers, how great the investment in privilege reduction and exploit mitigations, using a language that is not memory safe simply results in too many bugs. These bugs greatly reduce security, as well as stability and productivity.

Fortunately, we do not need to be satisfied with the status quo. The last few years have produced a groundswell of fantastic alternatives to C and C++, such as Rust, Swift, and Go, amongst many others. And this means we don't have to wear memory corruption vulnerabilities as an albatross around our necks for years and years to come, as long as we choose not to. We look forward to a time when choosing to use an unsafe language is considered as negligent as not having multi-factor-authentication or not encrypting data in transit.

## Thank you to Alex Gaynor

This explanation is, with permission, based on Alex Gaynor's blog post [Introduction to Memory Unsafety for VPs of Engineering](https://alexgaynor.net/2019/aug/12/introduction-to-memory-unsafety-for-vps-of-engineering/).

[^1]: This is specifically a measure of software vulnerabilities, it does not include things like credential phishing, which are incredibly common. Incidentally, credential phishing itself is another security issue where we know how to defeat it once and for all — deploy security keys with WebAuthn. This will be the subject of a future article.

[Slammer worm]: https://en.wikipedia.org/wiki/SQL_Slammer
[WannaCry]: https://www.fireeye.com/blog/threat-research/2017/05/smb-exploited-wannacry-use-of-eternalblue.html
[Trident exploit]: https://blog.lookout.com/trident-pegasus-technical-details
[HeartBleed]: https://tonyarcieri.com/would-rust-have-prevented-heartbleed-another-look
[Stagefright]: https://googleprojectzero.blogspot.com/2015/09/stagefrightened.html
[Ghost]: https://blog.qualys.com/laws-of-vulnerabilities/2015/01/27/the-ghost-vulnerability
[recent study]: https://langui.sh/2019/07/23/apple-memory-safety/
[Microsoft estimates]: https://msrc-blog.microsoft.com/2019/07/18/we-need-a-safer-systems-programming-language/
[Google estimated]: https://security.googleblog.com/2019/05/queue-hardening-enhancements.html
[An analysis of 0-days]: https://twitter.com/LazyFishBarrel/status/1129000965741404160
[hospitals]: https://www.bbc.com/news/technology-41753022
[human rights dissidents]: https://citizenlab.ca/2016/08/million-dollar-dissident-iphone-zero-day-nso-group-uae/
[health policy experts]: https://citizenlab.ca/2017/02/bittersweet-nso-mexico-spyware/
[bad for society]: https://www.telegraph.co.uk/technology/2018/10/11/wannacry-cyber-attack-cost-nhs-92m-19000-appointments-cancelled/
[bad for your reputation]: https://www.zdnet.com/article/qualpwn-vulnerabilities-in-qualcomm-chips-let-hackers-compromise-android-devices/
[bad for your customers]: https://www.nytimes.com/2018/12/02/world/middleeast/saudi-khashoggi-spyware-israel.html
[some modern C++ idioms]: https://alexgaynor.net/2019/apr/21/modern-c++-wont-save-us/
[fuzzers]: https://llvm.org/docs/LibFuzzer.html
[sanitizers]: https://clang.llvm.org/docs/AddressSanitizer.html
[over half of vulnerabilities exploited]: https://twitter.com/LazyFishBarrel/status/1110021027851964417
[every successful attack exploited]: https://twitter.com/LazyFishBarrel/status/1110023874396078081
[WebAuthn]: https://blog.mozilla.org/security/2019/03/19/passwordless-web-authentication-support-via-windows-hello/
[Linux kernel modules in Rust]: https://github.com/fishinabarrel/linux-kernel-module-rust
