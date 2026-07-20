---
author: Josh Aas
date: 2026-07-21T00:00:00Z
slug: vulns-and-llms
title: "Vulnerabilities and Best Practices in an LLM World"
excerpt: "LLMs are changing almost everything about vulnerabilities."
display_support_us_footer: true
display_inline_newsletter_embed: false
---

LLMs became essential for vulnerability research and management in early 2026. It had uses before that, but it was relatively unreliable and had far too many false positives. If an open source project got LLM vulnerability reports in 2025, there was a good chance most of it was slop. If they get LLM vulnerability reports in 2026, the odds are good that they're relatively high quality. Not perfect by any means, it's still common for them to get severity or exploitability wrong for example, but there's probably a real bug there worth looking at. Overall, it's doubtful that human security researchers would be more effective at reducing vulnerabilities in a code base.

When it comes to vulnerabilities, almost everything is different now and nobody knows how it'll all play out. Are we going to be able to keep software sufficiently secure going forward? Will the overall advantage from LLMs go to the attackers or the defenders? What will best practices for keeping software secure look like five years from now? What architectural changes will come out of all this?

I don't have the answers, but those of us responsible for securing software can't just stand around shrugging our shoulders for the next couple of years. We have to act with some outlook in mind. Here's my best guess as to how things play out over the next five or so years.

**Projects with the means and motivation will be able to use LLMs to drastically reduce the number of existing vulnerabilities by the end of 2026. Maybe by as much as 95%?**

We don't know how many total vulnerabilities exist in a given piece of software, but for all practical purposes it's some finite number. There are X vulnerabilities, and if you fix one the count becomes X-1. Theoretically you could get it to zero, though you probably couldn't know if you got there. It would also be hard to keep it at zero since any future changes could introduce vulnerabilities, including vulnerability fixes themselves!

LLMs are going to help a lot of software projects drastically reduce the number of existing vulnerabilities in their code. Firefox is a great example - they are [cleaning](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/) [house](https://www.anthropic.com/news/mozilla-firefox-security). We don't know how many existing security bugs are lurking in Firefox, but there will be drastically fewer at the end of 2026 than there were at the start. This will be true for a lot of the most important software we use every day. It will be harder, though not impossible, for attackers to find vulnerabilities in thoroughly LLM-audited software.

This won't happen to all software, though.

**The vast majority of projects without the means and motivation to use LLMs to extensively audit existing code for vulnerabilities will be extremely vulnerable.**

Some projects don't have the means. LLM resources can be expensive, and some projects lack sufficient developer time and energy. Some projects, even if they can perform LLM audits and fix vulnerabilities, lack mechanisms to update their users in a reasonable amount of time. Some projects may have the resources to audit their own code, but not their dependencies.

Some don't have the motivation - maybe security is not the project's highest priority, or perhaps the maintainers are sceptical or opposed to using LLMs for this purpose.

This software will be a big problem because attacking it will become trivial. It used to take a long time to figure out what software wasn't keeping up in terms of security, but that's about to change. Software that isn't keeping up with best practices will get identified and shunned faster than has happened previously because it will get exploited much faster and more frequently.

The best thing we can do to help here is bring down the cost of LLM audits (e.g. tokens, but also the necessary tools to do the job) so that the vast majority of developers have the means to thoroughly audit their software.

I say that this applies to the vast majority of projects, not all, because there are some projects out there that have done such a good job with technology choices, testing, verification, and scoping, that LLMs don't find much. These projects are rare, but it's worth noting that they do exist.

**LLMs will help to level the playing field when it comes to vulnerability management.**

As mentioned previously, some software is going to really benefit from LLM security audits and some will get left behind. In the average case though, LLMs will level the playing field amongst defenders.

Some projects have always had more resources for vulnerability research and prevention than others. LLMs will bring vulnerability counts down further for even the best resourced defenders, but other projects will be able to come a lot closer to what the well-resourced are doing.

Firefox is a good example again. Firefox and Chrome probably introduced vulnerabilities at roughly the same rate, but Chrome has had significantly more resources to find and fix vulnerabilities. As a result, Firefox has likely had more extant vulnerabilities over the years (though it has always been reasonably secure, particularly since prior to effective LLMs discovery and exploitation was relatively difficult). LLMs are doing a lot to close the gap between Firefox's total existing vulnerability count and Chrome's.

**C/C++ codebases may contain a lot fewer vulnerabilities, but the push to safer languages like Rust will continue.**

First, some projects are just going to drown under the volume of vulnerabilities and [fixing them one by one won't get them ahead of the curve](https://alexgaynor.net/2026/jul/15/you-cant-bugfix-your-way-out-of-the-vulnpocalypse/). Solving classes of vulnerabilities with better languages will still matter.

Second, LLMs work better with languages that contain more constraints (e.g. strong typing) and less undefined behavior.

Third, Rust and languages like it are more likely to produce logically correct code the first time around, greatly reducing maintenance needs. This was a huge strength prior to LLMs and will continue to be one.

Finally, it will be easier to move existing C/C++ code to better languages with LLM assistance, greatly reducing the barrier to doing so (this will be particularly true for projects with comprehensive test suites).

## Best Practices in the Age of LLMs

**Perform thorough LLM audits of all existing code.**

Attackers will do this so you should try to get it done before they do, particularly if your software is open source.

If access to LLMs is unaffordable, as it unfortunately can be these days, find help. There are some organizations/programs that can help (e.g. [Alpha-Omega](https://alpha-omega.dev/grants/how-to-apply/), [Claude for OSS](https://claude.com/contact-sales/claude-for-oss)). There are also just a lot of people out there with tokens to spend who enjoy this kind of thing. Ask around.

**Review all new code with LLMs looking for vulnerabilities.**

Once you've audited your existing code, this is how you'll keep new vulnerabilities out.

If possible, you'll want to integrate this into your pre-commit CI process. You can do this with tools like [GitHub Copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review), [Google Gemini](https://github.com/marketplace/actions/run-gemini-cli), and [Claude Code Review](https://code.claude.com/docs/en/code-review). Some providers offer a certain amount of usage for free, but beyond the minimum offering things can get expensive or require enterprise accounts. This can put good CI-integrated LLM code review beyond the means of open source developers today, hopefully things will improve.

**Do variant analysis with LLMs on any vulnerability you fix.**

Once you fix a vulnerability, [even in closed source code](https://www.anthropic.com/research/n-days), attackers know all about it and they're going to be able to look for variations on that vulnerability ("variant analysis") very quickly to see if they can exploit it another way.

You need to do it before they do, and that means doing it before you ship the original fix.

**Invest in technical choices that systematically prevent vulnerabilities, such as moving to safer languages.**

LLM audits are still no substitute for better architectural choices, such as switching to safer languages. Not having certain classes of bugs for LLMs to find is better than hoping LLMs find them.

**Invest in automation to lower the cost of security releases.**

Given the change in vulnerability reporting norms (immediate disclosure is becoming more common), and the fact that exploit development will happen much more rapidly, you need to be able to ship updates faster than ever, and your users need to apply those updates as quickly as possible.

Remember - even if your software is closed-source, once an update is out attackers can use binary diffing and LLMs to quickly develop exploits that can be used against users that are slow to patch.

If your release process isn't heavily automated your users will be at risk for longer and the burnout many maintainers experience will just get worse.

## Further Reading/Listening

Here are some other perspectives on this topic that I'd recommend:

- [Vulnerability Reports Are Not Special Anymore](https://words.filippo.io/vuln-reports/), by Filippo Valsorda

- [You can't bug fix your way out of the vulnpocalypse](https://alexgaynor.net/2026/jul/15/you-cant-bugfix-your-way-out-of-the-vulnpocalypse/), by Alex Gaynor

- [Facing the Vulnpocalypse With lcamtuf](https://securitycryptographywhatever.com/2026/06/14/facing-the-vulnpocalypse-with-lcamtuf/), from Security Cryptography Whatever

- [Behind the Scenes Hardening Firefox with Claude Mythos Preview](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/), from Mozilla Hacks

- [Partnering with Mozilla to improve Firefox's security](https://www.anthropic.com/news/mozilla-firefox-security), from Anthropic

- [Measuring LLMs' impact on N-day exploits](https://www.anthropic.com/research/n-days), from Anthropic
