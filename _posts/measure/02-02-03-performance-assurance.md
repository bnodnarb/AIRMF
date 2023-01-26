---
date: 02-02-03
title: MEASURE 2.3
categories:
  - MEASURE-2
description: AI system performance or assurance criteria are measured qualitatively or quantitatively and demonstrated for conditions similar to deployment setting(s). Measures are documented.
type: Measure
order_number: 3
---
{::options parse_block_html="true" /} 


<details>
<summary markdown="span">**About**</summary>      
<br>
Once deployed, AI system purposes can drift as the application is repurposed or used in unforeseen ways, and in unplanned settings or contexts. Different deployment contexts means a new set of risks to be considered. 

</details>

<details>
<summary markdown="span">**Suggested Actions**</summary>

- Conduct regular and sustained engagement with potentially impacted communities 
- Maintain a demographically diverse and multidisciplinary and collaborative internal team
- Regularly test and evaluate systems in non-optimized conditions, and in collaboration with AI actors in user interaction and user experience (UI/UX) roles. 
- Evaluate feedback from stakeholder engagement activities, in collaboration with human factors and socio-technical experts.
- Collaborate with socio-technical, human factors, and UI/UX experts to identify notable characteristics in context of use that can be translated into system testing scenarios.
- Measure AI systems prior to deployment in conditions similar to expected scenarios. 
- Measure and document performance criteria such as accuracy (false positive rate, false negative rate, etc.) and efficiency (training times, prediction latency, etc.).
- Measure assurance criteria such as AI actor competency and experience. 
- Document differences between measurement setting and the deployment environment(s). 

</details>

<details>
<summary markdown="span">**Transparency and Documentation**</summary>
<br>
**Organizations can document the following:**

- What experiments were initially run on this dataset? To what extent have experiments on the AI system been documented?
- To what extent does the system/entity consistently measure progress towards stated goals and objectives?
- How will the appropriate performance metrics, such as accuracy, of the AI be monitored after the AI is deployed? How much distributional shift or model drift from baseline performance is acceptable?
- As time passes and conditions change, is the training data still representative of the operational environment?
- What testing, if any, has the entity conducted on theAI system to identify errors and limitations (i.e.adversarial or stress testing)?

**AI Transparency Resources:**

- Artificial Intelligence Ethics Framework For The Intelligence Community. [URL](https://www.intelligence.gov/artificial-intelligence-ethics-framework-for-the-intelligence-community) 
- WEF Companion to the Model AI Governance Framework- WEF - Companion to the Model AI Governance Framework, 2020. [URL](https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Resource-for-Organisation/AI/SGIsago.pdf)
- Datasheets for Datasets. [URL](https://arxiv.org/abs/1803.09010)
</details>

<details>
<summary markdown="span">**References**</summary>      
<br>

Trevor Hastie, Robert Tibshirani, and Jerome Friedman. The Elements of Statistical Learning: Data Mining, Inference, and Prediction. 2nd ed. Springer-Verlag, 2009. [URL](https://hastie.su.domains/ElemStatLearn/)

Jessica Zosa Forde, A. Feder Cooper, Kweku Kwegyir-Aggrey, Chris De Sa, and Michael Littman. "Model Selection's Disparate Impact in Real-World Deep Learning Applications." arXiv preprint, submitted September 7, 2021. [URL](https://arxiv.org/abs/2104.00606)

Inioluwa Deborah Raji, I. Elizabeth Kumar, Aaron Horowitz, and Andrew Selbst. “The Fallacy of AI Functionality.” FAccT '22: 2022 ACM Conference on Fairness, Accountability, and Transparency, June 2022, 959–72. [URL](https://doi.org/10.1145/3531146.3533158)

Amandalynne Paullada, Inioluwa Deborah Raji, Emily M. Bender, Emily Denton, and Alex Hanna. “Data and Its (Dis)Contents: A Survey of Dataset Development and Use in Machine Learning Research.” Patterns 2, no. 11 (2021): 100336. [URL](https://doi.org/10.1016/j.patter.2021.100336)

Christopher M. Bishop. Pattern Recognition and Machine Learning. New York: Springer, 2006. [URL](https://cis.temple.edu/~latecki/Courses/RobotFall08/BishopBook/Pages_from_PatternRecognitionAndMachineLearning1.pdf)

Md Johirul Islam, Giang Nguyen, Rangeet Pan, and Hridesh Rajan. "A Comprehensive Study on Deep Learning Bug Characteristics." arXiv preprint, submitted June 3, 2019. [URL](https://arxiv.org/abs/1906.01388)

Swaroop Mishra, Anjana Arunkumar, Bhavdeep Sachdeva, Chris Bryan, and Chitta Baral. "DQI: Measuring Data Quality in NLP." arXiv preprint, submitted May 2, 2020. [URL](https://arxiv.org/abs/2005.00816)

Doug Wielenga. "Paper 073-2007: Identifying and Overcoming Common Data Mining Mistakes." SAS Global Forum 2007: Data Mining and Predictive Modeling, SAS Institute, 2007. [URL](https://support.sas.com/resources/papers/proceedings/proceedings/forum2007/073-2007.pdf)

**Software Resources**

- [Drifter](https://github.com/ModelOriented/drifter) library (performance assessment)
- [Manifold](https://github.com/uber/manifold) library (performance assessment)
- [MLextend](http://rasbt.github.io/mlxtend/) library (performance assessment)
- [PiML](https://github.com/SelfExplainML/PiML-Toolbox) library (explainable models, performance assessment)
- [SALib](https://github.com/SALib/SALib) library (performance assessment)
- [What-If Tool](https://pair-code.github.io/what-if-tool/index.html#about) (performance assessment)



</details>
