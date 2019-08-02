---
layout: threat
ThreatCategory: Enterprise Mobility
ID: EMM-4
Threat: Insecure handling of sensitive user data (e.g. domain authentication credentials) by EMM/MDM solution
ThreatOrigin: Mobile Device Mismanagement [^4]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Employ application vetting mechanisms on prospective EMM/MDM solutions to reduce the risk that sensitive data processed by the EMM/MDM is handled in an insecure fashion.
      - To reduce the impact of this threat, configure EMM solutions to capture the minimum set of user and device necessary to meet your broader mobile device security goals.
      - To limit the impact of the theft of credentials supplied to an EMM solution, configure user authentication from mobile devices to enterprise services to use one-time passwords or other replay-resistant cryptographic tokens.
title: EMM-4
---
