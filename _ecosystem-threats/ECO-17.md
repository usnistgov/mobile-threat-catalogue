---
    layout: threat
    ThreatCategory: Native mobile app stores
    ID: ECO-17
    Threat: "Obtain an app developer\'s credentials in order to use their credentials to sign and distribute a new malicious app under the developers name / reputation"
    ThreatOrigin: "Keep out hijackers: Secure your app store dev account [^150]"
    ExploitExample: "Major security hole allows Apple passwords to be reset with only email address, date of birth (update) [^152]"
    CVEExample:
    PossibleCountermeasures:
        - "Perform app vetting or employ app vetting services for all applications, including updated versions."
        - "Follow best practices to protect developer accounts such as using MFA. [^159] [^160]"
        - "Follow best practices to protect cryptographic signing material for applications [^162]"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Permission controls to limit what device resources can be used by apps"
---
