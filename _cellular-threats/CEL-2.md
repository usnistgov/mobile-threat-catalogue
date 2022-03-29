---
layout: threat
ThreatCategory: Cellular Air Interface
ID: CEL-2
Threat: Device and Identity Tracking via Rogue Base station
ThreatOrigin:
  - '3G Security: Security Threats and Requirements (Release 4) [^165]'
  - LTE Architecture Overview and Security Analysis [^166]
ThreatDescription: A rogue base station could use a device's unique identifiers to identify the device owner and whether an individual is, or is not, residing within a specific location.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To increase the complexity of tracking a device over a longer term (e.g., following consecutive hand-offs), use devices that generate temporary device identities.
      - To reduce the amount of high-quality data an attacker can use to track a device, employ methods of rogue base station detection
    Original Equipment Manufacturer:
      - To reduce the amount of high-quality data an attacker can use to track a device, employ methods of rogue base station detection
title: CEL-2
rawID: 2
---
