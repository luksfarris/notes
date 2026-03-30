# Handbook For AI/ML Architecture

This handbook is written by myself, to consolidate some fundamentals about AI/ML architecture.

:::tip
Make sure you understand the business value of what you're doing. 
Why it's important to do it, what will it unlock.
:::

## Ahead Of The Project

- [ ] Kick-off meetings with key stakeholders to align on objectives, scope, roles, and expectations
- [ ] Establishing communication channels and collaboration tools
- [ ] Define who are the required enterprise SME's. Define required availability and commitment to the project.
- [ ] Define who are the project sponsors, and their success criteria.
- [ ] Define who are the people who will work on defining and implementing the Target Architecture:
  - ML-specific Architect
  - Cloud-specific Architect
  - Data Engineering Expert
  - GenAI Expert, 
  - ML Expert, 
  - Cloud-Specific DevOps Expert
  - Security Ops Expert
  - ...

## Architecture Evaluation

Assessment of he AS-IS capability in terms of:
- [ ] Inventory (all their assets including models, servers, platforms, datasets, backends, services, apps, front-ends,  etc.)
- Alignment to desired standards:
  - [ ] Information Governance: NIST CSF, ...
  - [ ] Cloud Security: FedRAMP, ...
  - [ ] Information Security: ISO 27001, ...
  - [ ] Cybersecurity: SCF, CIS Controls, ...
  - [ ] Healthcare: HITRUST, ...
  - [ ] Service Org: SOC 2, ...
  - [ ] others?...
- [ ] gap analysis (what gaps?)
- [ ] network-integration dependencies
- [ ] remediation planning (related to the gaps?)
- [ ] validation of pre-requisites required to proceed to evaluation



## Governance & Operations

-  Roles & responsibilities 
  - [ ] RACI model (Responsible, Accountable, Consulted, and Informed)
  - [ ] Who's responsible for Build/Approve/Deploy/Operate/Monitor/Retire processes
- Compliance controls:
  - [ ] authentication
  - [ ] authorization
  - [ ] encryption
  - [ ] data loss prevention
  - [ ] ...
- evidence expectations
- integration points with existing IT/Cloud governance models

## ML/AI Project Lifecycle

Projects should be consistent and have reduced tech debt. Teams need to have everything they need to succeed, and it not, they should be able to quickly secure additional resources.

- Project template code generation including:
  - [ ] Code samples (think of the relevant use cases)
  - [ ] CI/CD pipelines (pre-commit hooks, build pipelines, release pipelines, monitoring pipelines, ...)
    - [ ] Code Quality
    - [ ] Code Security
    - [ ] Testing
    - [ ] Metric thresholds
  - [ ] IaC scripts for infrastructure provisioning: VMs, storage, networking, ...
  - [ ] Policy-As-Code: mandatory tags, allowed VMs, allowed regions, allowed instance types, ...
  - [ ] Monitoring

## Full ML Framework Validation

Prove the architecture before scaling. Validate full ML framework including GenAI workloads. Validate:

- [ ] Mode development
- [ ] Data ingestion
- [ ] PII detection and masking
- [ ] Data quality checks
- [ ] Data versioning
- [ ] Data lineage
- [ ] Data cataloging
- [ ] Data governance
- [ ] Data security
- [ ] Preprocessing (outliers, missing values, feature engineering)
- [ ] Dimensionality reduction
- [ ] Model training (supervised classification job)
- [ ] Hyperparameter tuning
- [ ] Model evaluation
- [ ] Expected model performance (accuracy, precision, recall, F1 score, AUC-ROC, ...)
- [ ] Experiment monitoring
- [ ] Bias and fairness assessment
- [ ] Model deployment
- [ ] Model monitoring
- [ ] Model retraining
- [ ] Drift detection
- [ ] Model explainability
- [ ] Model inference or alternatively, batch exports of predictions
- [ ] document embedding
- [ ] vector storage
- [ ] vector search
- [ ] hybrid search
- [ ] RAG (retrieval augmented generation)
- [ ] MCP-based tool use
- [ ] A2A patterns
- [ ] AG-UI integration

## Documentation

- Technical standards (`TODO: what standards?`)
- Decision frameworks (when to use what and how)
- Onboarding flows for each role
- Safe development environment that doesn't compromise on developer experience (high flexibility with high security)
  - devcontainers
- Comments on compliance guardrails: 
  - descriptions of policy enforcement via Policy-As-Code
  - description of quality assessment via monitoring
  - description of access controls via IAM
  - description of how incident response is handled including remediation steps
- Description on the required steps for environment promotion (i.e., dev, staging, prod)
