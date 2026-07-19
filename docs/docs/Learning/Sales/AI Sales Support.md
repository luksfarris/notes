# AI Pre-Sales

Yes, we're talking about this. I want to make a list of all the things an AI Architect or Engineer must supply for a successful pre-sales engagement.

Companies are very skeptical of other companies, and very scared of AI interacting their systems. I think pre-sales, from an engineering perspective, is proving to people that you and your team can get the job done. Timely, securely, reliably, scalably, and cost-effectively.

## Things a Proposal Must Include (Tender)

### The Overview

Summarize the value proposition in one slide or page.

GTM is all the rage right now, and for good reason (I'm yet to write a page on GTM). Value over process has always been the mantra. What's the value for a business in adopting AI? Here's a few good ones to estimate:

- Overall estimated savings (in currency per year)
- Estimated improvement in the 2-3 most important KPIs
- Expected reduction (in percentage) in manual labour across all use-cases and workflows
- Percentage of the workflows that will become completely automated

Beside these, an overview should always contain:
- How long exactly the project will take (duration in FTE per month)
- What is the estimated cost for the project (in currency)

### How the team will do it

Preliminary information:

- what infrastructure the client already has, and what else will be required?
- what exact roles, permissions, accesses, software the team will need?

On the models:

- What provider will you use?
- What exact models will you use? How will they be upgraded and how often and by who?
  - Will there be an AI Gateway? Self-hosted or cloud-based?
  - Will model switch be handled by a config, the gateway, an agent?
- Is the data leaving the EU? Is the data going to the company? Is it being used for further training?
- How will they be provisioned?
- How will they handle PII?
- How will they handle other sensitive data?
- Will there be guardrails implemented? Which, and how?
- What is the expected token usage per use-case/workflow? What's the cost per million tokens?

On the connections:

- What tools will your team need to implement?
- How will the agents access those tools? 
  - Are there built-in connectors? If not, is it possible to build connectors? Which connectors would need to be build exactly? How long would it take to build them? How much would it cost to build them?
  - Is there already an MCP server? Will you build one? Where will it be deployed, how will be secured? Who will maintain it?
- What exact roles, permissions, accesses, software each agent will need?
- What exact systems will agents access? Which data will need to be retrieved per use case, and which data will need to be written back? How will you audit this?
- How will connection errors be monitored and reported?
- How will tool prompts be iterated, versioned, and measured?
- How will each connection be tested? Will there be staging environments?

On the agents:

- What platform will be used to build the agents? 
- Is there versioning? 
- Does it need to be deployed? How will it be deployed? How it will be maintained post-implementation?
- Which use-cases will require agents? How (chat, AG-UI, harness) will those agents be used?
- Which use-cases will require workflows? How will the workflows be scheduled? If they require a human in the loop, how will that be implemented?
- Will agents have memory? How will it be managed?
- How will agents be tested and evaluated?
- How will agents be monitored? What happens when there are errors? Will there be dashboards? Which dashboards?
- How will agent cost be managed? Is there a cost-control policy, alerts, budget alerts, kill switches, etc?
- How will agent prompts be iterated, versioned, and measured?

On the use-cases:
- What exactly is the solution proposed for each use-case? 
- What is the value delivered for each use-case?
- What are the systems it will interact with?
- What tools will be required?
- What is the productivity gain?
- How much effort from the client will be required to implement each solution?

### Project Delivery

Usually I work with a team of 2-3 engineers and a PO. I like the team to have a senior, a mid employee, and either a junior or a senior @ 50%. The role of the PO/PM is to help with planning, strategy, business requirements, and communications. 

I also like having one of these roles be from the client's team. This makes the knowledge transfer essentially unnecessary.

In terms of time I usually like to allocate 1-2 weeks for discovery, and 2-4 weeks for implementation per agent. It's important to detail the tools the team will use. 

It's also important to detail what exact commitment is expected from the client, and from which roles (think IT, SMEs, etc).

### Project Conclusion

- What is the plan for finalizing the project? Who will measure and confirm the success of the project? Who will sign off?
- Who will manage the exit process, and document milestones and risks?
- What documentation will be provided, and how?
- What agents will be handed over? How will they be maintained? Who will maintain and update them?
- Will there be extra support provided? For how long? How will it be provided? At what cost?
- How will the team's access be removed?

## Extra Things To Present To Stakeholders (Orals)


### Build A POC

Before you speak to the project owners and sponsors, you should have a clear idea of some of the workflows and processes they want you to automate. Choose one issue, figure out a way to interview an SME, understand what exactly they want to see, and build an end-to-end proof of concept that solves that particular issue. Then show it to the stakeholders and get their feedback.

**Prove that your team can build it (very quickly).**

### Showcase The Proposed Platform

Likely the client has a list of concerns. Showcase with real or mocked data how they proposed platform addresses each and every one of their concerns.

**Prove that your team knows the tools.**