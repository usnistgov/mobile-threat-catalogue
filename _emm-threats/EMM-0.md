---
layout: threat
ThreatCategory: Enterprise Mobility
ID: EMM-0
Threat: EMM application on the mobile device fails to validate digital certificate
ThreatOrigin: The Security of MDM Systems[^3]
ExploitExample:
CVEExample: CVE-2014-5903
PossibleCountermeasures:
    Enterprise:
      - As part of the decision process when choosing to deploy an EMM solution that uses an on-device agent app, verify with the suite vendor that the agent app properly validates the digital certificate of the EMM server for any communication session.
      - Consider choosing on-device agent apps that have certified against the most recent NIAP protection profile for MDM agents, as this provides a measure of assurance that the agent properly validates digital certificates.
      - To mitigate the risk of a MiTM attack on remote agent-server communications (for on-premises deployments) due to improper certificate validation by the agent, use mobile OS-provided VPN features to first establish a secure connection to the enterprise network.
title: EMM-0
---
