---
    layout: threat
    ThreatCategory: Cellular Air Interface
    ID: CEL-0
    Threat: Air Interface Eavesdropping
    ThreatOrigin:
        - "3G Security: Security Threats and Requirements (Release 4) [^165]"
        - "LTE Architecture Overview and Security Analysis (Draft NISTIR 8071) [^166]"
    ExploitExample:
        - "Attacking phone privacy [^175]"
        - "A man-in-the-middle attack on UMTS [^176]"
    CVEExample:
    PossibleCountermeasures:
        "Use of a ciphering indicator in the interface of the mobile device to inform the user as to whether or not user data (e.g. voice calls, SMS/MMS messages, data) are being encrypted.":
            - Original Equipment Manufacturer
            - Mobile OS Developer
        "Network level air interface encryption for user-plane traffic.":
            - Mobile Network Operator
        "To prevent an attacker who intercepts traffic on the unencrypted channel between a mobile device and a base station, use a mobile VPN or another third-party over-the-top encryption solution to encrypt data prior to transmission over the air interface.":
            - Mobile Device User
            - Enterprise
---

