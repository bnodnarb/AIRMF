---
date: 03-02-02
title: MANAGE 2.2
categories:
  - MANAGE-2
description: Mechanisms are in place and applied to sustain the value of deployed AI systems.
type: Manage
order_number: 2
---
{::options parse_block_html="true" /} 


<details>
<summary markdown="span"><span style="color:#FBFAF5">**About**</span></summary>      
<br>
System performance and trustworthiness may evolve and shift over time, once an AI system is deployed and put into operation. This phenomenon, generally known as drift, can degrade the value of the AI system to the organization and increase the likelihood of negative impacts.  Regular monitoring of AI systems’ performance and trustworthiness enhances organizations’ ability to detect and respond to drift, and thus sustain an AI system’s value once deployed. Processes and mechanisms for regular monitoring address system functionality and behavior - as well as impacts and alignment with the values and norms within the specific context of use. For example, considerations regarding impacts on personal or public safety or privacy may include limiting high speeds when operating autonomous vehicles or restricting illicit content recommendations for minors. 

Regular monitoring activities can enable organizations to systematically and proactively identify emergent risks and respond according to established protocols and metrics.  Options for organizational responses include 1) avoiding the risk, 2)accepting the risk, 3) mitigating the risk, or 4) transferring the risk. Each of these actions require planning and resources. Organizations are encouraged to establish risk management protocols with consideration of the trustworthiness characteristics, the deployment context, and real world impacts. 

</details>

<details>
<summary markdown="span"><span style="color:#FBFAF5">**Suggested Actions**</span></summary>

- Establish risk controls considering trustworthiness characteristics, including:
	- Data management, quality, and privacy (e.g. minimization, rectification or deletion requests) controls as part of organizational data governance policies. 
	- Machine learning and end-point security countermeasures (e.g., robust models, differential privacy, authentication, throttling).
	- Business rules that augment, limit or restrict AI system outputs within certain contexts 
	- Utilizing domain expertise related to deployment context for continuous improvement and TEVV across the AI lifecycle.
	- Development and regular tracking of human-AI teaming configurations.
	- Model assessment and test, evaluation, validation and verification (TEVV) protocols.
	- Use of standardized documentation and transparency mechanisms.
	- Software quality assurance practices across AI lifecycle.
	- Mechanisms to explore system limitations and avoid past failed designs or deployments.
- Establish mechanisms to capture feedback from system end users and potentially impacted groups.
- Review insurance policies, warranties, or contracts for legal or oversight requirements for risk transfer procedures.
- Document risk tolerance decisions and risk acceptance procedures.

</details>

<details>
<summary markdown="span"><span style="color:#FBFAF5">**Transparency and Documentation**</span></summary>
<br>
**Organizations can document the following:**

- To what extent can users or parties affected by the outputs of the AI system test the AI system and provide feedback?
- Could the AI system expose people to harm or negative impacts? What was done to mitigate or reduce the potential for harm?
- How will the accountable human(s) address changes in accuracy and precision due to either an adversary’s attempts to disrupt the AI or unrelated changes in the operational or business environment?

**AI Transparency Resources:**

- GAO-21-519SP - Artificial Intelligence: An Accountability Framework for Federal Agencies & Other Entities. [URL](https://www.gao.gov/products/gao-21-519sp)
- Artificial Intelligence Ethics Framework For The Intelligence Community. [URL](https://www.intelligence.gov/artificial-intelligence-ethics-framework-for-the-intelligence-community)


</details>

<details>
<summary markdown="span"><span style="color:#FBFAF5">**References**</span></summary>      
<br>

**Safety, Validity and Reliability Risk Management Approaches and Resources**

AI Incident Database. 2022. AI Incident Database. [URL](https://incidentdatabase.ai/)

AIAAIC Repository. 2022. AI, algorithmic and automation incidents collected, dissected, examined, and divulged. [URL](https://www.aiaaic.org/aiaaic-repository)

Alexander D'Amour, Katherine Heller, Dan Moldovan, et al. 2020. Underspecification Presents Challenges for Credibility in Modern Machine Learning. arXiv:2011.03395. [URL](https://arxiv.org/abs/2011.03395)

Andrew L. Beam, Arjun K. Manrai, Marzyeh Ghassemi. 2020. Challenges to the Reproducibility of Machine Learning Models in Health Care. Jama 323, 4 (January 6, 2020), 305-306. [URL](https://doi.org/10.1001/jama.2019.20866)

Anthony M. Barrett, Dan Hendrycks, Jessica Newman et al. 2022. Actionable Guidance for High-Consequence AI Risk Management: Towards Standards Addressing AI Catastrophic Risks. arXiv:2206.08966. [URL](https://doi.org/10.48550/arXiv.2206.08966)

Debugging Machine Learning Models, In Proceedings of ICLR 2019 Workshop, May 6, 2019, New Orleans, Louisiana. [URL](https://debug-ml-iclr2019.github.io/)

Jessie J. Smith, Saleema Amershi, Solon Barocas, et al. 2022. REAL ML: Recognizing, Exploring, and Articulating Limitations of Machine Learning Research. arXiv:2205.08363. [URL](https://arxiv.org/abs/2205.08363)

Joelle Pineau, Philippe Vincent-Lamarre, Koustuv Sinha, et al. 2020. Improving Reproducibility in Machine Learning Research (A Report from the NeurIPS 2019 Reproducibility Program) arXiv:2003.12206. [URL](https://doi.org/10.48550/arXiv.2003.12206)

Kirstie Whitaker. 2017. Showing your working: a how to guide to reproducible research. (August 2017). [LINK](https://github.com/WhitakerLab/ReproducibleResearch/blob/master/PRESENTATIONS/Whitaker_ICON_August2017.pdf), [URL](https://doi.org/10.6084/m9.figshare.4244996.v2)

Netflix. Chaos Monkey. [URL](https://netflix.github.io/chaosmonkey/)

Peter Henderson, Riashat Islam, Philip Bachman, et al. 2018. Deep reinforcement learning that matters. Proceedings of the AAAI Conference on Artificial Intelligence. 32, 1 (Apr. 2018). [URL](https://doi.org/10.1609/aaai.v32i1.11694)

Suchi Saria, Adarsh Subbaswamy. 2019. Tutorial: Safe and Reliable Machine Learning. arXiv:1904.07204. [URL](https://doi.org/10.48550/arXiv.1904.07204)

Kang, Daniel, Deepti Raghavan, Peter Bailis, and Matei Zaharia. "Model assertions for monitoring and improving ML models." Proceedings of Machine Learning and Systems 2 (2020): 481-496. [URL](https://proceedings.mlsys.org/paper/2020/file/a2557a7b2e94197ff767970b67041697-Paper.pdf)

**Managing Risk Bias**

National Institute of Standards and Technology (NIST), Reva Schwartz, Apostol Vassilev, et al. 2022. NIST Special Publication 1270 Towards a Standard for Identifying and Managing Bias in Artificial Intelligence. [URL](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf)

**Bias Testing and Remediation Approaches** 

Alekh Agarwal, Alina Beygelzimer, Miroslav Dudík, et al. 2018. A Reductions Approach to Fair Classification. arXiv:1803.02453. [URL](https://doi.org/10.48550/arXiv.1803.02453)

Brian Hu Zhang, Blake Lemoine, Margaret Mitchell. 2018. Mitigating Unwanted Biases with Adversarial Learning. arXiv:1801.07593. [URL](https://doi.org/10.48550/arXiv.1801.07593)

Drago Plečko, Nicolas Bennett, Nicolai Meinshausen. 2021. Fairadapt: Causal Reasoning for Fair Data Pre-processing. arXiv:2110.10200. [URL](https://doi.org/10.48550/arXiv.2110.10200)

Faisal Kamiran, Toon Calders. 2012. Data Preprocessing Techniques for Classification without Discrimination. Knowledge and Information Systems 33 (2012), 1–33. [URL](https://doi.org/10.1007/s10115-011-0463-8)

Faisal Kamiran; Asim Karim; Xiangliang Zhang. 2012. Decision Theory for Discrimination-Aware Classification. In Proceedings of the 2012 IEEE 12th International Conference on Data Mining, December 10-13, 2012, Brussels, Belgium. IEEE, 924-929. [URL](https://doi.org/10.1109/ICDM.2012.45)

Flavio P. Calmon, Dennis Wei, Karthikeyan Natesan Ramamurthy, et al. 2017. Optimized Data Pre-Processing for Discrimination Prevention. arXiv:1704.03354. [URL](https://doi.org/10.48550/arXiv.1704.03354)

Geoff Pleiss, Manish Raghavan, Felix Wu, et al. 2017. On Fairness and Calibration. arXiv:1709.02012. [URL](https://doi.org/10.48550/arXiv.1709.02012)

L. Elisa Celis, Lingxiao Huang, Vijay Keswani, et al. 2020. Classification with Fairness Constraints: A Meta-Algorithm with Provable Guarantees. arXiv:1806.06055. [URL](https://doi.org/10.48550/arXiv.1806.06055)

Michael Feldman, Sorelle Friedler, John Moeller, et al. 2014. Certifying and Removing Disparate Impact. arXiv:1412.3756. [URL](https://doi.org/10.48550/arXiv.1412.3756)

Michael Kearns, Seth Neel, Aaron Roth, et al. 2017. Preventing Fairness Gerrymandering: Auditing and Learning for Subgroup Fairness. arXiv:1711.05144. [URL](https://doi.org/10.48550/arXiv.1711.05144)

Michael Kearns, Seth Neel, Aaron Roth, et al. 2018. An Empirical Study of Rich Subgroup Fairness for Machine Learning. arXiv:1808.08166. [URL](https://doi.org/10.48550/arXiv.1808.08166)

Moritz Hardt, Eric Price, and Nathan Srebro. 2016. Equality of Opportunity in Supervised Learning. In Proceedings of the 30th Conference on Neural Information Processing Systems (NIPS 2016), 2016, Barcelona, Spain. [URL](https://papers.nips.cc/paper/2016/file/9d2682367c3935defcb1f9e247a97c0d-Paper.pdf)

Rich Zemel, Yu Wu, Kevin Swersky, et al. 2013. Learning Fair Representations. In Proceedings of the 30th International Conference on Machine Learning 2013, PMLR 28, 3, 325-333. [URL](http://proceedings.mlr.press/v28/zemel13.html)

Toshihiro Kamishima, Shotaro Akaho, Hideki Asoh & Jun Sakuma. 2012. Fairness-Aware Classifier with Prejudice Remover Regularizer. In Peter A. Flach, Tijl De Bie, Nello Cristianini (eds) Machine Learning and Knowledge Discovery in Databases. European Conference ECML PKDD 2012, Proceedings Part II, September 24-28, 2012, Bristol, UK. Lecture Notes in Computer Science 7524. Springer, Berlin, Heidelberg. [URL](https://doi.org/10.1007/978-3-642-33486-3_3)

**Security and Resilience Resources**

FTC Start With Security Guidelines. 2015. [URL](https://www.ftc.gov/system/files/documents/plain-language/pdf0205-startwithsecurity.pdf) 

Gary McGraw et al. 2022. BIML Interactive Machine Learning Risk Framework. Berryville Institute for Machine Learning. [URL](https://berryvilleiml.com/interactive/)

Ilia Shumailov, Yiren Zhao, Daniel Bates, et al. 2021. Sponge Examples: Energy-Latency Attacks on Neural Networks. arXiv:2006.03463. [URL](https://doi.org/10.48550/arXiv.2006.03463)

Marco Barreno, Blaine Nelson, Anthony D. Joseph, et al. 2010. The Security of Machine Learning. Machine Learning 81 (2010), 121-148. [URL](https://doi.org/10.1007/s10994-010-5188-5)

Matt Fredrikson, Somesh Jha, Thomas Ristenpart. 2015. Model Inversion Attacks that Exploit Confidence Information and Basic Countermeasures. In Proceedings of the 22nd ACM SIGSAC Conference on Computer and Communications Security (CCS '15), October 2015. Association for Computing Machinery, New York, NY, USA, 1322–1333. [URL](https://doi.org/10.1145/2810103.2813677)

National Institute for Standards and Technology (NIST). 2022. Cybersecurity Framework. [URL](https://www.nist.gov/cyberframework)

Nicolas Papernot. 2018. A Marauder's Map of Security and Privacy in Machine Learning. arXiv:1811.01134. [URL](https://doi.org/10.48550/arXiv.1811.01134)

Reza Shokri, Marco Stronati, Congzheng Song, et al. 2017. Membership Inference Attacks against Machine Learning Models. arXiv:1610.05820. [URL](https://doi.org/10.48550/arXiv.1610.05820)

Adversarial Threat Matrix (MITRE). 2021. [URL](https://github.com/mitre/advmlthreatmatrix)

**Interpretability and Explainability Approaches**

Chaofan Chen, Oscar Li, Chaofan Tao, et al. 2019. This Looks Like That: Deep Learning for Interpretable Image Recognition. arXiv:1806.10574. [URL](https://doi.org/10.48550/arXiv.1806.10574)

Cynthia Rudin. 2019. Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead. arXiv:1811.10154. [URL](https://doi.org/10.48550/arXiv.1811.10154)

Daniel W. Apley, Jingyu Zhu. 2019. Visualizing the Effects of Predictor Variables in Black Box Supervised Learning Models. arXiv:1612.08468. [URL](https://doi.org/10.48550/arXiv.1612.08468)

David A. Broniatowski. 2021. Psychological Foundations of Explainability and Interpretability in Artificial Intelligence. National Institute of Standards and Technology (NIST) IR 8367. National Institute of Standards and Technology, Gaithersburg, MD.  [URL](https://doi.org/10.6028/NIST.IR.8367)

Forough Poursabzi-Sangdeh, Daniel G. Goldstein, Jake M. Hofman, et al. 2021. Manipulating and Measuring Model Interpretability. arXiv:1802.07810. [URL](https://doi.org/10.48550/arXiv.1802.07810)

Hongyu Yang, Cynthia Rudin, Margo Seltzer. 2017. Scalable Bayesian Rule Lists. arXiv:1602.08610. [URL](https://doi.org/10.48550/arXiv.1602.08610)

P. Jonathon Phillips, Carina A. Hahn, Peter C. Fontana, et al. 2021. Four Principles of Explainable Artificial Intelligence. National Institute of Standards and Technology (NIST) IR 8312. National Institute of Standards and Technology, Gaithersburg, MD. [URL](https://doi.org/10.6028/NIST.IR.8312)

Scott Lundberg, Su-In Lee. 2017. A Unified Approach to Interpreting Model Predictions. arXiv:1705.07874. [URL](https://doi.org/10.48550/arXiv.1705.07874)

Susanne Gaube, Harini Suresh, Martina Raue, et al. 2021. Do as AI say: susceptibility in deployment of clinical decision-aids. npj Digital Medicine 4, Article 31 (2021). [URL](https://doi.org/10.1038/s41746-021-00385-9)

Yin Lou, Rich Caruana, Johannes Gehrke, et al. 2013. Accurate intelligible models with pairwise interactions. In Proceedings of the 19th ACM SIGKDD international conference on Knowledge discovery and data mining (KDD '13), August 2013. Association for Computing Machinery, New York, NY, USA, 623–631. [URL](https://doi.org/10.1145/2487575.2487579)

**Privacy Resources**

National Institute for Standards and Technology (NIST). 2022. Privacy Framework. [URL](https://www.nist.gov/privacy-framework)

**Data Governance**

Marijn Janssen, Paul Brous, Elsa Estevez, Luis S. Barbosa, Tomasz Janowski, Data governance: Organizing data for trustworthy Artificial Intelligence, Government Information Quarterly, Volume 37, Issue 3, 2020, 101493, ISSN 0740-624X. [URL](https://doi.org/10.1016/j.giq.2020.101493)

**Software Resources**

- [PiML](https://github.com/SelfExplainML/PiML-Toolbox) (explainable models, performance assessment)
- [Interpret](https://github.com/interpretml/interpret) (explainable models)
- [Iml](https://cran.r-project.org/web/packages/iml/index.html) (explainable models)
- [Drifter](https://github.com/ModelOriented/drifter) library (performance assessment)
- [Manifold](https://github.com/uber/manifold) library (performance assessment)
- [SALib](https://github.com/SALib/SALib) library (performance assessment)
- [What-If Tool](https://pair-code.github.io/what-if-tool/index.html#about) (performance assessment)
- [MLextend](http://rasbt.github.io/mlxtend/) (performance assessment)
- AI Fairness 360: 
	- [Python](https://github.com/Trusted-AI/AIF360) (bias testing and mitigation)
	- [R](https://github.com/Trusted-AI/AIF360/tree/master/aif360/aif360-r) (bias testing and mitigation)
- [Adversarial-robustness-toolbox](https://github.com/Trusted-AI/adversarial-robustness-toolbox) (ML security)
- [Robustness](https://github.com/MadryLab/robustness) (ML security)
- [tensorflow/privacy](https://github.com/tensorflow/privacy) (ML security)
- [NIST De-identification Tools](https://www.nist.gov/itl/applied-cybersecurity/privacy-engineering/collaboration-space/focus-areas/de-id/tools) (Privacy and ML security)
- [Dvc](https://dvc.org/) (MLops, deployment)
- [Gigantum](https://github.com/gigantum) (MLops, deployment)
- [Mlflow](https://mlflow.org/) (MLops, deployment)
- [Mlmd](https://github.com/google/ml-metadata) (MLops, deployment)
- [Modeldb](https://github.com/VertaAI/modeldb) (MLops, deployment)

</details>
