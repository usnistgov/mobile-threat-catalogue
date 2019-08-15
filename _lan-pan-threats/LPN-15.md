---
layout: threat
ThreatCategory: 'Network Threats: Bluetooth'
ID: LPN-15
Threat: Secure Simple Pairing attacks
ThreatDescription: An attacker may be able to force or entice a Bluetooth device to participate in Just Works SSP, which is susceptible to MiTM attacks.
ThreatOrigin: 'Guide to Bluetooth Security: Draft NIST SP 800-121rev2 [^J-Padgette-1]'
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To reduce opportunity for this attack, disable Bluetooth when that feature is not in use.
    Enterprise:
      - Use EMM/MDM solutions in combination with devices that successfully enforce a policy inhibit Just Works functionality or disable Bluetooth entirely, as appropriate.
title: LPN-15
rawID: 15
---
