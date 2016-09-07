---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-3
    Threat: "Computer vision attacks inferring the PIN/password from video recordings"
    ThreatOrigin:
    ExploitExample: "Black Hat: Google Glass Can Steal Your Passcodes [^126]"
    CVEExample:
    PossibleCountermeasures:
        - "When entering PINs, passwords, or other secrets, limit visibility of the device to others"
        - "Increase the minimum length and reduce the maximum lifetime of passwords and PINs to reduce the probability a inference attack will be successful"
        - "Switch the device to a biometric authentication mechanism for use in while in locations where authentication to the device may be recorded"
        - "For authentication to remote services, employ authentication mechanisms that allow the use of random one-time passwords, which if recorded during entry, cannot be used to authenticate"
---
