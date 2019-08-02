---
CVEExample:
ExploitExample:
ID: PAY-5
PossibleCountermeasures:
    Enterprise:
      - Deploy EMM or containerization solutions to prohibit the use HCE-based apps on rooted or jail-broken devices.
      - Use app-vetting services for HCE-based payment apps to determine if they are trustworthy prior to deployment.
    Mobile Device User:
      - Do not use HCE-based apps on rooted or jail-broken devices.
    Mobile App Developer:
      - Review additional methods for ensuring the confidentiality and integrity of mobile payments. Sources of additional guidance include the Smart Card Alliance [^251] and Mozido [^252]
Threat: Application-level attacks against Host Card Emulation (HCE) mobile payment apps.
ThreatCategory: Application-based
ThreatDescription: HCE payments do not directly leverage the security of storing cryptographic keys in the Secure Element, and therefore must securely manage cryptographic secrets and transaction details at the application level. Operating at a lower security baseline makes HCE-based payment apps attractive targets for financially-motivated attackers. The further-lowered security baseline of rooted or jail-broken mobile devices renders HCE-based apps highly vulnerable to compromise.
ThreatOrigin: Secure Element Deployment & Host Card Emulation v1.0 [^250]
layout: threat
title: PAY-5
---
