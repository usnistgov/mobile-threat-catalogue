---
    layout: threat
    ThreatCategory: NFC-based
    ID: PAY-1
    Threat: "Compromised mobile payment terminal"
    ThreatOrigin: "Demystifying Point of Sale Malware and Attacks [^12]"
    ExploitExample: "Home Depot Hit By Same Malware as Target [^13]"
    CVEExample:
    PossibleCountermeasures:
        "To mitigate the potential losses incurred as a result of successful PoS attacks, configure mobile payment services to use accounts with limited funds available for purchases, such as pre-paid cards, maximum transaction amounts, or daily spending limits.":
            - Mobile Device User
        "To reduce the time to detection for compromised mobile payment information, perform regular review of statements for accounts for unauthorized transactions.":
            - Mobile Device User
            - Enterprise
        "Follow security best practices regarding the protection of point-of-sale systems. See __Malware Targeting Point of Sale Systems__ [^42]":
            - Point-of-Sale Administrators
---
