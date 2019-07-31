---
layout: threat
ThreatCategory: 'Network Threats: Bluetooth'
ID: LPN-16
Threat: Pairing eavesdropping attacks
ThreatOrigin: 'Guide to Bluetooth Security: NIST SP 800-121rev2) [^J-Padgette-1]'
ThreatDescription: Bluetooth devices that pair using PIN/Legacy pairing (Bluetooth 2.0 and earlier) or low energy Legacy Pairing are vulnerable to eavesdropping. If an attacker can capture all pairing frames, the secret keys can be determined given enough time, facilitating device tracking, impersonation, and the decryption of data transmitted between devices for which secret keys are known.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To prevent this attack, when pairing devices, observe physical security, such as pairing devices in a secure location outside of which, the ability of an attacker to intercept Bluetooth messages is remote.
    Mobile Device user:
      - Avoid the use of Bluetooth 2.0 or earlier devices, or those that only support Legacy Pairing.
---
