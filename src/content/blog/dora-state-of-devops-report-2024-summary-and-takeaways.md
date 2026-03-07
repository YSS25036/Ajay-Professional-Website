---
title: "DORA State of DevOps Report 2024 - summary and takeaways"
date: 2024-12-23
categories: 
  - "blog"
coverImage: "DORA-2024-Report-LR-BigCanvas.jpg"
---

Have you read the **2024 DORA State of DevOps Report** yet?

The report, published in **October 2024**, continues to be my go-to resource for understanding what makes software teams high-performing. It goes beyond the numbers, exploring key industry trends and how subtle aspects like team culture and developer experience impact software delivery.

If you're a business or technology leader looking for quantifiable ways to measure software delivery performance, introduce modern DevOps practices, or foster a culture of continuous improvement, this report is a must-read.

Here’s Part 1 of my trilogy, summarizing and sharing key takeaways from this year’s report.

* * *

The **2024 DORA Report** has landed, marking a decade of valuable research into what makes software teams high-performing. It’s the gold standard for evaluating and improving **software delivery, operational performance, and team culture**.

What I appreciate most about DORA isn’t just the metrics—it’s the connection between data and real-world transformations. Having worked on integrating offshore teams, navigating mergers, and driving software engineering transformations, I can confidently say the lessons from DORA are evergreen. They don’t just measure _how_ teams perform but explore _why_ they succeed or fail.

This year’s report also dives into critical areas like **AI, platform engineering, and developer experience**, and it resonates deeply with some of the challenges I’ve seen in teams over the years. The report covers insights across all these topics in an elaborate manner. To make it digestible, I’ll present my takeaways as a trilogy:

Part-1: Introducing DORA, and the core - software delivery performance

Part-2: The new focus in the report - Impact of AI on DevOps

Part-3: People centric - Developer experience, Platform Engineering, Documentation

* * *

### For those new to DORA

DORA stands for DevOps Research and Assessment. It is the largest and longest running research program of its kind to understand the capabilities that drive software delivery and operations performance. DORA’s research is highlighted in the bestselling book **Accelerate**, written by Dr.Nicole Forsgren, Jez Humble, and Gene Kim.

DORA’s most impactful contribution has been the **Four Keys**, called DORA Metrics for Software delivery performance, have become universal standards for evaluating DevOps practices and a technique to guide and measure technology transformation and enable a culture of **continuous improvement**. Acquired by Google in 2018, DORA’s findings continue to shape how teams worldwide work.

* * *

### Report Highlights - Software Delivery Performance

The Four Key Metrics

1. **Change Lead Time:** Time from code commit to production deployment.
2. **Deployment Frequency:** How often changes are deployed to production.
3. **Change Failure Rate:** Percentage of deployments causing failures in production.
4. **Mean Time to Recovery (MTTR):** Time to restore service after a failure.

<figure>

![](images/1733937234058)

<figcaption>

The Four Keys: A Snapshot of Elite Performance Metrics (DORA 2024)

</figcaption>

</figure>

### Elite Performance Snapshot

Compared to low performers, elite teams achieve:

- **127x faster lead time**
- **182x more deployments per year**
- **8x lower change failure rates**
- **2293x faster recovery from failed deployments**

This essentially means teams at Elite performance experience phenomenal results in delivering value to their customers rapidly, reliably while maintaining higher stability. The ability to recover rapidly from failures allows these teams to freely experiment, learn, re-align, and re-deploy.

* * *

### Key Trend in 2024: Higher Failure Rates Among High Performers

The 2024 report uncovers a fascinating trend: high-performing teams reported double the failure rates compared to medium performers**.** Why?

**Theory 1:** High performers often push for faster deployment cycles before fully maturing their testing infrastructure

**Theory 2:** Another theory, as called out by Gitclear in [this](https://gitclear-public.s3.us-west-2.amazonaws.com/Coding-on-Copilot-2024-Developer-Research.pdf) report, is developers using AI assisted code. The combination of trying to deploy faster and with AI assisted code without enough quality checks & balances is a very deadly one

The key point is stability and throughput are interdependent. Elite teams balance rapid deployments with robust recovery systems, ensuring customer value delivery is both fast and reliable. **_Each organization needs to strive towards Customers experiencing value of a new product increment as soon as possible, and as safely as possible._**

* * *

### Lessons from My Experience

When I led a tech transformation for a fintech company, this insight was critical. By introducing shift left practices like Test Driven Development (TDD), and automated testing pipelines, we proactively embraced failure as a learning opportunity. It was tough at first, but the result? A team that was more resilient and confident in deploying frequently.

We used the Four Key Metrics to measure and inform progress throughout our continuous improvement journey. Sharing these results in company-wide or team all-hands meetings not only inspired our teams but encouraged other teams to adopt similar practices

* * *

### Take Action

You can use [https://dora.dev/quickcheck](https://dora.dev/quickcheck) to assess where your organization is with respect to this standard, and chart your path to continuous improvement.

DORA’s principles are universal and adaptable. The findings however are based on the scope of the survey in terms of domains, organization maturity and how the respondents provided data. Therefore its obvious things can be different with others who didn’t participate in the survey.

What has been your experience with software delivery performance? Have you leveraged the Four Key Metrics to improve your teams? I’d love to hear your insights in the comments!

* * *

### References

1.     Google acquires DORA - [https://dora.dev/news/dora-joins-google-cloud/](https://dora.dev/news/dora-joins-google-cloud/)

2.     Check your software delivery performance - [Take the Quick Check](https://dora.dev/quickcheck/)

3.     DORA 2024 report - [https://dora.dev/research/2024/dora-report/](https://dora.dev/research/2024/dora-report/)

4.     Full list of DORA reports since 2024 - [https://dora.dev/research/](https://dora.dev/research/)

5.     The Four keys of DORA - [https://dora.dev/guides/dora-metrics-four-keys/](https://dora.dev/guides/dora-metrics-four-keys/)
