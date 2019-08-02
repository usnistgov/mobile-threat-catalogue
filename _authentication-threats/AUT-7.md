---
layout: threat
ThreatCategory: 'Authentication: User to Device'
ID: AUT-7
Threat: Biometric spoofing
ThreatOrigin:
  - Liveness Detection to Fight Biometric Spoofing [^132]
  - iPhone 5S Touch ID susceptible to fingerprint spoofs [^135]
ExploitExample: Why I hacked TouchID (again) and still think it's awesome [^133]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To reduce the opportunity for an attacker to conduct a biometric spoofing attack, physically secure the device (e.g., lock it in a secure container) when leaving it directly unattended.
      - To prevent an attacker able to successfully conduct a biometric spoofing attack against the device from automatically gaining access to sensitive data, implement multi-factor authentication mechanisms for sensitive apps or services.
    Mobile Device user:
      - Consider devices in which multi-factor biometric authentication mechanisms transform the biometric data using an additional factor (e.g., password or cryptographic token).
    Enterprise:
      - Consider devices in which multi-factor biometric authentication mechanisms transform the biometric data using an additional factor (e.g., password or cryptographic token).
      - To prevent an attacker able to successfully conduct a biometric spoofing attack against the device from automatically gaining access to sensitive data, implement multi-factor authentication mechanisms for sensitive apps or services.
title: AUT-7
---
