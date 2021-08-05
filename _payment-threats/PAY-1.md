---
layout: threat
ThreatCategory: NFC-based
ID: PAY-1
Threat: Compromised Mobile Payment Terminal
ThreatOrigin: Demystifying Point of Sale Malware and Attacks [^12]
ThreatDescription: Attackers could potentially plant malware on Point of Sale (POS) terminals to collect credit card numbers and other private information.
ExploitExample: Home Depot Hit By Same Malware as Target [^13]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To mitigate the potential losses incurred as a result of successful PoS attacks, configure mobile payment services to use accounts with limited funds available for purchases, such as pre-paid cards, maximum transaction amounts, or daily spending limits.
      - To reduce the time to detection for compromised mobile payment information, perform regular review of statements for accounts for unauthorized transactions.
    Enterprise:
      - To reduce the time to detection for compromised mobile payment information, perform regular review of statements for accounts for unauthorized transactions.
    Point-of-Sale Administrators:
      - Follow security best practices regarding the protection of point-of-sale systems. See __Malware Targeting Point of Sale Systems__ [^42]
title: PAY-1
rawID: 1
---
