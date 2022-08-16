---
date: 01-04-01
title: MAP 4.1
categories:
  - MAP-4
description: Approaches for mapping third-party technology risks are in place and documented.
type: Map
order_number: 1
---

{::options parse_block_html="true" /}


<details>
<summary markdown="span">**About**</summary>
<br>
Technologies and personnel from third-parties are another source of risk to consider during AI risk management activities. Such risks may be difficult to map since third-party provider risk tolerances may not be the same as the contracting institution.

For example, the use of commercial large language models, which tend to rely on large uncurated web dataset or often have undisclosed origins, has raised concerns about privacy, bias, and unintended effects along with possible introduction of increased levels of statistical uncertainty, difficulty with reproducibility, and issues with scientific validity.

</details>

<details>
<summary markdown="span">**Actions**</summary>

* Review audit reports, testing results, product roadmaps, warranties, terms of service, end-user license agreements, contracts, and other documentation related to third-party entities to assist in value assessment and risk management activities.
* Review third-party software release schedules and software change management plans (hotfixes, patches, updates, forward- and backward- compatibility guarantees) for irregularities that may contribute to AI system risks.
* Inventory third-party material (hardware, open-source software, foundation models, open source data, proprietary software, proprietary data, etc.) required for system implementation and maintenance.
* Review redundancies related to third-party technology and personnel to assess potential risks due to lack of adequate support.

</details>

<details>
<summary markdown="span">**Transparency and Documentation**</summary>
<br>
**Organizations can document the following:**
- Did you establish a process for third parties (e.g. suppliers, end-users, subjects, distributors/vendors or workers) to report potential vulnerabilities, risks or biases in the AI system?
- If your organization obtained datasets from a third party, did your organization assess and manage the risks of using such datasets?
- How will the results independently verified?

**AI Transparency Resources:**
- GAO-21-519SP: AI Accountability Framework for Federal Agencies & Other Entities
- Intel.gov: AI Ethics Framework for Intelligence Community  - 2020
- WEF Model AI Governance Framework Assessment 2020

</details>

<details>
<summary markdown="span">**References**</summary>    
<br>
**Language  models**

Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, and Shmargaret Shmitchell. 2021. On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜. In Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21). Association for Computing Machinery, New York, NY, USA, 610–623. [URL](https://doi.org/10.1145/3442188.3445922)

Julia Kreutzer, Isaac Caswell, Lisa Wang, et al. 2022. Quality at a Glance: An Audit of Web-Crawled Multilingual Datasets. Transactions of the Association for Computational Linguistics 10 (2022), 50–72.  [URL](https://doi.org/10.1162/tacl_a_00447)

Laura Weidinger, Jonathan Uesato, Maribeth Rauh, et al. 2022. Taxonomy of Risks posed by Language Models. In 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT '22). Association for Computing Machinery, New York, NY, USA, 214–229. [URL](https://doi.org/10.1145/3531146.3533088)

Office of the Comptroller of the Currency. 2021. Comptroller's Handbook: Model Risk Management, Version 1.0, August 2021. [URL](https://www.occ.gov/publications-and-resources/publications/comptrollers-handbook/files/model-risk-management/index-model-risk-management.html)

Rishi Bommasani, Drew A. Hudson, Ehsan Adeli, et al. 2021. On the Opportunities and Risks of Foundation Models. arXiv:2108.07258. [URL](https://arxiv.org/abs/2108.07258)


</details>

