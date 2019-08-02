---
layout: threat
ThreatCategory: 'Network Threats: NFC'
ID: LPN-12
Threat: Man in the middle by relaying NFC packets
ThreatOrigin: Implementation and Analysis of a Practical NFC Relay Attack Example [^31]
ExploitExample: 'Demo: NFCGate - An NFC Relay Application for Android [Extended Abstract] [^32]'
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To prevent an attacker from launching a successful NFC relay attack, use mobile devices and NFC apps that require user authorization of the transaction prior to fulfilling requests communicated over NFC.
      - To reduce the opportunity for this attack, disable NFC or associated apps when that feature is not in use.
      - To reduce the number of potentially vulnerable applications running on the device, disable or uninstall any NFC apps that are no longer in use.
    Enterprise:
      - To prevent an attacker from launching a successful NFC relay attack, use mobile devices and NFC apps that require user authorization of the transaction prior to fulfilling requests communicated over NFC.
title: LPN-12
---
