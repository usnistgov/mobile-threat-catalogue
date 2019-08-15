---
layout: threat
ThreatCategory: Mobile Operating System
ID: STA-1
Threat: Deliberate jailbreaking/rooting of device by its user/owner, which may place the device in a degraded security state
ThreatOrigin: 'Mobile Security: Threats and Countermeasures [^90]'
ExploitExample:
CVEExample: CVE-2015-3636
PossibleCountermeasures:
    Mobile Device User:
      - Ensure devices are kept up-to-date with security patches to decrease the likelihood that they can be rooted/jailbroken.
    Enterprise:
      - Ensure devices are kept up-to-date with security patches to decrease the likelihood that they can be rooted/jailbroken.
      - Use hardware mechanisms, device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies), or other tools to detect rooted/jailbroken devices, provide notification to the enterprise and user, and block enterprise connectivity.
      - Help users to understand the risks associated with rooting/jailbreaking their devices.
title: STA-1
rawID: 1
---
