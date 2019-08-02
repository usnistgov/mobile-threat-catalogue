---
layout: threat
ThreatCategory: 'Authentication: User or Device to Remote Service'
ID: AUT-8
Threat: Man-in-the-middle network attacker substitutes malicious web site that captures credentials
ThreatOrigin: Man-in-the-Middle Attack [^136]
ExploitExample: Using spoofed Wi-Fi to attack mobile devices [^20]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To prevent captured authentication credentials from enabling persistent access to sensitive services, configure them with authentication methods that use unpredictable one-time cryptographic tokens that are replay-resistant (e.g. public key authentication, FIDO Alliance protocols, pre-shared access codes).
    Mobile Device User:
      - To limit the usefulness of captured passwords, do not use the same password or derivations thereof to authenticate to multiple services.
      - To increase the difficulty of establishing a MiTM attack on a given wireless access session in which authentication credentials are exchanged, avoid authenticating to sensitive remote services over untrusted Wi-Fi networks.
title: AUT-8
---
