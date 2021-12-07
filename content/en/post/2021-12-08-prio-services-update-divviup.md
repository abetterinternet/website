---
author: Josh Aas
date: 2021-12-08T00:00:00Z
slug: prio-services-update
title: "Project Update and New Name for ISRG Prio Services: Introducing Divvi Up!"
excerpt: "ISRG is developing a privacy-preserving metrics protocol and service."
---

In the summer of 2020, we began building a service based on [Prio](https://crypto.stanford.edu/prio/paper.pdf) - a cryptographic technique that enables privacy-preserving aggregation of metrics. We built it with focused engineering in the typical ISRG way and had it running in production by the end of the year. The urgency was derived from our intended use: to [provide metrics](/post/prio-services-for-covid-en/) to the Public Health Authorities on the effectiveness of exposure notification apps used to slow the spread of Covid-19. We’ve processed over 12 billion metrics since launch.

We’ve continued to evolve our infrastructure based both on our experience with the Covid-19 apps and input from a larger collaboration with folks who are working to [design and develop a standard protocol](https://github.com/abetterinternet/ppm-specification) for privacy preserving measurement. The protocol aims to include the capability to use Prio or another related technique called “[Heavy-hitters](https://eprint.iacr.org/2021/017.pdf).” Since two parties are required for either approach to work, it’s critical that we develop a protocol that can be widely used and standardized. As a nonprofit whose role is to advance privacy for the people using the internet, we think it’s important to have a seat at the table when design decisions are made so the public’s benefit is considered.

This work was recently presented at the [IETF](https://datatracker.ietf.org/group/priv/) to begin the standardization process. The initial presentation was overall well-received and we anticipate the formation of a Working Group in early 2022.

Meanwhile, on the technical development side, we have [an initial prototype of the protocol](https://github.com/abetterinternet/ppm-prototype) to test assumptions made in the standard. We will continue to make the prototype more robust in coming months with the goal of having a deployment that can be tested by partners in 2022.

We’ve received funding from Google and Facebook to develop our work. Thank you! We are seeking additional funding to support the engineering and operational cost of developing this service.

Last, the name of our service is changing!

<div style="text-align: center">
    <img class="img-fluid" alt="Divvi Up Logo" style="max-height: 200px; padding: 40px 0px" src="/images/divviup/Divvi-Up-Large-Full-Color-Logo.png" />
</div>

We’ve re-named our project to [Divvi Up](/divviup/) in order to differentiate our service from the protocol itself. The name Divvi Up derives from a core concept of this work where data must be divided into shares.

ISRG is a 501(c)(3) nonprofit organization that is 100% supported through the generosity of those who share our vision for ubiquitous, open Internet security. If you’d like to support our work, please consider [getting involved](/getinvolved/), [donating](/donate/), or encouraging your company to [become a sponsor](https://www.abetterinternet.org/sponsor/).
