---
layout: threat
ThreatCategory: USIM / SIM / UICC security
ID: STA-20
Threat: SIM Card Crypto Downgrade
ThreatOrigin: Rooting SIM Cards [^211]
ThreatDescription: Management protocols built into the SIM cards allow the cards to communicate with servers belonging to the service providers. The communication between the SIM cards and the service providers are messages that aren’t displayed on the phone but forwarded directly to the SIM card without the user’s knowledge. These messages are encrypted or protected by cryptographic signatures. The over-the-air server and the SIM card use the same key. If attackers figure out the key and they can trick the SIM card into thinking that they are the network provider, the attacker can force the SIM card to use old weak DES algorithm and can subsequently decrypt communications between the device and the network operator. Once an attackers cracks the key, they can commit SMS fraud, circumvent caller ID checks, manipulate voicemails, redirect incoming calls and text messages, track and phish users, and install malware on their devices.[^306]
ExploitExample: Rooting SIM Cards [^211]
CVEExample:
PossibleCountermeasures: {}
title: STA-20
rawID: 20
---
