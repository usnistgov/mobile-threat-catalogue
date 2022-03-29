---
layout: threat
ThreatCategory: USSD
ID: CEL-25
Threat: Unauthorized USSD Code Autodial
ThreatOrigin:
ThreatDescription: Unstructured Supplementary Service Data (USSD) code execution causes mobile phone to autodial phone numbers. USSD code could be delivered via browser.
ExploitExample:
  - Dirty USSD Code Could Automatically Wipe Your Samsung TouchWize Device (Updated) [^187]
  - Remote USSD Code Execution on Android Devices [^188]
CVEExample:
PossibleCountermeasures:
    Enterprises:
      - Choose devices without a USSD software stack.
    Mobile Device User:
      - Choose devices without a USSD software stack.
      - Choose devices that will not execute USSD codes without user confirmation.
    Enterprise:
      - Choose devices that will not execute USSD codes without user confirmation.
title: CEL-25
rawID: 25
---
