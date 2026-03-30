# Azure Fundamentals (AZ-900)

Udemy course: "Prepare for Microsoft AZ 900 Exam with Detailed explanations and lots review questions + 2 Full Practice Tests" by Anand Rao Nednur.

https://udemy.com/course/az-900-microsoft-azure-fundamentals-certification/learn/lecture/15836038#overview

## Cloud Concepts

5 key characteristics of cloud computing:

1. On-demand self-service: Users provision and manage computing resources as needed without intervention from the service provider.
2. Broad network access: services are accessible over the internet from various devices
3. Resource pooling: serve multiple customers with shared resources while ensuring data isolation and security.
4. Rapid elasticity: resource scaling to meet demand.
5. Measured service: aka pay-as-you-go pricing model.

These allow cost efficiency, scalability, speed to market, global reach, and security/compliance.

- Capital expenditure (CapEx): upfront costs for purchasing and maintaining physical infrastructure
- Operational expenditure (OpEx): pay-as-you-go model where you pay for what you use, typically on a monthly basis.

Gartner evaluates the following providers:
- Leaders: Microsoft, Amazon, Google
- Challengers: [empty]
- Visionaries: Alibaba, Oracle
- Niche Players: IBM, Tencent, Huawei

Other players include DigitalOcean and Salesforce Cloud.

There are 3 cloud models:
- Public: delivered over internet (AWS, Azure, GCP)
- Private: dedicated to a single organization(on-premises, or hosted by a third party)
- Hybrid: combination of public and private

Major providers allow users to deploy using infrastructure as code (IaC), and serverless components (abstract away infrastructure management).

## Core Azure Services

### Azure Regions

A region is a geographical location with one or more datacenters (north europe, west europe, etc). Allows preserving of data within a specific region (data residency, compliance). There are special azure regions for US government, China, and Germany. 

Azure regional pairs, which are separate regions within a geographical area (typically above 300 miles apart, like Frankfurt/Berlin), to help with disaster recovery/resilience. This offers automatic failover and data replication.

Azure allows people to see which services/products are available in each region. Different regions have different latencies, features, compliance requirements, and costs.

Availability zones are geographically separated, but within a region (i.e., only in Frankfurt). This allows for more availability and fault tolerance. Not all regions have availability zones.  Availability sets are separate groups of VMs/racks within the same availability zone.

So the hierarchy is: 
- Region Pairs (e.g., `australiaeast` + `australiasoutheast`)
- Individual Regions (e.g., `australiaeast`)
- Availability Zones (i.e., AZs 1, 2, and 3 within `australiaeast`)
- Availability sets (i.e., different racks within AZ 1 of `australiaeast`)

### Resource Groups

Resource groups logically group azure resources, providing per-project deployment, monitoring, security, management, permissions, billing. Could be a project, an application, an environment, etc. They use JSON to define the infrastructure resources, configs, and dependencies. They enable RBAC (role-based access control) for fine-grained permissions. 

Resources under a resource group can be tagged in different ways to help their management.

Resources can be deployed via click-ops, via CLI, and via infrastructure as code (IaC) using Terraform, Bicep, or others.

The hierarchy is:
Azure AD Tenant -> Subscriptions -> Resource Groups -> Resources (VMs, Storage, Databases, etc.)

Subscriptions are always required. **Azure Management Groups** are a way to organize and govern multiple Azure subscriptions at scale.

### Compute Services

- Azure Virtual Machines (VMs): provide full control over a virtualized computer. 
- Azure App Service: managed service (OS, scaling, security) for web apps and APIs
- Azure Functions: serverless compute, event-driven. Perfect for microservices
- Azure Kubernetes Service (AKS): for containerized applications
- Azure Container Instances (ACI): serverless container hosting

Custom container images can be stored in Azure Container Registry (ACR) and deployed to AKS or ACI.


### Networking 

Azure Virtual Networks (VNets) allows azure resources to connect to each other. They allow things like firewalls, bastions, DDoS protection, IP address controls (CIDR blocks).

Azure Load Balancers help redundancy by evenly distributing traffic across multiple VMs or services.

Azure VPN Gateways establish encrypted tunnels between on-premises networks and Azure VNets, enabling extension of on-premises networks to the cloud (hybrid connectivity). They encrypt the in-out traffic. Policy-based VPNs route traffic based on source/destination IPs, while route-based VPNs use routing tables for more flexible traffic management. Azure supports common protocols like OpenVPN. 

Azure Application Gateway distributes incoming web traffic based on URL paths, host headers, and other HTTP attributes. It enables WAF (web application firewall), URL routing, and cookie-based session affinity. It offloads TLS/SSL to the gateway improving performance.

Azure CDNs (Content Delivery Networks) cache and deliver content from edge locations globally, reducing latency and improving performance for users worldwide. 

### Storage Services

- Azure Blob Storage: unstructured data for text, binary (images, videos), backups. Offers different tiers with different costs/performance. Organized in containers.
- Azure Files: fully managed shares via samba **SMB** or **NFS**
- Azure Queue Storage: durable, reliable, scalable message queuing
- Azure SQL Database for relational data (Microsoft SQL Server)
- Azure Table Storage: NoSQL key-value store (schema-less)
- Azure Disk Storage: premium SSDs, SSDs, and HDDs for VMs.
- Azure Data Lake Storage for big data analytics
- Azure Blob Storage on IoT Edge for edge computing scenarios
- Structured data storage: Azure Database For MySQL, MariaDB or PostgreSQL, Azure SQL Managed Instance
- NoSQL: Azure Cosmos DB (documents, key-value, graph), Azure Cache for Redis (in-memory key-value store)

Different data services can be grouped into one Azure Storage Account, which provides a unique namespace and access keys. They allow for unified monitoring, security, billing, access control, migrations. There are many types of storage accounts with different features and pricing: 
- general-purpose v1 and v2
- blob storage accounts
- file storage accounts for premium file shares (high throughput, low latency)
- block blob storage, for premium blob storage performance

Data migrations can be done via managed tools AzCopy (simple copy), Azure Data Factory (cloud-based ETL), or Azure Data Movement library (custom code).

Data can be accessed via Access Keys (that can be rotated). These should not be hardcoded. Storage data can be encrypted with customer-managed keys or Microsoft-managed keys (MMK, using AES-256).

Storage allows for different redundancy options:
- LRS (Locally-redundant storage): 3 copies within a single datacenter
- GRS (geo-redundant storage): LRS + 3 copies in secondary region
- ZRS (zone-redundant storage): 3 copies across availability zones within a region
- RA-GRS (read-access geo-redundant storage): GRS + read access to secondary region

Storage tasks allow for scheduled tasks for storage services (like orchestration of data transfers). Azure also provides data protection policies like soft deletes, backups, versioning, change feeds. Custom replication rules can be created.

Storage accounts have "Blob Inventories" with updated metadata about blobs. Static websites can be served through blob storage. Users can also create lifecycle policies to automatically transition blobs to cooler tiers or delete them after a certain period. CORS policies can also be configured.

### IoT 

Azure IoT Hub is a managed service for secure, bi-directional communication between IoT devices and the cloud (commands, sensor data). This provides security, data translation, storage, insights, and automation.

### Big Data and Analytics, Machine Learning

- Azure Synapse Analytics: unified SQL warehouse, data integrations, analytics (Apache Spark)
- Data Lake Storage: storage system designed for big data analytics
- Azure Data Lake Analytics: on-demand analytics job service (U-SQL language)
- Azure Databricks: Apache Spark-based analytics platform for big data processing
- Azure HDInsight: managed Hadoop clusters
- PowerBI for data visualization and business intelligence
- Azure Machine Learning Studio: web-based drag-and-drop environment for deploying machine learning models
- Azure Machine Learning Workspaces: collaborative environment for building, training, deploying machine learning models. Includes compute targets, datasets, experiment tracking, models, endpoints and MLOps tools.


### Azure Management Tools

- Azure Portal: web-based GUI for managing resources
- Azure PowerShell: command-line interface for scripting and automation
- Azure CLI: cross-platform command-line tool for managing Azure resources
- Azure Resource Manager Templates (ARM): JSON-based infrastructure as code
- Azure Advisor: personalized recommendations for optimizing performance, security, and cost

## Security, Privacy, Compliance, and Trust

### Azure Firewall

- Allows whitelisting/blacklisting IPs, protocols, ports, app names, and URLs
- Protects resources at scale (handles millions of connections per second). Pay-as-you-go pricing.
- Proactively blocks attacks (from known bad actors)
- Simplified management, integrates with other AZ security services.
- Support for monitoring

### DDoS Protection

- Azure offers SLA guarantees and financial protection for DDoS attacks.
- In short azure only allows "clean" traffic into your AZ resources, detecting and re-routing malicious traffic to scrubbing centers.

### Network Security Groups

- Virtual networks (and firewalls) provide isolation, but don't restrict traffic within the network.
- Security groups (NSGs) are inbound/outbound traffic filters that allow/deny traffic based on rules (IPs, Ports, Protocols). 
- They're associated with subnets or individual network interfaces.

### Application Security Groups

- ASGs allow grouping of services using tags, so you don't need to manage network-level rules
- You create the ASG's, and then assign services to those groups

### Authentication and Authorization

- Authentication is proving your identity (login, MFA, certificates).
  - MS uses Entra ID (central identity provider)
- Authorization is setting rules for who can do what (RBAC, rule-based access controls).
  - Azure allows fine-grained control via RBAC
- Managed Identities gives services automatic identities, making it easy for them to auth with other services
- Azure Key Vault safely stores secrets, keys, and certificates.
- Azure AD is another centralized identity and access management service, that connects to many third-party services

### Azure Security Center

Provides security recommendations based on your resources and configurations. Can be free (limited) or standard (full suite).

### Azure Resource Locks

Prevents resources from being modified or deleted. Can be applied at different scopes (subscription, resource group, resource). Two types of locks:
- CanNotDelete: allows read/write but prevents deletion
- ReadOnly: allows read but prevents modifications and deletions

### Azure Blueprints

- Allows you to deploy a set of resources, policies, and configurations as a single unit.
- Repeatable and consistent deployments across environments

## Trivia

- Available purchase and billing options depend on what type of customer you are
- Azure Reservations are pre-paid commitments that offer discount
- There is basic support for free, but paid support plans offer faster response times and more features
- When a feature is released to all users it's called "General Availability"
- Increasing availability increases cost and complexity
- SLA Performance targets are specific to each product/service
- Prices depend on **location**, not availability zone
- Azure generates separate billing reports and invoices for each **subscription** so that you can organize and manage costs.

## Other Services

- **Azure Arc** simplifies governance and management by delivering a consistent multi-cloud and on-premises management platform.
- **Azure Service Health**: After an outage, Service Health provides official incident reports called root cause analysis (RCA), which you can share with stakeholders.
- **Azure Monitor** is a platform that collects metric and logging data, such as CPU percentages. The data can be used to trigger autoscaling.
- **Defense in depth** uses a series of mechanisms to slow the advancement of an attack that aims to gain unauthorized access to data.
- **Azure Policy** is a service in Azure that enables you to create, assign, and manage policies that control or audit resources. These policies enforce different rules across all resource configurations so that the configurations stay compliant with corporate standards.
- **Azure Information Protection** is a cloud-based solution that helps organizations classify, label, and protect sensitive information based on its content.


