---
date: 02-02-06
title: MEASURE 2.6
categories:
  - MEASURE-2
description: AI system is evaluated regularly for safety risks – as identified in the MAP function. The AI system to be deployed is demonstrated to be safe, its residual negative risk does not exceed the risk tolerance, and can fail safely, particularly if made to operate beyond its knowledge limits. Safety metrics implicate system reliability and robustness, real-time monitoring, and response times for AI system failures.
type: Measure
order_number: 6
---
{::options parse_block_html="true" /} 


<details>
<summary markdown="span">**About**</summary>      
<br>
Many AI systems are being introduced into settings such as transportation, manufacturing or security, where failures may give rise to various physical or environmental harms. AI systems that may endanger human life, health, property or the environment are tested thoroughly prior to  deployment, and are regularly evaluated to confirm the system is safe during normal operations, and in settings beyond its proposed use and knowledge limits. 

Measuring activities for safety often relate to exhaustive testing in development and deployment contexts, understanding the limits of a system’s reliable, robust, and safe behavior, and real-time monitoring of various aspects of system performance. These activities are typically conducted along with other risk mapping, management, and governance tasks such as avoiding past failed designs, establishing and rehearsing incident response plans that enable quick responses to system problems, the instantiation of redundant functionality to cover failures, and transparent and accountable governance. System safety incidents or failures are frequently reported to be related to organizational dynamics and culture. Independent auditors may bring important independent perspectives for reviewing evidence of AI system safety. 

</details>

<details>
<summary markdown="span">**Suggested Actions**</summary>

- Thoroughly measure system performance in development and deployment contexts, and under stress conditions.
	- Employ test data assessments and simulations before proceeding to production testing. Track multiple performance quality and error metrics. 
	- Stress-test system performance under likely scenarios (e.g., concept drift, high load) and beyond known limitations, in consultation with domain experts.
	- Test the system under conditions similar to those related to past known incidents and measure system performance and safety characteristics. 
	- Apply chaos engineering approaches to test systems in extreme conditions and gauge unexpected responses.
	- Document the range of conditions under which the system has been tested and demonstrated to fail safely.
- Measure and monitor system performance in real-time  to enable rapid response when AI system incidents are detected.
- Collect pertinent safety statistics (e.g., out-of-range performance, incident response times, system down time, injuries, etc.) in anticipation of potential information sharing with impacted communities or as required by AI system oversight personnel. 
- Align measurement to the goal of continuous improvement. Seek to increase the range of conditions under which the system is able to fail safely through system modifications in response to in-production testing and events.
- Document, practice and measure incident response plans for AI system incidents, including measuring response and down times.
- Compare documented safety testing and monitoring information with established risk tolerances on an on-going basis.

</details>

<details>
<summary markdown="span">**Transparency and Documentation**</summary>
<br>
**Organizations can document the following:**

- What testing, if any, has the entity conducted on the AI system to identify errors and limitations (i.e.adversarial or stress testing)?
- To what extent has the entity documented the AI system’s development, testing methodology, metrics, and performance outcomes?
- Did you establish mechanisms that facilitate the AI system’s auditability (e.g. traceability of the development process, the sourcing of training data and the logging of the AI system’s processes, outcomes, positive and negative impact)?
- Did you ensure that the AI system can be audited by independent third parties?
- Did you establish a process for third parties (e.g. suppliers, end-users, subjects, distributors/vendors or workers) to report potential vulnerabilities, risks or biases in the AI system?

**AI Transparency Resources:**

- GAO-21-519SP - Artificial Intelligence: An Accountability Framework for Federal Agencies & Other Entities. [URL](https://www.gao.gov/products/gao-21-519sp)
- Artificial Intelligence Ethics Framework For The Intelligence Community. [URL](https://www.intelligence.gov/artificial-intelligence-ethics-framework-for-the-intelligence-community) 

</details>

<details>
<summary markdown="span">**References**</summary>      
<br>

AI Incident Database. 2022. [URL](https://incidentdatabase.ai/)

AIAAIC Repository. 2022. [URL](https://www.aiaaic.org/aiaaic-repository)

Netflix. Chaos Monkey. [URL](https://netflix.github.io/chaosmonkey/)

IBM. “IBM's Principles of Chaos Engineering.” IBM, n.d. [URL](https://www.ibm.com/cloud/architecture/architecture/practices/chaos-engineering-principles/)

Suchi Saria and Adarsh Subbaswamy. "Tutorial: Safe and Reliable Machine Learning." arXiv preprint, submitted April 15, 2019. [URL](https://arxiv.org/abs/1904.07204)

Daniel Kang, Deepti Raghavan, Peter Bailis, and Matei Zaharia. "Model assertions for monitoring and improving ML models." Proceedings of Machine Learning and Systems 2 (2020): 481-496. [URL](https://proceedings.mlsys.org/paper/2020/file/a2557a7b2e94197ff767970b67041697-Paper.pdf)

Larysa Visengeriyeva, et al. “Awesome MLOps.“ GitHub. [URL](https://github.com/visenger/awesome-mlops)

</details>
