---
title: "From AI-Assisted to AI-Led: Why Most Companies Stall"
description: "Executives expect 5-10x gains from AI-led development, yet most AI efforts stall after the pilot. Three reasons from my consulting work, with evidence from Bain, DORA, Deloitte and Gartner, and what it takes to cross the chasm."
date: 2026-07-18
updatedDate: 2026-07-19
categories:
  - "blog"
coverImage: "chasm-ai-assisted-to-ai-led-v2.png"
---

Executives expect 5-10x gains, industry leaders are publishing eye-watering adoption numbers, so why do most companies' AI efforts stall after the pilot or after the initial rollouts?

Take a look at the latest Bain article on The Rise of the AI Development Life Cycle and it touches upon some of these.

AI-led development with human-agent teams is expected to deliver 5 times to 10 times productivity gains. The ground is shifting real fast and the survey from Bain projects AI-led development to be 90% agent assisted by Spring 2027. No surprise, as we have already seen reports of this with some of the leading organizations:

1. Per Sundar Pichai, 75% of all new code at Google is now AI-generated and approved by engineers, up from 50% last fall
2. Meta has set ambitious internal targets for AI-assisted coding, with some engineering teams expected to generate as much as 75% of their code using artificial intelligence tools

![Four numbers behind the shift: 90% agent-assisted effort by spring 2027, 75% of Google's new code AI-generated, 21% of organizations with mature agentic-AI governance, ~130 real agentic vendors](images/ai-adoption-stats-strip.svg)

So, if the research done by Bain and reports from all these leaders are true, are organizations truly marching towards successfully accomplishing similar results? Not really.

While reporting these advancements, the Bain article also talks about efforts faltering because of the approach companies adopt. This part resonated with me the most; it matches my own observations while working with clients.

Many companies are optimizing a single activity like code generation, test automation, or requirements drafting. With the AI adoption wave, companies quickly added AI-enabled features in their products, assigned engineers licenses for AI coding tools, and rolled AI out primarily in test automation since it feels lower risk. Low entry barrier, single activity, low-hanging-fruit investment - this combination became the easiest way to test the AI waters. But things haven't evolved from there for many.

One client conversation captured this perfectly for me. The company had shipped a handful of customer-facing AI features, yet could not answer any of the four questions an operator must be able to answer: what does each feature cost to run, who actually uses it, does it work, and does it move a business outcome. The features shipped; no loop ever closed. Similarly, every engineer has a copilot license assigned by default but only a couple have attempted using agentic capabilities.

### The three reasons companies stall

So why do companies stall at AI-assisted instead of moving to AI-led? From my consulting conversations, I see three reasons.

First, awareness: most leaders have not seen what real agentic capabilities look like, and the market noise makes it worse (Gartner estimates only about 130 of the thousands of vendors claiming "agentic AI" actually are).

Second, safeguards: few realize that guardrails, permissions, quality gates and audit trails can be engineered into agent workflows. Deloitte found only 21% of organizations have mature governance for agentic AI, and in my experience the other 79% mostly do not know such governance is even possible.

Third, in regulated industries (where most of my experience lies) there is a real fear that autonomous change will outrun internal change management procedures and expose compliance risk. The fear is lack of control, and it is legitimate. But the answer is not to wait; it is to build the controls that make speed safe.

### Redesign the whole, don't retrofit the parts

Beyond all of this is the fundamental approach that companies undertake towards a transformation like this.

Hammer and Champy warned about it back in 1993 in their book "Reengineering the Corporation": dramatic gains come from fundamentally rethinking and radically redesigning end-to-end processes, not from using new technology to speed up the pieces you already have. Their argument is more relevant in the AI era than it ever was. Companies need to rethink how engineering teams are structured, how work gets done, and more importantly how it gets measured. Adoption numbers only prove people are trying; measurement proves it is working. "We think it's faster" is not a good enough answer, and therefore AI-assisted pilots tend to stall here and status quo continues.

To get those 5-10x productivity gains companies should use first-principles thinking to reimagine the end-to-end processes in the context of AI rather than optimizing pieces of the workflow in isolation. And there is a reason this redesign is finally feasible, one that is easy to miss: practices which were always right but not so affordable (behavioral/design specs, test coverage, documentation) are suddenly close to free. *Cheap code is the commodity; cheap discipline is the prize.*

Another client conversation brought this home. During a legacy migration, an AI-generated behavioral spec for one screen included an acceptance criterion that matched a real defect the team had shipped months earlier, when a similar screen was migrated without a spec. The spec took minutes to generate. *The discipline was always valuable; AI made it affordable.*

DORA's 2025 research explains why the redesign has to come first: "AI's primary role in software development is that of an amplifier. It magnifies the strengths of high-performing organizations and the dysfunctions of struggling ones". In other words, AI without a feedback loop just ships mistakes faster. It's critical that any dysfunctions get identified and fixed before layering agentic AI on them; techniques like value stream mapping (VSM) help you find exactly where the flow breaks or what needs to be reimagined.

I like this part of the Bain article, to quote verbatim: "This shift is redefining the role of engineering as the foundation for broader enterprise transformation". Done well, the transformation in engineering acts like a tentpole, lifting all other departments and workflows and creating a more profound business impact.

### The human core of the transformation

I have seen successful transformations in the past, like Agile software development, SaaS, and DevOps: the more you look at them as a change to overall organization behavior and a new vocabulary, the higher your chances of getting the transformation deep and enabling disproportionate business outcomes. This is true for the transformation to AI-led as well and, to quote Bain, "engineering excellence is no longer defined by how fast teams can code but by how effectively the entire organization can learn, adapt, and deliver at the pace AI now makes possible."

Last but not least, it's human beings ultimately who enable and orchestrate such transformations. Leadership needs to use empathy, provide psychological safety, and take people along; this is as critical as any of the methods we discussed above. In my conversations, as recently as a fortnight ago, I still see teams carrying fear towards such transformations, which usually signals a mismanaged change management exercise. The Kübler-Ross change curve is as relevant as ever and should not be ignored by leaders. The leaders who get this right do not mandate adoption; they instrument one lane, publish the real internal numbers, and let the results do the persuading. *Mandates create compliance theater; measured proof creates pull.*

In closing, getting to AI-assisted was the easy part, and you have likely done it. Bridging to AI-led means building the guardrails, safeguards, audit trails, and trackable controls that make speed safe, because autonomy is earned by instrumentation, never assumed. Crossing that chasm is the work of designing and implementing that governance, and orchestrating humans in the loop who keep defining what good looks like at each gate.

As Bain puts it, what happens next will separate incremental adopters from true leaders.

What has been your experience observing this in your own organization, AI-assisted or moved into AI-led? Do you see AI used in specific parts of the workflow or are you starting to see fundamentally different workflows getting designed, including team configuration? I would love to hear from you, leave a comment or reach out.

Resources:

- Bain & Company, The Rise of the AI Development Life Cycle (June 2026): https://www.bain.com/insights/the-rise-of-the-ai-development-life-cycle/
- Fast Company on Google's AI-generated code: https://www.fastcompany.com/91531519/google-ceo-says-75-of-the-companys-code-is-ai-generated
- People Matters on Meta's AI coding targets: https://www.peoplematters.in/news/ai-and-emerging-tech/meta-sets-ai-coding-targets-with-some-teams-aiming-for-75percent-usage-49016
- Gartner on agentic AI project cancellations: https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
- Deloitte, AI agents are scaling faster than their guardrails: https://www.deloitte.com/us/en/insights/topics/emerging-technologies/ai-agents-scaling-faster.html
- DORA, 2025 State of AI-assisted Software Development: https://dora.dev/research/2025/dora-report/
- EKR Foundation, the Kübler-Ross change curve: https://www.ekrfoundation.org/5-stages-of-grief/change-curve/
