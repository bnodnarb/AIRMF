---
date: 02-02-02
title: MEASURE 2.2
categories:
  - MEASURE-2
description: Evaluations involving human subjects meet applicable requirements (including human subject protection) and are representative of the relevant population.
type: Measure
order_number: 2
---
{::options parse_block_html="true" /} 


<details>
<summary markdown="span">**About**</summary>      
<br>
Measurement and evaluation of AI systems often involves testing with human subjects or using data captured from human subjects. Protection of human subjects is required by law when carrying out federally funded research, and is a domain specific requirement for some disciplines. Standard human subjects protection procedures include protecting the welfare and interests of human subjects, designing  evaluations to minimize risks to subjects, and completion of mandatory training regarding legal requirements and expectations. 
 
Evaluations of AI system performance that utilize human subjects or human subject data should reflect the population within the context of use. AI system activities utilizing non-representative data may lead to inaccurate assessments or negative and harmful outcomes. It is often difficult – and sometimes impossible, to collect data or perform evaluation tasks that reflect the full operational purview of an AI system. Methods for collecting, annotating, or using these data can also contribute to the challenge. To counteract these challenges, organizations can connect human subjects data collection, and dataset practices, to AI system contexts and purposes and do so in close collaboration with AI Actors from the relevant domains.

</details>

<details>
<summary markdown="span">**Suggested Actions**</summary>

- Follow human subjects research requirements as established by organizational and disciplinary requirements, including informed consent and compensation, during dataset collection activities.
- Analyze differences between intended and actual population of users or data subjects, including likelihood for errors, incidents or negative impacts.
- Utilize disaggregated evaluation methods (e.g. by race, age, gender, ethnicity, ability, region) to improve AI system performance when deployed in real world settings. 
- Establish thresholds and alert procedures for dataset representativeness within the context of use. 
- Construct datasets in close collaboration with experts with knowledge of the context of use.
- Follow intellectual property and privacy rights related to datasets and their use, including for the subjects represented in the data.
- Evaluate data representativeness through 
	- investigating known failure modes, 
	- assessing data quality and diverse sourcing, 
	- applying public benchmarks, 
	- traditional bias testing, 
	- chaos engineering, 
	- stakeholder feedback 
- Use informed consent for individuals providing data used in system testing and evaluation.

</details>

<details>
<summary markdown="span">**Transparency and Documentation**</summary>
<br>
**Organizations can document the following:**

- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?
- How has the entity identified and mitigated potential impacts of bias in the data, including inequitable or discriminatory outcomes?
- To what extent are the established procedures effective in mitigating bias, inequity, and other concerns resulting from the system?
- To what extent has the entity identified and mitigated potential bias—statistical, contextual, and historical—in the data?
- If it relates to people, were they told what the dataset would be used for and did they consent? What community norms exist for data collected from human communications? If consent was obtained, how? Were the people provided with any mechanism to revoke their consent in the future or for certain uses?

**AI Transparency Resources:**

- GAO-21-519SP - Artificial Intelligence: An Accountability Framework for Federal Agencies & Other Entities. [URL](https://www.gao.gov/products/gao-21-519sp)
- Artificial Intelligence Ethics Framework For The Intelligence Community. [URL](https://www.intelligence.gov/artificial-intelligence-ethics-framework-for-the-intelligence-community) 
- WEF Companion to the Model AI Governance Framework- WEF - Companion to the Model AI Governance Framework, 2020. [URL](https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Resource-for-Organisation/AI/SGIsago.pdf)
- Datasheets for Datasets. [URL](https://arxiv.org/abs/1803.09010)

</details>

<details>
<summary markdown="span">**References**</summary>      
<br>

United States Department of Health, Education, and Welfare's National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research. The Belmont Report: Ethical Principles and Guidelines for the Protection of Human Subjects of Research. Volume II. United States Department of Health and Human Services Office for Human Research Protections. April 18, 1979. [URL](https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html)

Office for Human Research Protections (OHRP). “45 CFR 46.” United States Department of Health and Human Services Office for Human Research Protections, March 10, 2021. [URL](https://www.hhs.gov/ohrp/regulations-and-policy/regulations/45-cfr-46/index.html) Note: Federal Policy for Protection of Human Subjects (Common Rule). 45 CFR 46 (2018)

Office for Human Research Protections (OHRP). “Human Subject Regulations Decision Chart.” United States Department of Health and Human Services Office for Human Research Protections, June 30, 2020. [URL](https://www.hhs.gov/ohrp/regulations-and-policy/decision-charts/index.html)

Jacob Metcalf and Kate Crawford. “Where Are Human Subjects in Big Data Research? The Emerging Ethics Divide.” Big Data and Society 3, no. 1 (2016). [URL](https://doi.org/10.1177/2053951716650211)

Boaz Shmueli, Jan Fell, Soumya Ray, and Lun-Wei Ku. "Beyond Fair Pay: Ethical Implications of NLP Crowdsourcing." arXiv preprint, submitted April 20, 2021. [URL](https://arxiv.org/abs/2104.10097)

Divyansh Kaushik, Zachary C. Lipton, and Alex John London. "Resolving the Human Subjects Status of Machine Learning's Crowdworkers." arXiv preprint, submitted June 8, 2022. [URL](https://arxiv.org/abs/2206.04039)

Office for Human Research Protections (OHRP). “International Compilation of Human Research Standards.” United States Department of Health and Human Services Office for Human Research Protections, February 7, 2022. [URL](https://www.hhs.gov/ohrp/international/compilation-human-research-standards/index.html)

National Institutes of Health. “Definition of Human Subjects Research.” NIH Central Resource for Grants and Funding Information, January 13, 2020. [URL](https://grants.nih.gov/policy/humansubjects/research.htm)

Joy Buolamwini and Timnit Gebru. “Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification.” Proceedings of the 1st Conference on Fairness, Accountability and Transparency in PMLR 81 (2018): 77–91. [URL](https://proceedings.mlr.press/v81/buolamwini18a.html)

Eun Seo Jo and Timnit Gebru. “Lessons from Archives: Strategies for Collecting Sociocultural Data in Machine Learning.” FAT* '20: Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency, January 2020, 306–16. [URL](https://doi.org/10.1145/3351095.3372829)

Marco Gerardi, Katarzyna Barud, Marie-Catherine Wagner, Nikolaus Forgo, Francesca Fallucchi, Noemi Scarpato, Fiorella Guadagni, and Fabio Massimo Zanzotto. "Active Informed Consent to Boost the Application of Machine Learning in Medicine." arXiv preprint, submitted September 27, 2022. [URL](https://arxiv.org/abs/2210.08987)

Shari Trewin. "AI Fairness for People with Disabilities: Point of View." arXiv preprint, submitted November 26, 2018. [URL](https://arxiv.org/abs/1811.10670)

Andrea Brennen, Ryan Ashley, Ricardo Calix, JJ Ben-Joseph, George Sieniawski, Mona Gogia, and BNH.AI. AI Assurance Audit of RoBERTa, an Open source, Pretrained Large Language Model. IQT Labs, December 2022. [URL](https://assets.iqt.org/pdfs/IQTLabs_RoBERTaAudit_Dec2022_final.pdf/web/viewer.html)

</details>
