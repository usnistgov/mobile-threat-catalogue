---
    layout: threat
    ThreatCategory: "Authentication: User or Device to Network"
    ID: AUT-12
    Threat: "Insecure storage of authentication credentials"
    ThreatOrigin:
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Follow best practices for storing sensitive material such as using short-live tokens and the AccountManager on Android and Keychain for iOS. [^227][^228]":
            - Mobile App Developer
        "To mitigate the risk associated with a stolen credential, use authentication protocols that generate unpredictable one-time cryptographic tokens that are replay-resistant (e.g. public key authentication, FIDO Alliance protocols)":
            - Mobile App Developer
        "Educate users that Oauth 2.0 style authorization request from native applications should only be made through external user-agents (system browser)":
            - Mobile Device User
---
