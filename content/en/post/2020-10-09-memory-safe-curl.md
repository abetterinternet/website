---
author: Josh Aas, ISRG Executive Director
date: 2020-10-09T00:00:00Z
slug: memory-safe-curl
title: "Memory Safe ‘curl’ for a More Secure Internet"
excerpt: "Memory safety vulnerabilities represent one of the biggest threats to Internet security. As such, we at ISRG are interested in finding ways to make the most heavily relied-upon software on the Internet memory safe."
---

Memory safety vulnerabilities represent one of the biggest threats to Internet security. As such, we at ISRG are interested in finding ways to make the most heavily relied-upon software on the Internet memory safe. Today we’re excited to announce that we’re working with [Daniel Stenberg](https://daniel.haxx.se/), author of ubiquitous [curl](https://curl.haxx.se/) software, and [WolfSSL](https://www.wolfssl.com/), to make critical parts of the curl codebase memory safe.

ISRG is funding Daniel to work on adding support for [Hyper](https://hyper.rs/) as an HTTP back-end for curl. Hyper is a fast and safe HTTP implementation written in Rust.

At the same time, ISRG engineers will add support for [Rustls](https://github.com/ctz/rustls) as a TLS back-end for curl. Rustls is a safe implementation of TLS, including certificate verification and the network protocol written in Rust. It has been [audited](https://github.com/ctz/rustls/blob/main/audit/TLS-01-report.pdf) and we suggest reading the conclusions on page 11 of the report if you want to get even more excited about Rustls.

At first the memory-safe HTTP and TLS backends will be opt-in. We will work with Daniel and  various partners to make sure they are extensively tested, and if all goes well the plan is for the memory safe back-ends to become the default. By making the most frequently used networking code in curl memory safe by default we’ll better protect the billions of people who rely on systems using curl.

Users who need to continue using the unsafe C back-ends for whatever reason will be able to continue doing so by building curl with the C back-ends enabled.

We’d like to thank Daniel for his willingness to be a leader on this issue. It’s not easy to make such significant changes to how wildly successful software is built, but we’ve come up with a great plan and together we’re going to make one of the most critical pieces of networking software in the world significantly more secure. We think this project can serve as a template for how we might secure more critical software, and we’re excited to learn along the way.

We’d also like to thank everyone involved in creating Hyper, Rustls, and the libraries they depend on. In particular we’d like to thank Sean McArthur for his work on [Hyper](https://hyper.rs/), Joseph Birr-Pixton for his work on [Rustls](https://github.com/ctz/rustls), and Brian Smith for his work on [Ring](https://github.com/briansmith/ring) (which Rustls uses).

The mission of Internet Security Research Group (ISRG) is to reduce financial, technological, and educational barriers to secure communication over the Internet. ISRG is a California public benefit corporation, recognized by the IRS as a tax-exempt organization under Section 501(c)(3). Our work is funded, in part, by individuals from more than 55 countries around the world. To donate, visit [https://letsencrypt.org/donate](https://letsencrypt.org/donate)
