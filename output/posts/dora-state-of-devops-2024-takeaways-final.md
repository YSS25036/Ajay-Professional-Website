---
title: "DORA State of DevOps Report 2024 – summary and takeaways-Final"
date: 2025-01-16
categories: 
  - "blog"
coverImage: "DORA-Report-Big-Canvas-part-3-black.jpg"
---

This is **Part3,** the concluding part of my trilogy on the DORA State of DevOps Report 2024, summarizing and sharing key takeaways from the report. Over the past two posts, I’ve shared insights into modern software delivery practices, organizational performance and Adoption of AI by Dev teams. If you missed them **Part 1 is** **[here,](https://ajaykmadan.in/index.php/2024/12/23/dora-state-of-devops-report-2024-summary-and-takeaways/)** **Part 2 is** [**here.**](https://ajaykmadan.in/index.php/2025/01/04/dora-state-of-devops-2024-summary-part2/)

This segment focuses on two critical themes from the report related to Product Development - Platform Engineering and Developer Experience.

* * *

### Platform Engineering: A Game-Changer or a Bottleneck?

Platform engineering teams are focused on producing inwardly-focused APIs, tools and services designed to support the development and operations lifecycle. The focus is to reduce complexity, waste and give a set of self-serve capabilities to developers to help them focus on the problem they are solving as opposed to worrying about deploying/running their solutions. Richard Seroter of Google Cloud brilliantly explains [here](https://cloud.google.com/blog/products/application-development/richard-seroter-on-shifting-down-vs-shifting-left) why 'Shifting down'—building robust foundational platforms—is just as crucial as 'Shifting left' in modern software practices. Highly recommend reading it!"

The rise of **platform engineering** was another standout theme in the DORA State of DevOps 2024 Report.

According to the report:

1. **89% of organizations** use internal developer platforms (IDP's) in some form or shape
2. IDP's improved productivity by **10%** but caused **14% drops in stability**in some cases.

DORA highlights that while IDPs can boost productivity, they also pose challenges around stability. Here’s why - DORA’s hypothesis for #2, drop in stability is potentially due to the number of “handoffs” between systems and teams (app & platform). Additionally, IDP allowing faster experimentation of code/features, and app developers motivated on the throughput enabled by the platform and taking their eyes off stability & quality.

#### My experience:

This resonates with my experience of running offshore product teams. We introduced an internal platform to standardize deployments and tooling. Initially, the handoffs created frustration—developers felt they were being forced to use an unfinished product. Over time, treating the platform like a **product built for developers** turned things around. It also takes time to see consistent results. See the section below on "j curve". One of the most important lessons I learnt is Platform Engineering teams should focus on collecting a lot of feedback from their customers – **internal users/developers**. A lack of healthy collaboration between these two teams (DORA calls it as user-centeredness) can be detrimental to overall software delivery performance, and I encountered some of them in my earlier organization. Running internal "customer feedback" sessions, and a healthy collaboration resulted in better adoption and outcomes.

In conclusion, like every framework or methodology or pattern, Platform Engineering has its benefits and drawbacks. It’s about how you maximize the benefits, but build checks and balances to manage the drawbacks. DORA’s research shows that successful IDPs are developed as a product; with focus on user centricity to deliver an experience that allows developers to work independently.

* * *

### Developer Experience

One of the key reasons why I respect DORA’s work is because it has significant focus on advocating and measuring factors related to Developer experience. Ultimately, no matter how many intelligent and automated systems we have around us it’s people who build software (for people) and their experience at work is a foundational component for successful organizations.

**Key Insights:**

1. **Meaningful Work:** DORA cites a survey where 93% of employees found meaning in their work critical, with some willing to trade 23% of future earnings for it!!
2. **End-User Focus:** Prioritizing the end user not only boosts product quality but reduces employee burnout.

Read more about the survey in this [HBR article](https://hbr.org/2018/11/9-out-of-10-people-are-willing-to-earn-less-money-to-do-more-meaningful-work) that DORA refers to.

DORA State of DevOps Report 2024 also focused on providing evidence to show positive and impactful contribution when the approach to software development prioritizes the end user, who would ultimately use the system. The results are not just from an organization performance (business), but specifically in the context of product quality and employee burnout. DORA emphatically proclaims and I concur – Product Quality will be high as long as the user experience is at the fore front.

Following image shows the correlation that DORA draws between product performance, throughput based on the level of user centricity – quite powerful.

<figure>

![DORA 2024 Report depicting product performance and delivery throughput in the context of building product that is user centric](images/1736963304864)

<figcaption>

Corelation between user centricity and delivery throughput

</figcaption>

</figure>

* * *

### Culture of documentation

This year’s report also has some interesting data related to Culture of documentation.

DORA State of DevOps 2024 rightly associates quality documentation as a key component of working software, in reference to Agile manifesto advocating “Working software over comprehensive documentation”.

The documentation related effort is never glamorous as compared to slinging code, but it pays off when onboarding new engineers or troubleshooting incidents. I am a big believer in documentation, and instituted practices to ensure they are followed consistently.

DORA recommends the following for maintaining a culture of quality documentation –

1.     Documenting critical use cases

2.     Taking training in technical writing

3.     Defining clear ownership & processes to update documentation

4.     Distributing documentation work within the team

5.     Maintain documentation as part of the SDLC

6.     Deleting out of date or redundant documentation

7.     Recognizing documentation work in performance reviews & promotions

* * *

### Practical guidance for Teams - "J Curve"

DORA  has a useful guidance for teams that have seen a drop in performance after adopting concepts like DevOps or SRE or Platform Engineering.

With any of this adoption or transformation, **there is a dip in performance initially**. This is expected; also known as the “**j curve**”. If you stay put and are continuously improving, things will get better and you will come out in much better shape than when you started. But it’s very important to have clear metrics to ensure you are on a path of continuous improvement.

In my own experience, the 'J-curve' effect was most evident during Agile and DevOps transformations. We tackled this by demonstrating our understanding when performance dipped, introducing clear performance metrics early on, which helped the team stay focused on gradual improvement and celebrate small wins.

<figure>

![J Curve as it applies to transformation projects](images/1736964965001)

<figcaption>

J-Curve effect for transformations

</figcaption>

</figure>

* * *

### Conclusion: Navigating the Future of Software Delivery

The DORA State of DevOps Report 2024 report is a testament to how evolving practices like Platform Engineering and a focus on Developer Experience can transform software delivery. But as with any transformation, it’s not without challenges. The drop in stability during IDP adoption, the initial dip in performance (the "J-curve"), and the effort required to foster a documentation culture are real hurdles. Yet, these are surmountable with the right strategies.

The key takeaway? **Balance**. Balance between productivity and stability, innovation and quality, automation and human creativity. By treating developers as customers and fostering collaboration, organizations can unlock the full potential of practices like Platform Engineering. And by prioritizing developer satisfaction, they ensure sustainable, long-term success.

The journey to high performance is rarely linear, but the rewards—higher productivity, quality, and team morale—are worth the effort.

**What are your thoughts on this 2024 DORA’s findings? Have they inspired changes in your organization?**

* * *

### DORA State of DevOps - Great resources

Here are 10 great resources recommended in the DORA 2024 report for deeper insights:

1.     Google acquiring DORA - [https://dora.dev/news/dora-joins-google-cloud/](https://dora.dev/news/dora-joins-google-cloud/)

2.     Check your software delivery performance - [Take the Quick Check](https://dora.dev/quickcheck/)

3.     DORA 2024 report - [https://dora.dev/research/2024/dora-report/](https://dora.dev/research/2024/dora-report/)

4.     Full list of DORA reports since 2024 - [https://dora.dev/research/](https://dora.dev/research/)

5.     Value stream mapping - [https://dora.dev/guides/value-stream-management/](https://dora.dev/guides/value-stream-management/)

6.     Richard Seroter on Shifting Down, not just Shifting Left - [https://cloud.google.com/blog/products/application-development/richard-seroter-on-shifting-down-vs-shifting-left](https://cloud.google.com/blog/products/application-development/richard-seroter-on-shifting-down-vs-shifting-left)

7.     HBR article on meaningful work - [https://hbr.org/2018/11/9-out-of-10-people-are-willing-to-earn-less-money-to-do-more-meaningful-work](https://hbr.org/2018/11/9-out-of-10-people-are-willing-to-earn-less-money-to-do-more-meaningful-work)

8.     The Four keys of DORA - [https://dora.dev/guides/dora-metrics-four-keys/](https://dora.dev/guides/dora-metrics-four-keys/)

9.     Team Topologies - [https://teamtopologies.com/](https://teamtopologies.com/)

10.  Documentation Quality - [https://cloud.google.com/blog/products/devops-sre/deep-dive-into-2022-state-of-devops-report-on-documentation](https://cloud.google.com/blog/products/devops-sre/deep-dive-into-2022-state-of-devops-report-on-documentation)
