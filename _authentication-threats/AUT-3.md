---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-3
    Threat: "Computer vision attacks inferring the PIN/password from video recordings"
    ThreatOrigin:
    ExploitExample: "Black Hat: Google Glass Can Steal Your Passcodes [^126]"
    CVEExample:
    PossibleCountermeasures:
        "When entering PINs, passwords, or other secrets, limit visibility of the device to others.":
            - Mobile Device User
        "Use devices and applications that support biometric authentication methods (e.g. fingerprint), which are not as easily captured by casual recording methods as entry of PINs or passwords.":
            - Mobile Device User
            - Enterprise
        "Increase the minimum length and reduce the maximum lifetime of passwords and PINs to reduce the probability a inference attack will be successful.":
            - Mobile Device User
            - Enterprise
        "When possible, configure remote services with authentication mechanisms that allow the use of random one-time passwords, which if recorded during entry, cannot later be used to authenticate.":
            - Mobile Device User
            - Enterprise
        "To prevent a successful password inferrence attack from singly enabling authentication by an attacker, configure  sensitive services to require 2-factor authentication.":
            - Mobile Device User
            - Enterprise
---
