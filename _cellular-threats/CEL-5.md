---
layout: threat
ThreatCategory: Cellular Air Interface
ID: CEL-5
Threat: Incomplete Attach Procedure via Rogue Base station
ThreatOrigin:
  - LTE Architecture Overview and Security Analysis (Draft NISTIR 8071) [^166]
  - LTE Security and Protocol Exploits [^167]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Ensure that the behavior of a mobile device's chipset in these conditions is understood before relying on cellular communication in critical situations.
      - In anticipation of a potential denial-of-service attack on the air interface of devices, establish contingency plans for continued operations, such as use of alternative communication channels.
    Baseband Developer:
      - Ensure that the behavior of a mobile device's chipset in these conditions is understood before relying on cellular communication in critical situations.
---
