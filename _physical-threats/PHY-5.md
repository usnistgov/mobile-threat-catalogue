---
layout: threat
ThreatCategory: Physical Access
ID: PHY-5
Threat: Use of a sidechannel attack to obtain crypto private keys
ThreatOrigin: ECDSA Key Extraction from Mobile Devices Via Nonintrusive Physical Side Channels
ExploitExample:
  - New Attack Steals Secret Crypto Keys from Android and iOS Phones [^164]
  - Evolving differential power analysis targets SIM cards [^Rambus-1]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To increase the difficulty of this attack, use devices that implement mitigations in their cryptograhic functions against side-channel attacks, such as iOS 9.x and later devices.
    Enterprise:
      - To increase the difficulty of this attack, use devices that implement mitigations in their cryptograhic functions against side-channel attacks, such as iOS 9.x and later devices.
      - Avoid the use of apps that may implement their own cryptographic functions without validation that appropriate mitigations against side-channel attacks have been implemented.
      - Educate users to be mindful of their physical surroundings when using mobile devices, and to report the appearance of unexpected hardware components to IT security immediately.
      - Educate users to not directly connect their mobile devices to untrusted systems or docking stations, and to maintain strong physical security for innocent components such as USB charging cables
---
