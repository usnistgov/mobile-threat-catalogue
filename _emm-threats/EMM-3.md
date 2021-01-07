---
layout: threat
ThreatCategory: Enterprise Mobility
ID: EMM-3
Threat: MDM Impersonation
ThreatDescription: An adversary could impersonate the EMM/MDM server to an enrolled device to execute unauthorized actions, such as triggering a device wipe or installing a malicious MDM profile.
ThreatOrigin: Mobile Device Mismanagement [^4]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile App Developer:
      - Design on-device agents to only accept MDM administrative commands during secure communication with a trusted EMM server (e.g. during a TLS session).
    Enterprise:
      - Consider the use of EMM/MDM products that use digital signatures to allow the on-device agent to perform validation of the source and the integrity of device management messages.
title: EMM-3
rawID: 3
---
