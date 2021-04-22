---
author: Josh Aas, ISRG Executive Director
date: 2021-02-02T00:00:00Z
slug: memory-safe-tls-apache
title: "A Memory Safe TLS Module for the Apache HTTP Server"
excerpt: "The Apache HTTP Server, httpd, is an important piece of the Internet’s infrastructure. Hundreds of millions of websites use it every day to serve requests. As such, improvements to httpd security have broad impact."
---

<div class="card border-0 pic-quote-right">
    <div class="pt-4">
        <blockquote class="blockquote">
            <span class="quote"></span>
            <div class="quote-text">
                <p class="font-italic lh-170">Apache httpd is still a critically important piece of infrastructure, 26 years after its inception. As an original co-developer, I feel a serious revamp like this has the potential to protect a lot of people and keep httpd relevant far into the future.</p>
                <footer class="blockquote-footer"><cite title="Source Title">Brian Behlendorf</cite></footer>
            </div>
        </blockquote>
    </div>
</div>

The [Apache HTTP Server](https://httpd.apache.org/), httpd, is an important piece of the Internet’s infrastructure. Hundreds of millions of websites use it every day to serve requests. As such, improvements to httpd security have broad impact.

One of the biggest issues with httpd is the fact that it’s written in C, which is not a memory safe language. Memory safety issues dominate its list of [security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-45/product_id-66/Apache-Http-Server.html). Rewriting httpd from scratch or moving its users to a memory safe alternative would be incredibly difficult, but fortunately we can tackle httpd’s memory safety problem incrementally.

ISRG is starting by facilitating the creation of a new TLS module for httpd called mod_tls. The new module will use the excellent [Rustls](https://github.com/ctz/rustls) library for TLS instead of OpenSSL. We hope that someday mod_tls will replace mod_ssl as the default in httpd.

We have contracted [Stefan Eissing](https://eissing.org/) of [Greenbytes](https://www.greenbytes.de/), also an httpd committer, to do the work. [Google](https://www.google.com/) has generously provided the funding.

We currently live in a world where deploying a few million lines of C code on a network edge to handle requests is standard practice, despite all of the evidence we have that such behavior is unsafe. Our industry needs to get to a place where deploying code that isn’t memory safe to handle network traffic is widely understood to be dangerous and irresponsible. People need memory safe software that suits their needs to be available to them though, and that’s why we’re getting to work.

ISRG is a 501\(c\)(3) nonprofit organization that is 100% supported through the generosity of those who share our vision for ubiquitous, open Internet security. If you’d like to support our work, please consider [getting involved](https://www.abetterinternet.org/getinvolved/), [donating](https://www.abetterinternet.org/donate/), or encouraging your company to [become a sponsor](https://www.abetterinternet.org/sponsor/).
