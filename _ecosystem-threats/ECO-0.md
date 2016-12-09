---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-0
    Threat: "Exploitation of mobile device backups stored on a compromised PC"
    ThreatOrigin:
    ExploitExample:
        - "BackStab: Mobile Backup Data Under Attack from Malware [^192]"
        - "iOS 10: Security Weakness Discovered, Backup Passwords Much Easier to Break [^O.Afonin-1]"
    CVEExample:
    PossibleCountermeasures:
        "On iOS devices: Enable encrypted backups. For enterprise-managed devices, enforce the _forceEncryptedBackup_ setting in the configuration profile.":
            - Enterprise
        "To greatly reduce the difficulty of this attack, do not grant trust to a connected computing device or charger unless it is a trusted device directly under your control.":
            - Mobile Device User
            - Enterprise
        "To increase the difficulty of this attack, ensure a device unlock code has been configured for the device and that the device is left in a locked state when being left unattended.":
            - Mobile Device User
        "To decrease the opportunity for an attacker to execute this attack without user presence, use strong physical security measures (e.g., lock the device into a secure container) when leaving the device directly unattended.":
            - Mobile Device User
---
