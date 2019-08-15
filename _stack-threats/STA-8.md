---
CVEExample:
ExploitExample: 'Android: Third-party app stores (whether for enterprise or personal use) that require user to weaken device security posture by enabling installation of apps from unknown sources.'
ID: STA-8
PossibleCountermeasures:
    Mobile Device User:
      - For Android devices, to reduce the duration of this threat, when needing to install app not available from the Google Play Store (e.g., in-house enterprise app), only enable the __Unknown Sources__ option in __Settings > Security__ menu for as long as necessary to complete installation of the 3rd party app; disable it when installation is complete.
      - To reduce the probability that an attacker exploits the reduced security posture to install unauthorized apps on the device, while **Unknown Sources** is enabled, perform enterprise app installation while connected to trusted and secure Wi-Fi networks, or at a minimum, over a VPN connection to a secured enterprise network.
      - To reduce the probability that an attacker exploits the reduced security posture to install unauthorized apps on the device, while __Unknown Sources__ is enabled, limit device activity to installing trusted enterprise applications through trusted channels (e.g., enterprise app store). Web pages, e-mails, SMS/MMS messages, and NFC/RFID tags can all present (and potentially automatically access) URLs to malicious apps that would normally blocked from installation.
Threat: Use of legitimate services that force device user to place device into an insecure configuration to use them.
ThreatCategory: Mobile Operating System
ThreatOrigin:
layout: threat
title: STA-8
rawID: 8
---
