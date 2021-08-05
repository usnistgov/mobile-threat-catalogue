---
layout: threat
ThreatCategory: 'Network Threats: Bluetooth'
ID: LPN-9
Threat: Bluesnarfing
ThreatOrigin: Guide to Bluetooth Security (SP 800-121) [^28]
ThreatDescription: Bluesnarfing is a vulnerability that adversaries can take advantage of to exfiltrate data from the target device without the user's knowledge or interaction.
ExploitExample: 'Studying Bluetooth Malware Propagation: The BlueBag Project [^30]'
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - 'To reduce opportunity for this attack on vulnerable devices, disable Bluetooth when that feature is not in use. Note: per NIST SP 800-121 Revision 1, some _older_ devices possessed a firmware vulnerability enabling this exploit.'
      - To reduce opportunity for this attack while Bluetooth is in use, operate the device in a secure location away from windows and doors, outside of which the probability an attacker can establish Bluetooth communication is remote.
title: LPN-9
rawID: 9
---
