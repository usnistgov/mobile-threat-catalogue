---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-7
    Threat: "Biometric spoofing"
    ThreatOrigin:
        - "Liveness Detection to Fight Biometric Spoofing [^132]"
        - "iPhone 5S Touch ID susceptible to fingerprint spoofs [^135]"
    ExploitExample: "Why I hacked TouchID (again) and still think it\'s awesome [^133]"
    CVEExample:
    PossibleCountermeasures:
        - "Store the device in an area with high physical security to limit an attacker's physical access to the device"
        - "Leave the device under trusted supervision to limit an attacker's opportunity to execute biometric spoofing attacks"
        - "Disable biometric authentication before relinquishing direct control/attendance of the device, which requires the attacker to bypass (at a minimum) user-to-device authentication via device unlock code before biometric authentication can be reenabled"
        - "Implementation of multi-factor biometric authentication mechanisms that transform the biometric data with an additional factor (e.g., password or cryptographic token). source: http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5678012"
---
