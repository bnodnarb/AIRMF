---
date: 02-02-05
title: MEASURE 2.5
categories:
  - MEASURE-2
description: The AI system to be deployed is demonstrated to be valid and reliable. Limitations of the generalizability beyond the conditions under which the technology was developed are documented.
type: Measure
order_number: 5
---
{::options parse_block_html="true" /} 


<details>
<summary markdown="span">**About**</summary>      
<br>
An AI system that is not validated or that fails validation may be inaccurate or unreliable or may generalize poorly to data and settings beyond its training, creating and increasing AI risks and reducing trustworthiness. AI Actors can improve system validity by creating processes for exploring and documenting system limitations. This includes broad consideration of purposes and uses for which the system was not designed. 

Validation risks include the use of proxies or other indicators that are often constructed by AI development teams to operationalize phenomena that are either not directly observable or measurable (e.g, fairness, hireability, honesty, propensity to commit a crime). Teams can mitigate these risks by demonstrating that the indicator is measuring the concept it claims to measure (also known as construct validity). Without this and other types of validation, various negative properties or impacts may go undetected, including the presence of confounding variables, potential spurious correlations, or error propagation and its potential impact on other interconnected systems.

</details>

<details>
<summary markdown="span">**Suggested Actions**</summary>

- Define the operating conditions and socio-technical context under which the AI system will be validated.
- Define and document processes to establish the system’s operational conditions and limits.  
- Establish or identify, and document approaches to measure forms of validity, including:
	- construct validity (the test  is measuring the concept it claims to measure)
	- internal validity (relationship being tested is not influenced by other factors or variables) 
	- external validity (results are generalizable beyond the training condition)  
Standard approaches include the use of experimental design principles and statistical analyses and modeling.
 - Assess and document system variance. Standard approaches include confidence intervals, standard deviation, standard error, bootstrapping, or cross-validation. 
- Establish or identify, and document robustness measures.
- Establish or identify, and document reliability measures.
- Establish practices to specify and document the assumptions underlying measurement models to ensure proxies accurately reflect the concept being measured.
- Utilize standard statistical methods to test bias, inferential associations, correlation, and covariance in adopted measurement models.
- Utilize standard statistical methods to test variance and reliability of system outcomes.
- Monitor operating conditions for system performance outside of defined limits. 
- Identify TEVV approaches for exploring AI system limitations, including testing scenarios that differ from the operational environment. Consult experts with knowledge of specific context of use.
- Define post-alert actions. Possible actions may include:
	- alerting other relevant AI actors before action, 
	- requesting subsequent human review of action, 
	- alerting downstream users and stakeholder that the system is operating outside it’s defined validity limits, 
	- tracking and mitigating possible error propagation
	- action logging 
- Log input data and relevant system configuration information whenever there is an attempt to use the system beyond its well-defined range of system validity.
- Modify the system over time to extend its range of system validity to new operating conditions.

</details>

<details>
<summary markdown="span">**Transparency and Documentation**</summary>
<br>
**Organizations can document the following:**
 
- What testing, if any, has the entity conducted on theAI system to identify errors and limitations (i.e.adversarial or stress testing)?
- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?
- How has the entity identified and mitigated potential impacts of bias in the data, including inequitable or discriminatory outcomes?
- To what extent are the established procedures effective in mitigating bias, inequity, and other concerns resulting from the system?
- What goals and objectives does the entity expect to achieve by designing, developing, and/or deploying the AI system?

**AI Transparency Resources:**

- GAO-21-519SP - Artificial Intelligence: An Accountability Framework for Federal Agencies & Other Entities. [URL](https://www.gao.gov/products/gao-21-519sp)

</details>

<details>
<summary markdown="span">**References**</summary>      
<br>

Abigail Z. Jacobs and Hanna Wallach. “Measurement and Fairness.” FAccT '21: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency, March 2021, 375–85. [URL](https://doi.org/10.1145/3442188.3445901)

Debugging Machine Learning Models. Proceedings of ICLR 2019 Workshop, May 6, 2019, New Orleans, Louisiana. [URL](https://debug-ml-iclr2019.github.io/)

Patrick Hall. “Strategies for Model Debugging.” Towards Data Science, November 8, 2019. [URL](https://towardsdatascience.com/strategies-for-model-debugging-aa822f1097ce)

Suchi Saria and Adarsh Subbaswamy. "Tutorial: Safe and Reliable Machine Learning." arXiv preprint, submitted April 15, 2019. [URL](https://arxiv.org/abs/1904.07204)

Google Developers. “Overview of Debugging ML Models.” Google Developers Machine Learning Foundational Courses, n.d. [URL](https://developers.google.com/machine-learning/testing-debugging/common/overview)

**Software Resources**

- [Drifter](https://github.com/ModelOriented/drifter) library (performance assessment)
- [Manifold](https://github.com/uber/manifold) library (performance assessment)
- [MLextend](http://rasbt.github.io/mlxtend/) library (performance assessment)
- [PiML](https://github.com/SelfExplainML/PiML-Toolbox) library (explainable models, performance assessment)
- [SALib](https://github.com/SALib/SALib) library (performance assessment)
- [What-If Tool](https://pair-code.github.io/what-if-tool/index.html#about) (performance assessment)

</details>
