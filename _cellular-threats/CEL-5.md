---
layout: threat
ThreatCategory: Cellular Air Interface
ID: CEL-5
Threat: Incomplete Attach Procedure via Rogue Base station
ThreatOrigin:
  - LTE Architecture Overview and Security Analysis (Draft NISTIR 8071) [^166]
  - LTE Security and Protocol Exploits [^167]
ThreatDescription: A mobile device is prevented from connecting to a legitimate base station. A Denial of Service (DoS) attack is implemented by sending an ATTACH REJECT from a rogue base station, causing the mobile device to no longer attach to any base station, legitimate or otherwise. The situation can continue until a hard reboot of the mobile device takes place.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Ensure that the behavior of a mobile device's chipset in these conditions is understood before relying on cellular communication in critical situations.
      - In anticipation of a potential denial-of-service attack on the air interface of devices, establish contingency plans for continued operations, such as use of alternative communication channels.
    Baseband Developer:
      - Ensure that the behavior of a mobile device's chipset in these conditions is understood before relying on cellular communication in critical situations.
title: CEL-5
rawID: 5
---
