---
layout: threat
ThreatCategory: Mobile Operating System
ID: STA-1
Threat: Rooting or Jailbreaking
ThreatOrigin: 'Mobile Security: Threats and Countermeasures [^90]'
ThreatDescription: Jailbreaking or rooting a mobile device opens security holes and circumvents the device’s built-in security controls. Phones are much more vulnerable to viruses and malware because users can avoid official app store's application vetting processes that help ensure users download virus-free apps.[^300]
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
