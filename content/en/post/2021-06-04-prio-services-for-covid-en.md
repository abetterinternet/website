---
author: Josh Aas, Sarah Gran
date: 2021-06-04T00:00:00Z
slug: prio-services-for-covid-en
title: "ISRG Prio Services for Preserving Privacy in COVID-19 EN Apps"
excerpt: "ISRG serves as one of the data processors in the Prio-based privacy-preserving metrics system used by Apple and Google’s Exposure Notifications Express (ENX) system."
---

ISRG serves as one of the data processors in the Prio-based privacy-preserving metrics system used by Apple and Google’s Exposure Notifications Express (ENX) system. Along with our partners, we have designed a system that protects privacy while providing useful data, we’ve created a production-quality implementation, and we operate our service efficiently and reliably. We have been participating in this collaboration since 2020 and see this as a great example of Prio as a useful privacy tool.

There is [strong evidence](https://www.nature.com/articles/s41586-021-03606-z) that effective app-based contact tracing can help slow the spread of COVID-19. The role of [Exposure Notification Private Analytics](https://covid19-static.cdn-apple.com/applications/covid19/current/static/contact-tracing/pdf/ENPA_White_Paper.pdf) (ENPA) is to enable the Public Health Authorities (PHAs) administering an ENX app to collect aggregate metrics while protecting the privacy of each individual person using the app. These metrics can help with the epidemiological response based on new trends in the spread of COVID-19. For example, ENPA can provide the total number of exposure notification alerts displayed to users without exposing how many alerts each individual’s device has received, or whether a particular device has displayed alerts at all. This information can help PHAs better understand the effectiveness of the system and adjust the parameters they provide for ENX if appropriate. ENPA is available for people using a supported iOS or Android phone, though they must opt in once their state’s PHA has decided to participate.

On a person’s device, ENPA data is divided into two shares in such a way that a person’s data is not intelligible without both shares. While the data is still on the device, one share is encrypted using an encryption key from ISRG, the other is encrypted with a key from the National Institutes of Health (NIH). The data shares are then sent to ingestion servers operated by Google and Apple. The ingestion servers cannot decrypt the data shares, but they can do device authenticity verification and load balancing. Once any such functions are performed, the data shares are then passed on to ISRG and NIH. Once we get our share, we sum it into a partial aggregate sum. NIH does the same with their share. The ISRG and NIH partial aggregate sums are then sent to a server operated by MITRE, where they are combined into a complete set of metrics that can be viewed by PHAs.

This Prio-based process ensures that individual user data is never accessible in an intelligible form once it leaves the user's device, yet useful aggregate metrics are provided to PHAs. To see exactly how it works, check out ISRG’s [open source implementation](https://github.com/abetterinternet/prio-server).

![ENPA Service Flow](/images/2021.06.04-ENPA-Service-Flow.png "ENPA Service Flow")

Through this collaboration we are pleased to see that Prio can work seamlessly at scale; ISRG has aggregated over two billion device metrics as part of the ENPA system. ENPA is currently deployed in eleven U.S. states and Washington, D.C. and we will soon be providing this service to countries around the world to help reduce the spread of COVID-19. 

We are [continuing to develop](https://www.abetterinternet.org/post/introducing-prio-services/) our Prio service so it is more easily accessible to applications beyond our ENPA work and will provide updates as that happens.

ISRG is a 501\(c\)(3) nonprofit organization that is 100% supported through the generosity of those who share our vision for ubiquitous, open Internet security. If you’d like to support our work, please consider [getting involved](https://www.abetterinternet.org/getinvolved/), [donating](https://www.abetterinternet.org/donate/), or encouraging your company to [become a sponsor](https://www.abetterinternet.org/sponsor/).
