---
author: "Josh Aas"
date: 2025-02-28T00:00:00Z
slug: "prossimo-criteria"
title: "How Prossimo's Risk and Opportunity Criteria Help Us Plan"
excerpt: "Identifying memory safety work that is both high impact and efficiently achievable."
---

<div class="card border-0 pic-quote-right">
    <img alt="Prossimo logo " class="mx-auto img-fluid" src="/images/tenth-anniversary/prossimo-logo.png" style="max-width: 200px; margin-bottom: 20px;" />
</div>

Prossimo's primary goal is to move the Internet's most security-sensitive software infrastructure to [memory safe](https://www.memorysafety.org/docs/memory-safety/) code. Many of the most critical software vulnerabilities are memory safety issues in C and C++ code, and while there are ways to reduce the risk, including fuzzing and static analysis, memory safety vulnerabilities continue to plague the Internet.

The good news is that with the rare exception of code that must be written in assembly for performance and/or security reasons (e.g. cryptographic routines), we know how to get rid of memory safety vulnerabilities entirely: write code in languages that don't allow for those kinds of mistakes. It's a more or less solved research problem, and as such we don't need to suffer from this kind of thing any more. It can be relegated to the past like smallpox, we just have to do the work.

We recognize that it will be a lot of work to move significant portions of the Internet's C and C++ software infrastructure to memory safe code, but the Internet will be around for a long time. There is time for ambitious efforts to pay off. The relevant stakeholders certainly have the resources to do this for the most critical software out there. By being smart about our initial investments and focusing on the most critical components, we can start seeing significant returns within a few years.

We don't do our work alone. We get advice from community members, and most of the work we facilitate is done by open source maintainers and contractors. Our role is to provide strategic planning, facilitation, and communication. We identify high impact projects, build and maintain relationships with open source maintainers and funders, help develop plans, coordinate the work, and communicate information about the work to the public and our partners.

In order to achieve the positive impact we're aiming for, the first thing we need to do is identify work that is both high impact and efficiently achievable. We do this at Prossimo with two different sets of criteria. It's important to note that our criteria are just one way of approaching this kind of work - other people and organisations might have different criteria that work well for them. This is not a situation in which there is a single correct way of looking at things.

## Risk Criteria

The first set of criteria are our risk criteria. These inform us about the level of risk that a software component represents. These are not the only things we consider, but we're trying to keep it somewhat simple conceptually and these things are at the top of our list.

1. Very widely used (nearly every server and/or client)
2. On a security boundary (e.g. network boundary, privilege boundary)
3. Performing a critical function

The first criterion here, widespread use, addresses a single but important aspect of determining the severity of a vulnerability. When something is widely used, there is more surface area across the Internet for attackers to choose from and more systems to exploit.

The second criterion, on a security boundary, relates the fact that usually an attacker is trying to get from one position to another and must cross a boundary to get there. The closer software is to receiving data from untrusted networks like the Internet, the easier it is to exploit and, typically, the more value there is in exploitation. Privilege boundaries are often hard to exploit in terms of opportunity, but the consequences of exploitation can be more devastating. An example might be a vulnerability in a utility like `sudo` and it's why we invested in a [memory safe implementation of sudo](https://github.com/trifectatechfoundation/sudo-rs).

The third criterion is another one focused on severity. Exploits in software performing critical functions are usually (though not always) more negatively impactful than exploits in software performing less important functions.

It's important to note that our criteria differs from approaches based primarily on historical analysis of where we've already seen concentrations of memory safety vulnerabilities. Prioritizing work based on historical vulnerability analysis is important - we need to address known problems in the software we depend on! However, this work already gets a lot of attention, it's almost purely reactive, and it often gives too much weight to volume over severity. We think Prossimo has the most to offer by looking ahead a bit and working on some of the more difficult investments in memory safety that we ought to be making.

To boil all of this down to a single sentence... Widely used software performing critical functions on network boundaries is, in our opinion, a set of software with a lot of opportunity for high impact vulnerabilities.

To give a specific example of the kind of thing we are trying to avoid in the future: [Heartbleed](https://heartbleed.com/). It matches these criteria almost perfectly. People had every reason to believe that OpenSSL was dangerously vulnerable prior to Heartbleed, but only after this momentous vulnerability did the relevant stakeholders engage in a campaign to shore things up (still, a decade later, OpenSSL has suffered [five more memory safety vulnerabilities](https://openssl-library.org/news/vulnerabilities/index.html) in the past year alone). That campaign was important - OpenSSL's security properties needed to be improved - but going forward we can and should just prevent that kind of thing from happening in the first place.

## Opportunity Criteria

Our second set of criteria helps us understand where we have the most opportunity to make a difference. Just because something is high risk doesn't mean we have the ability to do something about it with the kind of efficient investments we're able to make.

1. Is this a library or component that can be used in many different projects?
2. Can we efficiently replace key components with existing memory safe libraries?
3. Are funders willing to fund the work?
4. Are the maintainers on board and cooperative?
5. Are we aware of likely significant adopters?

The first criterion here raises the question of whether we would be able to apply the results of an investment to many different projects. An example would be a TLS library like [Rustls](https://www.memorysafety.org/initiative/rustls/) that can be "plugged in" to many different applications.

The second criterion sort of reverses the question raised by the first - is this a piece of software in which we can simply replace certain critical components with memory safe ones. In other words, can we take a modular approach to this and take advantage of existing memory safe libraries.

The third criterion probably needs the least explanation - is anyone willing to pay for the work? We [seek funding](https://www.memorysafety.org/become-a-funder/) from companies who understand the urgency to move toward a memory safe software stack and visionary funders like Craig Newmark who seek a positive societal impact.

The fourth criterion refers to the fact that it's very difficult to modify existing software if the maintainers are not on board and cooperative. If they are not, we either can't do our work or we would need to engage in a much more costly rewrite. Sometimes a rewrite is the right thing to do, but it's definitely something to consider up front.

The fifth criterion has to do with how quickly we think something might get adopted. Adoption is hard for most new software, and it's particularly difficult when we're talking about making changes in low-level Internet infrastructure software. We're prepared to deal with long adoption timelines, most of what we do will take years to get strong adoption, but if we have a chance to get an accelerated timeline that's something worth considering.

## Conclusion

These criteria really get to the head of what we're trying to do with Prossimo. Hopefully this post has helped to understand them more clearly.

We've helped to build some great software, like the [Rustls TLS library](https://github.com/rustls/rustls/), [Hickory DNS](https://github.com/hickory-dns/hickory-dns), [a memory safe NTP implementation](https://github.com/pendulum-project/ntpd-rs), and a [memory safe implementation of sudo](https://github.com/trifectatechfoundation/sudo-rs). If you run software like this, we encourage you to try these implementations out.

If you're interested in updates on our memory safety work, please subscribe to the mailing list below.
