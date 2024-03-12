---
author: Sarah Gran
date: 2024-03-12T00:12:00Z
title: "White House, Craig Newmark Support Memory Safe Software"
excerpt: "Growing attention on the solvability of memory safety."
display_default_footer: true
slug: growing-support
---

<div class="card border-0 pic-quote-right">
    <img alt="Logos for craig newmark philanthrophies and the White House" class="rounded mx-auto img-fluid" src="/images/blog/blog-white-house-craig-newmark-philanthropies.png" />
</div>

Initial signs point to 2024 being a big year for memory safety and we aim to continue Prossimo's work to accelerate the momentum.

Last month, the White House's Office of the National Cyber Director (ONCD) issued a [report](https://www.whitehouse.gov/oncd/briefing-room/2024/02/26/memory-safety-fact-sheet/) that strongly endorses the use of memory safe languages. We've been formally working on improving memory safety for critical Internet infrastructure for years now and are proud to be the only 501c3 nonprofit referenced in this report. The report highlights a few points that are well-aligned with Prossimo's outlook:

1.  Now is the time to make memory safe choices since it effectively solves an avoidable problem,

2.  There is clear evidence that switching to memory safe languages has a positive impact on digital security, and

3.  Everything everywhere doesn't need to be re-written; instead take a tactical approach that prioritizes security-sensitive functions.

The positive industry response to the report is encouraging as well. "Memory safety vulnerabilities pose a significant security risk to software systems and are a root cause of many of the most damaging cyberattacks. To address this, we need to adopt memory safe programming languages for new applications and rewrite code using modern memory safe languages with secure development practices from the start. We're pleased to see the ONCD raise this issue because the integrity of the global software supply chain is critical for national and international security," said John Delmare, Global Cloud and Security Application Lead, Accenture.

We also received a vote of confidence from one of cybersecurity's most influential philanthropists: Craig Newmark. [Craig newmark philanthropies](https://craignewmarkphilanthropies.org/) renewed a grant for $100,000 to support Prossimo's efforts toward better memory safety in critical open source software. Since its founding, 100% of Prossimo's funding has come from contributions, and support from industry leaders like Craig Newmark continues to sustain our momentum across a wide range of initiatives:

**Sudo/su**: A trimmed down, [memory safe version of Sudo/su](https://www.memorysafety.org/initiative/sudo-su/) is ready for use in [Fedora](https://bodhi.fedoraproject.org/updates/?search=sudo-rs-0.2.2) and [Debian](https://packages.debian.org/sid/sudo-rs#:~:text=sudo%2Drs%20is%20a%20safety,vulnerabilities%20related%20to%20memory%20management.).

**Rustls**: This [memory safe TLS library](https://www.memorysafety.org/initiative/rustls/) has a strong culture and practice of benchmarking for improved performance and initial indicators show it will surpass OpenSSL on a variety of metrics this year. In addition, Rustls [now](https://www.memorysafety.org/blog/rustls-with-aws-crypto-back-end-and-fips/) has a FIPS-certified cryptography library and [will soon land](https://github.com/rustls/rustls/blob/main/ROADMAP.md) an OpenSSL compatibility layer, making the transition from OpenSSL seamless. The world has needed a better TLS library for a long time, and 2024 will be the year for Rustls to step up.

**Reverse Proxy**: Nearly every big deployment on the Internet uses a reverse proxy and that [needs to be memory safe](https://www.memorysafety.org/initiative/reverse-proxy/). We are [building](https://www.memorysafety.org/blog/introducing-river/) just that on top of Cloudflare's recently open sourced Pingora framework. It's called River and it will have many improvements including and beyond memory safety.

**AV1**: Media decoders are some of the most prolific sources of memory safety vulnerabilities (see the recent [WebP vulnerability](https://blog.cloudflare.com/uncovering-the-hidden-webp-vulnerability-cve-2023-4863/)). We're working to create a suite of media decoders and compression libraries that are safer without sacrificing performance, which is critical for adoption. We're currently developing a safer [AV1 decoder](https://www.memorysafety.org/initiative/av1/) and we're seeing strong interest in adoption from major companies.

We're excited by the growing community invested in building a memory safe future. If you or your organization is interested in [helping us get there](https://www.memorysafety.org/become-a-funder/), please reach out at <sponsor@abetterinternet.org>
