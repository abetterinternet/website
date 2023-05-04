---
author: Josh Aas
date: 2023-05-11T12:00:00Z
slug: AWS-support-for-memory-safety
title: "AWS commits $1M to Prossimo, ISRG’s project to bring memory safety to critical parts of the Web"
excerpt: "AWS commits $1M to advance four Prossimo initiatives, improving memory safety for TLS, NTP, media codec, and permissions boundaries."
---

Amazon Web Services (AWS) has long supported ISRG's mission through sponsorships of projects such as Let's Encrypt. Today, we're pleased to announce that AWS has continued its commitment to Prossimo through a contribution of $1 million, funding four initiatives focused on improving [memory safety](https://www.memorysafety.org/docs/memory-safety/): building a memory safe AV1 decoder, [rav1d](https://github.com/memorysafety/rav1d), rewriting [sudo/su](https://www.memorysafety.org/initiative/sudo-su/), furthering our efforts with [Rustls](https://www.memorysafety.org/initiative/rustls/), as well as building out [NTPd-rs](https://www.memorysafety.org/initiative/ntp/).

"At AWS, security is job zero and we are constantly looking for ways to help us and our customers operate more securely. With this funding, we're furthering ISRG's mission to build a more memory safe internet through the creation of new solutions for securing critical software tools. Investing in open source communities is essential to their long-term sustainability so they can continue to help tackle complex problems like memory safety." remarked David Nalley, Head of Open Source Strategy and Marketing at AWS.

Our work with the AV1 Decoder initiative is a unique opportunity because it's a relatively new media format and we have a chance to develop a safe decoder option before many organizations make their initial choices about AV1 implementations. This piece of infrastructure can be memory safe from the start. The plan for [rav1d](https://github.com/memorysafety/rav1d) is that it performs as well or better than the C-based [dav1d](https://code.videolan.org/videolan/dav1d) decoder.

Work on rav1d started towards the end of February 2023. The primary contractor is [Immunant](https://immunant.com/), with veteran codec expert Frank Bossen advising and contributing part-time. The plan is to transpile the C code in dav1d to Rust, then most of the time will be spent cleaning it up from unsafe transpiled Rust to safe, idiomatic Rust. The initial transpile has been completed already and work is well under way to get tests passing.

The sudo and su utilities mediate a critical privilege boundary on just about every open source operating system that powers the Internet. Unfortunately, these utilities have a long history of memory safety issues.

Work started on sudo and su in December of 2022. The contractors are a combined team from [Tweede Golf](https://tweedegolf.nl/en) and [Ferrous Systems](https://ferrous-systems.com/). The maintainer of the traditional sudo program, Todd Miller, is volunteering as an advisor to the team.

Our goal with [Rustls](https://www.memorysafety.org/initiative/rustls/) is to build a safer TLS library that can largely replace OpenSSL over time. Rustls will be performant and memory safe. This work began in 2022 and is picking up great speed both in terms of new contributions and new consumers of Rustls.

[NTP](https://www.memorysafety.org/initiative/ntp/) is how the Internet keeps track of time, but most of today's popular implementations are written in C. Our work has [produced](https://github.com/pendulum-project/ntpd-rs) a new client and server that are both ready for use. We've also added Network Time Security (NTS) to both the NTP server and client.

We're grateful for the longtime commitment from AWS to helping ISRG and its projects build a more secure and privacy-respecting Web for everyone, everywhere. If you or your organization would like to come on board as a funder of Prossimo, we would be excited to begin a conversation with you at donate@abetterinternet.org.

ISRG is a 501(c)(3) nonprofit organization that is 100% supported through the generosity of those who share our vision for ubiquitous, open Internet security. If you'd like to support our work, please consider [getting involved](/getinvolved/), [donating](/donate/), or encouraging your company to [become a sponsor](/sponsor/).
