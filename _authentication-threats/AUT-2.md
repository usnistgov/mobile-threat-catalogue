---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-2
    Threat: "PIN/password brute force"
    ThreatOrigin:
    ExploitExample:
        - "Black Box Brouhaha Breaks Out Over Brute Forcing of iPhone Pin Lock [^125]"
        - "iOS 9 LockScreen Bypass Exposes Photos and Contacts [^127]"
        - "The bumpy road towards iPhone 5c NAND mirroring [^243]"
    CVEExample:
    PossibleCountermeasures:
        - "Increase the minimum length and complexity and reduce the maximum lifetime of passwords and PINs to reduce the probability a brute-force attack will be successful"
        - "Incrementally increasing delays when wrong unlock code entered"
        - "Wipe device after set number of failed unlock attempts"
        - "Physically secure devices when not directly attended to prevent access by an attacker"
---
