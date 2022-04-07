---
layout: threat
ThreatCategory: Carrier Infrastructure
ID: CEL-28
Threat: Backhaul and Core Eavesdropping
ThreatOrigin:
ThreatDescription: If the LTE network is not utilizing confidentiality protection on the backhaul interface the communication being sent to and received from cell sites is vulnerable to eavesdropping.[^166]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile Network Operator:
      - Ensure Confidentiality Protection of S1 Interface
      - Encrypt Exposed Interfaces Between Core Network Components
    Enterprise:
      - To mitigate the impact of eavesdropping on an unencrypted backhaul or core network communications channel, employ over-the-top encryption services to user-plane data prior to transmission off the mobile device.
    Mobile Device User:
      - To mitigate the impact of eavesdropping on an unencrypted backhaul or core network communications channel, employ over-the-top encryption services to user-plane data prior to transmission off the mobile device.
title: CEL-28
rawID: 28
---
