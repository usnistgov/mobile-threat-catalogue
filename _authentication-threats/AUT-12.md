---
    layout: threat
    ThreatCategory: "Authentication: User or Device to Network"
    ID: AUT-12
    Threat: "Insecure storage of secret material (passwords)"
    ThreatOrigin:
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        - "Follow best practices for storing sensitive material such as using short-live tokens and the AccountManager on Android and Keychain for iOS. [^227][^228]"
        - "Use authentication protocols that generate unpredictable one-time cryptographic tokens that are replay-resistant (e.g. public key authentication, FIDO Alliance protocols)"
---
