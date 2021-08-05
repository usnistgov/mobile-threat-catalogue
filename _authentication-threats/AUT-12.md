---
layout: threat
ThreatCategory: 'Authentication: User or Device to Network'
ID: AUT-12
Threat: Insecure Credential Storage
ThreatOrigin:
ThreatDescription: OS APIs provide access to device locations to properly store sensitve credentials. Improper storage of credentials could lead to unauthorized access or exposure.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile App Developer:
      - Follow best practices for storing sensitive material such as using short-live tokens and the AccountManager on Android and Keychain for iOS. [^227][^228]
      - To mitigate the risk associated with a stolen credential, use authentication protocols that generate unpredictable one-time cryptographic tokens that are replay-resistant (e.g. public key authentication, FIDO Alliance protocols)
    Mobile Device User:
      - Educate users that Oauth 2.0 style authorization request from native applications should only be made through external user-agents (system browser)
title: AUT-12
rawID: 12
---
