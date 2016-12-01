---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-1
    Threat: "Exploitation of mobile device backups stored in the device or operating system vendor\'s cloud service"
    ThreatOrigin:
    ExploitExample: "Elcomsoft Phone Breaker [^194]"
    CVEExample:
    PossibleCountermeasures:
        "To completely mitigate this attack, disable or do not enable cloud backups for the device, which can be accomplished either through mobile OS settings or for enterprises, MDM device configuration settings.":
            - Mobile Device User
            - Enterprise
        "To increase the difficulty of an attacker gaining access to a cloud service account, enable increased authentication requirements, such as two-factor authentication or step-up authentication when initally accessing the account from an unknown device.":
            - Mobile Device User
            - Enterprise
---
