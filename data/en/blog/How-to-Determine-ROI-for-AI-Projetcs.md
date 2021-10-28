---
title: How to Determine ROI for AI Projetcs
date: '2021-11-01'
tags: ['AI', 'Artificial Intelligence', 'KPI', 'ROI', 'Performance']
draft: false
summary: How to Determine ROI for AI Projetcs
---

# I. ROI Definition

AI projects require a lot of investment in terms of financial and human resources. To minimize the risks of spending these resources unnecessarily, it is necessary to estimate the viability of the project. For this, the ROI is the reference indicator that allows studying the difference between costs and benefits. The basic formula is :

> **ROI** \= (Benefits-Costs) / Costs.

The ratio is therefore interesting the more the value is greater than 0. According to Megler (2019) and Canhoto and Clear (2020), it is necessary to determine the best accuracy needed based on the ROI on false negatives and false positives. According to Deshpande and Ruhe (2020), a decomposition of costs and benefits is proposed.

On the one hand, generalizing their approaches to cost, they consider factors related to data collection, processing, categorization, and model creation. These costs are proportionally related to the amount of data and the amount of work required to perform these tasks.

> **Costs** \= Quantity of data x (Data retrieval time + Processing time + Model creation time) x Number of people x Average team salaries

On the other hand, for the profit part, he defines two approaches. The first one is to identify the cost of a false negative and true positive:

> **Benefits**\= True positive x Costs-False negative x Costs

The second method is based on the accuracy of the prediction and estimates the amount needed to improve the F1 prediction score by one percent:

> **Benefits** \= F1 Score x Costs to improve accuracy by one percent

The purpose of this analysis is to determine which model is most attractive to use to optimize performance.

According to Zif and McCarthy (1997) in research and development projects, returns only begin to come in after 2 years from the start. Thinking about the financial aspect is not enough. Canhoto and Clear (2020) raise several questions about the impact of increased prediction versus model interpretability or even speed issues as a function of accuracy.

# II. How ROI is calculated?

To better understand why estimating ROI is complicated, we need to look at the components of this measure.

## 1\. Costs

First, the first part of this calculation is the estimated costs associated with the project. In this part, we will detail the factors taking into account that the development is done internally. However, it is also possible to outsource this work which will change the definition of this component.

**Development:**

First of all, we must consider the amount of data acquisition. Sometimes the data is not owned by the company, so it must be acquired by purchasing it or creating algorithms to obtain it. Moreover, the company’s developers may not know the AI technologies to be used, it is thus necessary to consider training time. We must also take into account the cost of infrastructure for development such as servers to make the calculations or databases. Finally, the last factor corresponds to the time to clean the data, create the model, and optimize it.

> **Development =** Development time x Number of people x Average salary

**Production:**

Fortunately, this one is easier to estimate compared to the previous part. On the one hand, it is possible to consider the cost of production. On the other hand, the main cost of this part will correspond to the amount of the infrastructure to use the algorithm. This takes into account the fixed costs to have a server to host the AI, but also the cost related to its use. Different solutions exist to manage this part such as the use of internal servers or cloud offers like “Infrastructure as a Service” (IaaS) or “Function as a Service” (FaaS).

> **Production =** Installation time x Salary + Fixed server costs + Algorithm usage costs

**Maintenance:**

The last factor corresponds to the maintenance and update costs of the algorithm. These updates are necessary to take into account the evolution of the activity by carrying out small associated modifications. The purpose of this maintenance is not to change the algorithm greatly, simply to adapt it to the context without any real improvement. To perform these tasks, some people estimate that it is necessary to have someone one day per week. Even if the developer does not work on it every week, this allows creating maintenance capital when it will be necessary. In addition, the cost of acquiring data to update the algorithm to adapt to changes in the activity must also be considered. Some have estimated empirically the duration of these different actions, according to them, it is good to update the algorithm every 3 months and to plan maintenance over at least for 3 years. The calculation over three years gives the following equation: (based on 253 days worked per year)

> **Maintenance =** 12 Data acquisition + 152 Maintenance days x Salary

It can be seen that the development part of the project takes up a large part of the cost of the project. However, for some CDOs of large companies, the developers’ salary is not taken into account in their equation. The inclusion of this variable may be questionable since their team is on indefinite contracts and ultimately their salaries will be paid anyway. People who think with this approach use ROI to prioritize their projects rather than to know what the final associated cost is. However, it is still interesting to consider this variable as it allows comparison with outsourcing, which takes this factor into account when estimating the price of the service. The costs are therefore summarized by the equation :

> **Costs =** Development + Production + Maintenance

> **Costs =** Development time x Number of people x Average salary  
> \+ Installation time x Salary + Fixed server costs + Algorithm usage costs  
> \+ 12 Data acquisition + 152 Days of maintenance x Salary

## 2\. Benefits

The forms of costs are fairly similar between different projects, so it’s the earnings that make the ROI different. Depending on the type of opportunity chosen, the revenue calculation changes.

**Automation Gain:**

First, for projects that are based on process optimization or automation, it is possible to quantify the time saved. To do this, the value is calculated by making the difference in time to complete a task between before and after the integration of AI. This value also depends on the number of repetitions and the salary of the person performing the task. In concrete terms, this can be the time saved by automatically processing emails and redirecting them to the right department in the company.

> **Automation gain =** Time saved x Number of repetitions x Person’s salary

**Risk Reduction:**

Secondly, the gain can also be based on risk reduction. It is calculated by the difference between the probability of an event occurring before and after the integration of AI. This value is multiplied by the cost that the AI generates if it happens. For example, in fraud detection, the calculation can be based on the difference in the improvement of the detection accuracy according to the avoided penalty.

> **Risk reduction =** (Old probability — New probability) x Hazard costs

**Accessing New Market:**

Third, the gain can be determined by the revenue generated from entering a new market. However, in this case, it is more difficult to estimate this value, as many components may come into play. Nevertheless, this form of value remains quantifiable and can be taken into account in an ROI.

> **New market access =** Estimated revenue

Finally, it is not always useful to calculate the gain, as it is too difficult to quantify. Some interviewees believe that if AI solves a problem that strongly impacts the business or the viability of the company, the ROI is not necessarily necessary to calculate. At the end of the project, the payoff is clear if the problem is no longer a threat to the business.

## **3\. Opportunities**

Sometimes some gains are difficult to quantify, most people consider these as opportunities. Even if these opportunities are not included in the calculation, they are still present in the overall thinking of the project. Indeed, the estimation of these indicators would be too arbitrary to be taken into account in a financial equation.

**Consideration of Competitors:**

On the one hand, the first type of opportunity corresponds to the consideration of competition. It is difficult to quantify the fact that it is necessary to align oneself with one’s competitors in order not to fall behind economically. It is also difficult to quantify the opportunity to become a leader in a field by implementing innovative projects. In the end, all this depends on the company’s strategy, which cannot be calculated and influences the assessment of the ROI.

**Project Prioritization:**

On the other hand, we can also consider that the opportunity to carry out this project rather than another is also to be taken into account. As with any type of opportunity, this also depends on the company’s strategy. The priority must correspond to the company’s long-term vision to best meet these objectives.

# III. Conclusion

To summarize, three major components are used by most companies to estimate their ROI. Costs and gains can be related to financial indicators, while opportunities are more difficult to quantify, but are taken into account in the overall reflection. This decomposition is similar to the one presented by Deshpande and Ruhe (2020), however, the process presented above is more abstract. This abstraction is explained by the fact that managers do not go into detail and simplify the calculations, while the research paper rather studies the benefits related to the accuracy of the prediction. This very technical approach is rather addressed by the data scientists themselves, however, in most companies, they are not the ones defining the ROI. The benefit treatment based on the ratio of true negatives and false positives presented in the work of Megler (2019) and Canhoto and Clear (2020), corresponds to the high-level study approaches of risk reduction. Theses\* methods take more into account the overall issues of ROI calculation compared to those identified in research papers more focused on the technical parts of data science.

---

Canhoto, A. I., & Clear, F. (2020). Artificial intelligence and machine learning as business tools : A framework for diagnosing value destruction potential. _Business Horizons_, _63_(2), 183‑193. [https://doi.org/10.1016/j.bushor.2019.11.003](https://doi.org/10.1016/j.bushor.2019.11.003)

Deshpande, G., & Ruhe, G. (2020). Beyond Accuracy : ROI-driven Data Analytics of Empirical Data. _ArXiv:2009.06492 \[Cs, Stat\]_. [http://arxiv.org/abs/2009.06492](http://arxiv.org/abs/2009.06492)

Megler, V. M. (2019). Managing Machine Learning Projects Balance Potential with the Need for Guardrails. _Amazon White Paper_, _February_.

Zif, J., & McCarthy, D. J. (1997). The R&D cycle : The influence of product and process R&D on short-term ROI. _IEEE Transactions on Engineering Management_, _44_(2), 114‑123. [https://doi.org/10.1109/17.584920](https://doi.org/10.1109/17.584920)
