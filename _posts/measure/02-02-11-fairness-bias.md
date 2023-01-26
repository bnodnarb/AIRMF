---
date: 02-02-11
title: MEASURE 2.11
categories:
  - MEASURE-2
description: Fairness and bias – as identified in the MAP function – is evaluated and results are documented.
type: Measure
order_number: 11
---
{::options parse_block_html="true" /} 


<details>
<summary markdown="span">**About**</summary>      
<br>
Fairness in AI includes concerns for equality and equity by addressing issues such as harmful bias and discrimination. Standards of fairness can be complex and difficult to define because perceptions of fairness differ among cultures and may shift depending on application. Organizations’ risk management efforts will be enhanced by recognizing and considering these differences. Systems in which harmful biases are mitigated are not necessarily fair. For example, systems in which predictions are somewhat balanced across demographic groups may still be inaccessible to individuals with disabilities or affected by the digital divide or may exacerbate existing disparities or systemic biases.

Bias is broader than demographic balance and data representativeness. NIST has identified three major categories of AI bias to be considered and managed: systemic, computational and statistical, and human-cognitive. Each of these can occur in the absence of prejudice, partiality, or discriminatory intent. 
- Systemic bias can be present in AI datasets, the organizational norms, practices, and processes across the AI lifecycle, and the broader society that uses AI systems.
- Computational and statistical biases can be present in AI datasets and algorithmic processes, and often stem from systematic errors due to non-representative samples.
- Human-cognitive biases relate to how an individual or group perceives AI system information to make a decision or fill in missing information, or how humans think about purposes and functions of an AI system. Human-cognitive biases are omnipresent in decision-making processes across the AI lifecycle and system use, including the design, implementation, operation, and maintenance of AI.

Bias exists in many forms and can become ingrained in the automated systems that help make decisions about our lives. While bias is not always a negative phenomenon, AI systems can potentially increase the speed and scale of biases and perpetuate and amplify harms to individuals, groups, communities, organizations, and society.

</details>

<details>
<summary markdown="span">**Suggested Actions**</summary>

- Conduct fairness assessments to manage computational and statistical forms of bias which include the following steps:
	- Identify types of harms, including allocational, representational, quality of service, stereotyping, or erasure
	- Identify across, within, and intersecting groups that might be harmed
	- Quantify harms using both a general fairness metric, if appropriate (e.g. demographic parity, equalized odds, equal opportunity, statistical hypothesis tests), and custom, context-specific metrics developed in collaboration with affected communities
	- Analyze quantified harms for contextually significant differences across groups, within groups, and among intersecting groups 
	- Refine identification of within-group and intersectional group disparities. 
		- Evaluate underlying data distributions and employ sensitivity analysis during the analysis of quantified harms. 
		- Evaluate quality  metrics including false positive rates and false negative rates. 
		- Consider biases affecting small groups, within-group or intersectional communities, or single individuals.
- Understand and consider sources of bias in training and TEVV data:
	- Differences in distributions of outcomes across and within groups, including intersecting groups. 
	- Completeness, representativeness and balance of data sources. 
	- Identify input data features that may serve as proxies for demographic group membership (i.e., credit score, ZIP code) or otherwise give rise to emergent bias within AI systems.   
	- Forms of systemic bias in images, text (or word embeddings), audio or other complex or unstructured data.  
- Leverage impact assessments to identify and classify system impacts and harms to end users, other individuals, and groups with input from potentially impacted communities.
- Identify the classes of individuals, groups, or environmental ecosystems which might be impacted through direct engagement with potentially impacted communities. 
- Evaluate systems in regards to disability inclusion, including consideration of disability status in bias testing, and discriminatory screen out processes that may arise from non-inclusive design or deployment decisions. 
- Develop objective functions in consideration of systemic biases, in-group/out-group dynamics.
- Use context-specific fairness metrics to examine how system performance varies across  groups, within groups, and/or for intersecting groups. Metrics may include statistical parity, error-rate equality, statistical parity difference, equal opportunity difference, average absolute odds difference, standardized mean difference, percentage point differences.
- Customize fairness metrics to specific context of use to examine how system performance and potential harms vary within contextual norms. 
- Define acceptable levels of difference in performance in accordance with established organizational governance policies, business requirements, regulatory compliance, legal frameworks, and ethical standards within the context of use
- Define the actions to be taken if disparity levels rise above acceptable levels. 
- Identify groups within the expected population that may require disaggregated analysis, in collaboration with impacted communities. 
- Leverage experts with knowledge in the specific context of use to investigate substantial measurement differences and identify root causes for those differences.
- Monitor system outputs for performance or bias issues that exceed established tolerance levels.  
- Ensure periodic model updates; test and recalibrate with updated and more representative data to stay within acceptable levels of difference.
- Apply pre-processing data transformations to address factors related to demographic balance and data representativeness.
- Apply in-processing to balance model performance quality with bias considerations. 
- Apply post-processing mathematical/computational techniques to model results in close collaboration with impact assessors, socio-technical experts, and other AI actors with expertise in the context of use. 
- Apply model selection approaches with transparent and deliberate consideration of bias management and other trustworthy characteristics. 
- Collect and share information about differences in outcomes for the identified groups. 
- Consider mediations to mitigate differences, especially those that can be traced to past patterns of unfair or biased human decision making.
- Utilize human-centered design practices to generate deeper focus on societal impacts and counter human-cognitive biases within the AI lifecycle.
- Evaluate practices along the lifecycle to identify potential sources of human-cognitive bias such as availability, observational, and confirmation bias, and to make implicit decision making processes more explicit and open to investigation. 
- Work with human factors experts to evaluate biases in the presentation of system output to end users, operators and practitioners.
- Utilize processes to enhance contextual awareness, such as diverse internal staff and stakeholder engagement.

</details>

<details>
<summary markdown="span">**Transparency and Documentation**</summary>
<br>
**Organizations can document the following:**

- To what extent are the established procedures effective in mitigating bias, inequity, and other concerns resulting from the system?
- If it relates to people, does it unfairly advantage or disadvantage a particular social group? In what ways? How was this mitigated?
- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?
- How has the entity identified and mitigated potential impacts of bias in the data, including inequitable or discriminatory outcomes?
- To what extent has the entity identified and mitigated potential bias—statistical, contextual, and historical—in the data?

**AI Transparency Resources:**

- GAO-21-519SP - Artificial Intelligence: An Accountability Framework for Federal Agencies & Other Entities. [URL](https://www.gao.gov/products/gao-21-519sp)
- Artificial Intelligence Ethics Framework For The Intelligence Community. [URL](https://www.intelligence.gov/artificial-intelligence-ethics-framework-for-the-intelligence-community) 
- WEF Companion to the Model AI Governance Framework- WEF - Companion to the Model AI Governance Framework, 2020. [URL](https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Resource-for-Organisation/AI/SGIsago.pdf)
- Datasheets for Datasets. [URL](https://arxiv.org/abs/1803.09010)

</details>

<details>
<summary markdown="span">**References**</summary>      
<br>
Ali Hasan, Shea Brown, Jovana Davidovic, Benjamin Lange, and Mitt Regan. “Algorithmic Bias and Risk Assessments: Lessons from Practice.” Digital Society 1 (2022). [URL](https://doi.org/10.1007/s44206-022-00017-z)

Richard N. Landers and Tara S. Behrend. “Auditing the AI Auditors: A Framework for Evaluating Fairness and Bias in High Stakes AI Predictive Models.” American Psychologist 78, no. 1 (2023): 36–49. [URL](https://doi.org/10.1037/amp0000972) 

Ninareh Mehrabi, Fred Morstatter, Nripsuta Saxena, Kristina Lerman, and Aram Galstyan. “A Survey on Bias and Fairness in Machine Learning.” ACM Computing Surveys 54, no. 6 (July 2021): 1–35. [URL](https://doi.org/10.1145/3457607)

Michele Loi and Christoph Heitz. “Is Calibration a Fairness Requirement?” FAccT '22: 2022 ACM Conference on Fairness, Accountability, and Transparency, June 2022, 2026–34. [URL](https://doi.org/10.1145/3531146.3533245)

Shea Brown, Ryan Carrier, Merve Hickok, and Adam Leon Smith. “Bias Mitigation in Data Sets.” SocArXiv, July 8, 2021. [URL](https://doi.org/10.31235/osf.io/z8qrb)

Reva Schwartz, Apostol Vassilev, Kristen Greene, Lori Perine, Andrew Burt, and Patrick Hall. "NIST Special Publication 1270 Towards a Standard for Identifying and Managing Bias in Artificial Intelligence." National Institute of Standards and Technology (NIST), 2022. [URL](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf)

Microsoft Research. “AI Fairness Checklist.” Microsoft, February 7, 2022. [URL](https://www.microsoft.com/en-us/research/project/ai-fairness-checklist/)

Samir Passi and Solon Barocas. “Problem Formulation and Fairness.” FAT* '19: Proceedings of the Conference on Fairness, Accountability, and Transparency, January 2019, 39–48. [URL](https://doi.org/10.1145/3287560.3287567)

Jade S. Franklin, Karan Bhanot, Mohamed Ghalwash, Kristin P. Bennett, Jamie McCusker, and Deborah L. McGuinness. “An Ontology for Fairness Metrics.” AIES '22: Proceedings of the 2022 AAAI/ACM Conference on AI, Ethics, and Society, July 2022, 265–75. [URL](https://doi.org/10.1145/3514094.3534137)

Arvind Narayanan. “Tl;DS - 21 Fairness Definition and Their Politics by Arvind Narayanan.” Dora's world, July 19, 2019. [URL](https://shubhamjain0594.github.io/post/tlds-arvind-fairness-definitions/)

Ben Green. “Escaping the Impossibility of Fairness: From Formal to Substantive Algorithmic Fairness.” Philosophy and Technology 35, no. 90 (October 8, 2022). [URL](https://doi.org/10.1007/s13347-022-00584-6)

Alexandra Chouldechova. “Fair Prediction with Disparate Impact: A Study of Bias in Recidivism Prediction Instruments.” Big Data 5, no. 2 (June 1, 2017): 153–63. [URL](https://doi.org/10.1089/big.2016.0047)

Sina Fazelpour and Zachary C. Lipton. “Algorithmic Fairness from a Non-Ideal Perspective.” AIES '20: Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society, February 7, 2020, 57–63. [URL](https://doi.org/10.1145/3375627.3375828)

Hemank Lamba, Kit T. Rodolfa, and Rayid Ghani. “An Empirical Comparison of Bias Reduction Methods on Real-World Problems in High-Stakes Policy Settings.” ACM SIGKDD Explorations Newsletter 23, no. 1 (May 29, 2021): 69–85. [URL](https://doi.org/10.1145/3468507.3468518)

ISO. “ISO/IEC TR 24027:2021 Information technology — Artificial intelligence (AI) — Bias in AI systems and AI aided decision making.” ISO Standards, November 2021. [URL](https://www.iso.org/standard/77607.html)

Shari Trewin. "AI Fairness for People with Disabilities: Point of View." arXiv preprint, submitted November 26, 2018. [URL](https://arxiv.org/abs/1811.10670)

MathWorks. “Explore Fairness Metrics for Credit Scoring Model.” MATLAB & Simulink, 2023. [URL](https://www.mathworks.com/help/risk/explore-fairness-metrics-for-credit-scoring-model.html)

Abigail Z. Jacobs and Hanna Wallach. “Measurement and Fairness.” FAccT '21: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency, March 2021, 375–85. [URL](https://doi.org/10.1145/3442188.3445901)

Tolga Bolukbasi, Kai-Wei Chang, James Zou, Venkatesh Saligrama, and Adam Kalai. "Quantifying and Reducing Stereotypes in Word Embeddings." arXiv preprint, submitted June 20, 2016. [URL](https://arxiv.org/abs/1606.06121)

Aylin Caliskan, Joanna J. Bryson, and Arvind Narayanan. “Semantics Derived Automatically from Language Corpora Contain Human-Like Biases.” Science 356, no. 6334 (April 14, 2017): 183–86. [URL](https://doi.org/10.1126/sc
ience.aal4230)

Sina Fazelpour and Maria De-Arteaga. “Diversity in Sociotechnical Machine Learning Systems.” Big Data and Society 9, no. 1 (2022). [URL](https://doi.org/10.1177/20539517221082027)

Fairlearn. “Fairness in Machine Learning.” Fairlearn 0.8.0 Documentation, n.d. [URL](https://fairlearn.org/v0.8/user_guide/fairness_in_machine_learning.html#)

Safiya Umoja Noble. Algorithms of Oppression: How Search Engines Reinforce Racism. New York, NY: New York University Press, 2018. [URL](http://algorithmsofoppression.com/)

Ziad Obermeyer, Brian Powers, Christine Vogeli, and Sendhil Mullainathan. “Dissecting Racial Bias in an Algorithm Used to Manage the Health of Populations.” Science 366, no. 6464 (October 25, 2019): 447–53. [URL](https://doi.org/10.1126/science.aax2342)

Alekh Agarwal, Alina Beygelzimer, Miroslav Dudík, John Langford, and Hanna Wallach. "A Reductions Approach to Fair Classification." arXiv preprint, submitted July 16, 2018. [URL](https://arxiv.org/abs/1803.02453)

Moritz Hardt, Eric Price, and Nathan Srebro. "Equality of Opportunity in Supervised Learning." arXiv preprint, submitted October 7, 2016. [URL](https://arxiv.org/abs/1610.02413)

Alekh Agarwal, Miroslav Dudik, Zhiwei Steven Wu. "Fair Regression: Quantitative Definitions and Reduction-Based Algorithms." Proceedings of the 36th International Conference on Machine Learning, PMLR 97:120-129, 2019. [URL](http://proceedings.mlr.press/v97/agarwal19d.html)

Andrew D. Selbst, Danah Boyd, Sorelle A. Friedler, Suresh Venkatasubramanian, and Janet Vertesi. “Fairness and Abstraction in Sociotechnical Systems.” FAT* '19: Proceedings of the Conference on Fairness, Accountability, and Transparency, January 29, 2019, 59–68. [URL](https://doi.org/10.1145/3287560.3287598)

Matthew Kay, Cynthia Matuszek, and Sean A. Munson. “Unequal Representation and Gender Stereotypes in Image Search Results for Occupations.” CHI '15: Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems, April 18, 2015, 3819–28. [URL](https://doi.org/10.1145/2702123.2702520)

**Software Resources**

- [aequitas](https://github.com/dssg/aequitas)
- AI Fairness 360:
	- [Python](https://github.com/Trusted-AI/AIF360) 
	- [R](https://github.com/Trusted-AI/AIF360/tree/master/aif360/aif360-r)
- [algofairness](https://github.com/algofairness)
- [fairlearn](https://github.com/fairlearn/fairlearn)
- [fairml](https://github.com/adebayoj/fairml)
- [fairmodels](https://github.com/ModelOriented/fairmodels)
- [fairness](https://cran.r-project.org/web/packages/fairness/index.html)
- [solas-ai-disparity](https://github.com/SolasAI/solas-ai-disparity)
- [tensorflow/fairness-indicators](https://github.com/tensorflow/fairness-indicators)
- [Themis](https://github.com/LASER-UMASS/Themis)

</details>
