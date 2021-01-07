---
layout: threat
ThreatCategory: Mobile Operating System
ID: STA-5
Threat: Bypassing Code Signing Mechanisms
ThreatOrigin:
ThreatDescription: Code signing protects the software from being modified by anyone other than the author. If malicious actors have gained access to valid certificates they can use them later with their malicious code to appear to be signed by trusted author, and therefore trusted by the user.[^301]
ExploitExample: iOS 8.4.1 Kernel Vulnerabilities in AppleHDQGasGaugeControl [^216]
CVEExample: CVE-2015-5839
PossibleCountermeasures:
    Enterprise:
      - Use EMM/MDM solutions in combination with devices that successfully enforce a policy to maintain a minimum OS patch level and block access to enterprise resources to non-compliant devices.
      - Purchase devices from vendors/carriers who have committed to providing timely updates or who have known track records for prompt updates.
      - Use EMM/MDM solutions in combination with other tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices that show indications of device compromise.
title: STA-5
rawID: 5
---
