---
author: Josh Aas, ISRG Executive Director
date: 2021-04-20T00:00:00Z
slug: preparing-rustls-for-wider-adoption
title: "Preparing Rustls for Wider Adoption"
excerpt: "It’s time for the Internet to move on to more secure software, and that’s why our Memory Safety Initiative is coordinating work to make further improvements to the Rustls TLS library."
---

SSL/TLS libraries are critical software infrastructure for the Internet. Unfortunately, most of them have a long history of serious security issues. Many of those issues stem from the fact that the libraries are usually written in languages like C, which are not [memory safe](https://www.abetterinternet.org/docs/memory-safety/). It’s time for the Internet to move on to more secure software, and that’s why our Memory Safety Initiative is coordinating work to make further improvements to the [Rustls TLS library](https://github.com/ctz/rustls).

Rustls is an excellent alternative to OpenSSL and similar libraries. Much of its critical code is written in Rust so it’s largely memory-safe without sacrificing performance. It has [been audited](https://github.com/ctz/rustls/blob/main/audit/TLS-01-report.pdf) and found to be a high quality implementation. Here’s one of our favorite lines from the report:

“Using the type system to statically encode properties such as the TLS state transition function is one just one example of great defense-in-depth design decisions.”

With financial support from Google, we’ve contracted with Dirkjan Ochtman, an experienced Rust developer and Rustls contributor, to make a number of additional improvements to Rustls, including:

* [Enforce a no-panic policy](https://github.com/ctz/rustls/issues/447) to eliminate the potential for undefined behavior when Rustls is used across the C language boundary.
* Improve the [C API](https://github.com/abetterinternet/crustls) so that Rustls can even more easily be integrated into existing C-based applications. Merge the C API into the main Rustls repository.
* Add support for validating certificates that contain IP address in the subject alternate name extension.
* Make it possible to configure server-side connections based on client input.

These improvements should make Rustls a more attractive option for many projects. We are already integrating it into [Curl](https://www.abetterinternet.org/post/memory-safe-curl/) and [Apache httpd](https://www.abetterinternet.org/post/memory-safe-tls-apache/), and we hope to replace the use of OpenSSL and other unsafe TLS libraries in use at [Let’s Encrypt](https://letsencrypt.org/) with Rustls.

We currently live in a world where deploying a few million lines of C code on a network edge to handle requests is standard practice, despite all of the evidence we have that such behavior is unsafe. Our industry needs to get to a place where deploying code that isn’t memory safe to handle network traffic is widely understood to be dangerous and irresponsible. People need memory safe software that suits their needs to be available to them though, and that’s why we’re getting to work.

ISRG is a 501(c)(3) nonprofit organization that is 100% supported through the generosity of those who share our vision for ubiquitous, open Internet security. If you’d like to support our work, please consider [getting involved](https://www.abetterinternet.org/getinvolved/), [donating](https://www.abetterinternet.org/donate/), or encouraging your company to [become a sponsor](https://www.abetterinternet.org/sponsor/).
