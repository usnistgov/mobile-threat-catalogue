---
layout: threat
ThreatCategory: Boot firmware
ID: STA-15
Threat: Bootloader Unlocking
ThreatOrigin:
ThreatDescription: Malicious actors can use an unlocked bootloader to gain root access to phones and to launch attack code. These vulnerabilities would allow an attacker to execute arbitrary code as part of the bootloader compromising the entire chain of trust.[^304]
ExploitExample: "Xiaomi Locks Mi Devices' Bootloaders On Fears Of Malware And Security Risks: Up To 21 Days To Unlock [^47]"
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Educate users of the risks of unlocking the device bootloader.
      - Use EMM/MDM solutions or on-device agents that can potentially detect rooted or jail-broken devices and subsequently, successfully block access to enterprise resources.
    Mobile App Developer:
      - To mitigate the potential of accessing sensitive data or functionality on rooted or jail-broken devices, leverage device attestation APIs to determine the device is in a known-good state prior to executing sensitve actions.
title: STA-15
rawID: 15
---
