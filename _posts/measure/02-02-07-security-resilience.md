---
date: 02-02-07
title: MEASURE 2.7
categories:
  - MEASURE-2
description: AI system security and resilience – as identified in the MAP function – are evaluated and documented.
type: Measure
order_number: 7
---
{::options parse_block_html="true" /} 


<details>
<summary markdown="span">**About**</summary>      
<br>
AI systems, as well as the ecosystems in which they are deployed, may be said to be resilient if they can withstand unexpected adverse events or unexpected changes in their environment or use – or if they can maintain their functions and structure in the face of internal
and external change and degrade safely and gracefully when this is necessary. Common security concerns relate to adversarial examples, data poisoning, and the exfiltration of models, training data, or other intellectual property through AI system endpoints. AI systems that can maintain confidentiality, integrity, and availability through protection mechanisms that prevent unauthorized access and use may be said to be secure. 

Security and resilience are related but distinct characteristics. While resilience is the ability
to return to normal function after an unexpected adverse event, security includes resilience
but also encompasses protocols to avoid, protect against, respond to, or recover
from attacks. Resilience relates to robustness and encompasses unexpected or adversarial use (or abuse or misuse) of the model or data.

</details>

<details>
<summary markdown="span">**Suggested Actions**</summary>

- Establish and track AI system security tests and metrics (e.g.,  red-teaming activities, frequency and rate of anomalous events, system down-time, incident response times, time-to-bypass, etc.).
- Use red-team exercises to actively test the system under adversarial or stress conditions, measure system response, assess failure modes or determine if system can return to normal function after an unexpected adverse event. 
- Document red-team exercise results as part of continuous improvement efforts, including the range of security test conditions and results. 
- Use countermeasures (e.g, authentication, throttling, differential privacy, robust ML approaches) to increase the range of security conditions under which the system is able to return to normal function.
- Modify system security procedures and countermeasures to increase robustness and resilience to attacks in response to testing and events experienced in production.
- Verify that information about errors and attack patterns is shared with incident databases, other organizations with similar systems, and system users and stakeholders (MANAGE-4.1).
- Develop and maintain information sharing practices with AI actors from other organizations to learn from common attacks. 
- Verify that third party AI resources and personnel undergo security audits and screenings. Risk indicators may include failure of third parties to provide relevant security information. 

</details>

<details>
<summary markdown="span">**Transparency and Documentation**</summary>
<br>
**Organizations can document the following:**

- To what extent does the plan specifically address risks associated with acquisition, procurement of packaged software from vendors, cybersecurity controls, computational infrastructure, data, data science, deployment mechanics, and system failure?
- What assessments has the entity conducted on data security and privacy impacts associated with the AI system?
- What processes exist for data generation, acquisition/collection, security, maintenance, and dissemination?
- What testing, if any, has the entity conducted on the AI system to identify errors and limitations (i.e. adversarial or stress testing)?
- If a third party created the AI, how will you ensure a level of explainability or interpretability?

**AI Transparency Resources:**

- GAO-21-519SP - Artificial Intelligence: An Accountability Framework for Federal Agencies & Other Entities. [URL](https://www.gao.gov/products/gao-21-519sp)
- Artificial Intelligence Ethics Framework For The Intelligence Community. [URL](https://www.intelligence.gov/artificial-intelligence-ethics-framework-for-the-intelligence-community) 

</details>

<details>
<summary markdown="span">**References**</summary>      
<br>

Matthew P. Barrett. “Framework for Improving Critical Infrastructure Cybersecurity Version 1.1.” National Institute of Standards and Technology (NIST), April 16, 2018. [URL](https://doi.org/10.6028/nist.cswp.04162018)

Nicolas Papernot. "A Marauder's Map of Security and Privacy in Machine Learning." arXiv preprint, submitted on November 3, 2018. [URL](https://arxiv.org/abs/1811.01134)

Gary McGraw, Harold Figueroa, Victor Shepardson, and Richie Bonett. “BIML Interactive Machine Learning Risk Framework.” Berryville Institute of Machine Learning (BIML), 2022. [URL](https://berryvilleiml.com/interactive/)

Mitre Corporation. “Mitre/Advmlthreatmatrix: Adversarial Threat Landscape for AI Systems.” GitHub, 2023. [URL](https://github.com/mitre/advmlthreatmatrix)

National Institute of Standards and Technology (NIST). “Cybersecurity Framework.” NIST, 2023. [URL](https://www.nist.gov/cyberframework)

**Software Resources**

- [adversarial-robustness-toolbox](https://github.com/Trusted-AI/adversarial-robustness-toolbox)
- [counterfit](https://github.com/Azure/counterfit/)
- [foolbox](https://github.com/bethgelab/foolbox)
- [ml_privacy_meter](https://github.com/privacytrustlab/ml_privacy_meter)
- [robustness](https://github.com/MadryLab/robustness) 
- [tensorflow/privacy](https://github.com/tensorflow/privacy)







</details>
