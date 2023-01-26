---
date: 01-02-03
title: MAP 2.3
categories:
  - MAP-2
description: Scientific integrity and TEVV considerations are identified and documented, including those related to experimental design, data collection and selection (e.g., availability, representativeness, suitability), system trustworthiness, and construct validation.
type: Map
order_number: 3
---

{::options parse_block_html="true" /}


<details>
<summary markdown="span">**About**</summary>
<br>
Standard testing and evaluation protocols provide a basis to confirm assurance in a system that it is operating as designed and claimed. AI systems’ complexities create challenges for traditional testing and evaluation methodologies, which tend to be designed for static or isolated system performance.  Opportunities for risk continue well beyond design and deployment, into system operation and application of system-enabled decisions. Testing and evaluation methodologies and metrics therefore address a continuum of activities. TEVV is enhanced when key metrics for performance, safety, and reliability are interpreted in a socio-technical context and not confined to the boundaries of the AI system pipeline. 

Other challenges for managing AI risks relate to dependence on large scale datasets, which can impact data quality and validity concerns. The difficulty of finding the “right” data may lead AI actors to select datasets based more on accessibility and availability than on suitability for operationalizing the phenomenon that the AI system intends to support or inform. Such decisions could contribute to an environment where the data used in processes is not fully representative of the populations or phenomena that are being modeled, introducing downstream risks.  Practices such as dataset reuse may also lead to disconnect from the social contexts and time periods of their creation.  This contributes to issues of validity of the underlying dataset for providing proxies, measures, or predictors within the model.

</details>

<details>
<summary markdown="span">**Suggested Actions**</summary>

- Identify and document experiment design and statistical techniques that are valid for testing complex socio-technical systems like AI, which involve human factors, emergent properties, and dynamic context(s) of use.   
- Develop and apply TEVV protocols for models, system and its subcomponents, deployment, and operation.
- Demonstrate and document that AI system performance and validation metrics are interpretable and unambiguous for downstream decision making tasks, and take socio-technical factors such as context of use into consideration.
- Identify and document assumptions,  techniques, and metrics used for testing and evaluation throughout the AI lifecycle including experimental design techniques for data collection, selection, and management practices in accordance with data governance policies established in GOVERN.
- Identify testing modules that can be incorporated throughout the AI lifecycle, and verify that processes enable corroboration by independent evaluators.
- Establish mechanisms for regular communication and feedback among relevant AI actors and internal or external stakeholders related to the validity of design and deployment assumptions. 
- Establish mechanisms for regular communication and feedback between relevant AI actors and internal or external stakeholders related to the development of TEVV approaches throughout the lifecycle to detect and assess potentially harmful impacts
- Document assumptions made and techniques used in data selection, curation, preparation and analysis, including:
	- identification of constructs and proxy targets, 
	- development of  indices – especially those operationalizing concepts that are inherently unobservable (e.g. “hireability,” “criminality.” “lendability”).
- Map adherence to policies that address data and construct validity, bias, privacy and security for AI systems and verify documentation, oversight, and processes.
- Identify and document transparent methods (e.g. causal discovery methods) for inferring causal relationships between constructs being modeled and dataset attributes or proxies.
- Identify and document processes to understand and trace test and training data lineage and its metadata resources for mapping risks.
- Document known limitations, risk mitigation efforts associated with, and methods used for, training data collection, selection, labeling, cleaning, and analysis (e.g. treatment of missing, spurious, or outlier data; biased estimators).
- Establish and document practices to check for capabilities that are in excess of those that are planned for, such as emergent properties, and to revisit prior risk management steps in light of any new capabilities.
- Establish processes to test and verify that design assumptions about the set of deployment contexts continue to be accurate and sufficiently complete.
- Work with domain experts and other external AI actors to:
	- Gain and maintain contextual awareness and knowledge about how human behavior, organizational factors and dynamics, and society influence, and are represented in, datasets, processes, models, and system output.
	- Identify participatory approaches for responsible Human-AI configurations and oversight tasks, taking into account sources of cognitive bias.
	- Identify techniques to manage and mitigate sources of bias (systemic, computational, human- cognitive) in computational models and systems, and the assumptions and decisions in their development..
- Investigate and document potential negative impacts due related to the full product lifecycle and associated processes that may conflict with organizational values and principles.

</details>

<details>
<summary markdown="span">**Transparency and Documentation**</summary>
<br>
**Organizations can document the following:**
- Are there any known errors, sources of noise, or redundancies in the data?
- Over what time-frame was the data collected? Does the collection time-frame match the creation time-frame
- What is the variable selection and evaluation process?
- How was the data collected? Who was involved in the data collection process? If the dataset relates to people (e.g., their attributes) or was generated by people, were they informed about the data collection? (e.g., datasets that collect writing, photos, interactions, transactions, etc.)
- As time passes and conditions change, is the training data still representative of the operational environment?
- Why was the dataset created? (e.g., were there specific tasks in mind, or a specific gap that needed to be filled?
- How does the entity ensure that the data collected are adequate, relevant, and not excessive in relation to the intended purpose?

**AI Transparency Resources:**
- Datasheets for Datasets. [URL](http://arxiv.org/abs/1803.09010)
- WEF Model AI Governance Framework Assessment 2020. [URL](https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Resource-for-Organisation/AI/SGModelAIGovFramework2.pdf)
- WEF Companion to the Model AI Governance Framework- 2020. [URL](https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Resource-for-Organisation/AI/SGIsago.pdf)
- GAO-21-519SP: AI Accountability Framework for Federal Agencies & Other Entities. [URL](https://www.gao.gov/products/gao-21-519sp)
- ATARC Model Transparency Assessment (WD) – 2020. [URL](https://atarc.org/wp-content/uploads/2020/10/atarc_model_transparency_assessment-FINAL-092020-2.docx)
- Transparency in Artificial Intelligence - S. Larsson and F. Heintz – 2020. [URL](https://lucris.lub.lu.se/ws/files/79208055/Larsson_Heintz_2020_Transparency_in_artificial_intelligence_2020_05_05.pdf)

</details>

<details>
<summary markdown="span">**References**</summary>    
<br>
**Challenges with dataset selection**

Alexandra Olteanu, Carlos Castillo, Fernando Diaz, and Emre Kiciman. 2019. Social Data: Biases, Methodological Pitfalls, and Ethical Boundaries. Front. Big Data 2, 13 (11 July 2019). [URL](https://doi.org/10.3389/fdata.2019.00013)

Amandalynne Paullada, Inioluwa Deborah Raji, Emily M. Bender, et al. 2020. Data and its (dis)contents: A survey of dataset development and use in machine learning research. arXiv:2012.05345. [URL](https://arxiv.org/abs/2012.05345)

Catherine D'Ignazio and Lauren F. Klein. 2020. Data Feminism. The MIT Press, Cambridge, MA. [URL](https://data-feminism.mitpress.mit.edu/)

Miceli, M., & Posada, J. (2022). The Data-Production Dispositif. ArXiv, abs/2205.11963.

Barbara Plank. 2016. What to do about non-standard (or non-canonical) language in NLP. arXiv:1608.07836. [URL](https://arxiv.org/abs/1608.07836)

**Dataset and test, evaluation, validation and verification (TEVV) processes in AI system development**

National Institute of Standards and Technology (NIST), Reva Schwartz, Apostol Vassilev, et al. 2022. NIST Special Publication 1270 Towards a Standard for Identifying and Managing Bias in Artificial Intelligence. [URL](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf)

Inioluwa Deborah Raji, Emily M. Bender, Amandalynne Paullada, et al. 2021. AI and the Everything in the Whole Wide World Benchmark. arXiv:2111.15366. [URL](https://arxiv.org/abs/2111.15366)

**Statistical balance**

Ziad Obermeyer, Brian Powers, Christine Vogeli, and Sendhil Mullainathan. 2019. Dissecting racial bias in an algorithm used to manage the health of populations. Science 366, 6464 (25 Oct. 2019), 447-453. [URL](https://doi.org/10.1126/science.aax2342)

Amandalynne Paullada, Inioluwa Deborah Raji, Emily M. Bender, et al. 2020. Data and its (dis)contents: A survey of dataset development and use in machine learning research. arXiv:2012.05345. [URL](https://arxiv.org/abs/2012.05345)

Solon Barocas, Anhong Guo, Ece Kamar, et al. 2021. Designing Disaggregated Evaluations of AI Systems: Choices, Considerations, and Tradeoffs. Proceedings of the 2021 AAAI/ACM Conference on AI, Ethics, and Society. Association for Computing Machinery, New York, NY, USA, 368–378. [URL](https://doi.org/10.1145/3461702.3462610)

**Measurement and evaluation**

Abigail Z. Jacobs and Hanna Wallach. 2021. Measurement and Fairness. In Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT ‘21). Association for Computing Machinery, New York, NY, USA, 375–385. [URL](https://doi.org/10.1145/3442188.3445901)

Ben Hutchinson, Negar Rostamzadeh, Christina Greer, et al. 2022. Evaluation Gaps in Machine Learning Practice. arXiv:2205.05256. [URL](https://arxiv.org/abs/2205.05256)

Laura Freeman, "Test and evaluation for artificial intelligence." Insight 23.1 (2020): 27-30. [URL](https://doi.org/10.1002/inst.12281)

**Existing frameworks**

National Institute of Standards and Technology. (2018). Framework for improving critical infrastructure cybersecurity. [URL](https://nvlpubs.nist.gov/nistpubs/cswp/nist.cswp.04162018.pdf)

Kaitlin R. Boeckl and Naomi B. Lefkovitz. "NIST Privacy Framework: A Tool for Improving Privacy Through Enterprise Risk Management, Version 1.0." National Institute of Standards and Technology (NIST), January 16, 2020. [URL](https://www.nist.gov/publications/nist-privacy-framework-tool-improving-privacy-through-enterprise-risk-management.)

</details>
