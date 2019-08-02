---
layout: threat
ThreatCategory: 'Network Threats: Bluetooth'
ID: LPN-14
Threat: Bluejacking - sending unsolicited messages to a bluetooth-enabled mobile device
ThreatDescription: The Bluetooth specification supports the transfer of certain object types defined in the OBEX protocol, namedly vCard (contacts), vCal (calendar events) and vNote (text). OBEX does not require authentication, and messages can be sent to Bluetooth-enabled devices without any prerequisite pairing or authentication. While unsolicited messages are not directly harmful to the device, they may facilitate social engineering attacks if a recipient accepts crafted contact or calendar information sent by an attacker.
ThreatOrigin: 'Guide to Bluetooth Security: Draft NIST SP 800-121rev2 [^J-Padgette-1]'
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To reduce opportunity for this attack, disable Bluetooth when that feature is not in use.
      - Do not accept data transfers, such as contact cards, transmitted over Bluetooth without confidence the message is legitimate.
title: LPN-14
---
