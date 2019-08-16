---
layout: threat
ThreatCategory: SD Card
ID: STA-40
Threat: Achieving code execution by exploiting vulnerabilities in SD cards.
ThreatDescription: SD cards contain an integrated processor which may contain vulnerabilities an attacker can exploit to achieve arbitrary code execution in the context of the SD card or the calling application.
ThreatOrigin: Exploiting Vulnerabilties of Wi-Fi SD cards [^S-Konstantaras-1]
ExploitExample:
  - On Hacking MicroSD Cards [^Bunnie-1]
CVEExample: CVE-2016-2494
PossibleCountermeasures:
    Mobile Device User:
      - On Android devices running 5.0 or later, do not grant access to the SD card to untrusted apps.
      - Remove an attached SD card when not in use.
    Enterprise:
      - Deploy MAM or containerization solutions that support policies that can restrict access to the SD card by untrusted apps.
title: STA-40
rawID: 40
---
