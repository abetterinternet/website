---
author: Josh Aas, Tim Geoghegan
date: 2020-11-18T00:00:00Z
excerpt: "Today we are announcing a new project for ISRG: operation of [Prio Services](https://www.abetterinternet.org/prio/) infrastructure. Prio Services will be a second project joining Let’s Encrypt under the ISRG umbrella."
title: "Introducing ISRG Prio Services for Privacy Respecting Metrics"
slug: introducing-prio-services
---

Today we are announcing a new project for ISRG: operation of [Prio Services](https://www.abetterinternet.org/prio/) infrastructure. Prio Services will be a second project joining Let’s Encrypt under the ISRG umbrella.

Applications such as web browsers, mobile applications, and websites generate metrics. Normally they would just send all of the metrics back to the application developer, but with Prio, applications split the metrics into two anonymized and encrypted shares and upload each share to different processors that do not share data with each other. This way only minimal information about the original metrics is revealed to either processor. Each processor then aggregates its shares into a partial sum. The partial sums can then be combined into a final aggregation, permitting useful statistics over the whole body of metrics while revealing minimal information about individual users. To learn more about the foundations of Prio, we recommend reading the [Prio research paper by Henry Corrigan-Gibbs and Dan Boneh of Stanford University](https://crypto.stanford.edu/prio/paper.pdf).

We have been researching Prio technology for some time because the privacy provided by this service can deliver significant benefits to the public. Application end-users have little control over the metrics that are collected about their application usage and how that information is used by developers. When applications use systems like ISRG’s Prio Services, end-users won’t have to just trust that they are safe from an attacker stealing and disclosing their information, or a company selling their personal data, or a government collecting their information for mass surveillance. By offering low-cost and easy-to-use cryptographic privacy protection for user metrics, ISRG will be taking a significant step to protect the general public from privacy violations. It is our hope that privacy respecting metrics collection will become an expectation for application developers. We are excited to offer this service to lead the way. 

ISRG will operate Prio data share processors as a service to facilitate a subscriber's private metrics collection system. Our Site Reliability Engineering team maintains our [open source data share processor](https://github.com/abetterinternet/prio-server) and operates a 24/7 oncall schedule to ensure it functions smoothly. Subscribers to ISRG's Prio Services are responsible for getting a second data share processor which implements the same protocol as ours, as well as sharing, encrypting, and uploading metrics from their applications to the data share processors and assembling the final aggregation. 

We are in the process of building out this service for our first subscribers, whom we plan to share more information about shortly. We believe we will be the first organization to operate Prio services in a production capacity.

We’d like to thank Dan Boneh and Henry Corrigan-Gibbs for their incredible work developing the Prio idea and system. We’d also like to thank the people at Mozilla Firefox who have [begun to experiment](https://blog.mozilla.org/security/2019/06/06/next-steps-in-privacy-preserving-telemetry-with-prio/) with using Prio for Firefox and sharing their experience.

ISRG is a 501(c)(3) nonprofit organization that is 100% supported through the generosity of those who share our vision for ubiquitous, open Internet security. If you’d like to support our work, please consider [getting involved](https://www.abetterinternet.org/getinvolved/), [donating](https://www.abetterinternet.org/donate/), or encouraging your company to [become a sponsor](https://www.abetterinternet.org/sponsor/).
