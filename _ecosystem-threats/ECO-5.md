---
layout: threat
ThreatCategory: Mobile OS & Vendor Infrastructure
ID: ECO-5
Threat: Exploit Remote Management Services
ThreatOrigin:
ThreatDescription: If adversaries are able to exploit cloud services that can control devices remotely, they can take advantage of this to track, locate, or wipe devices (e.g. Apple's Find My iPhone).
ExploitExample: How Apple and Amazon Security Flaws Led To My Epic Hacking [^197]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To prevent an attacker from gaining unauthorized access to sensitive functionality (e.g., locating or wiping a device associated with the account), enable two-factor or other strong authentication methods for user accounts on Google, Apple, or other device management and tracking services.
      - To detect unauthorized access to user accounts, use features from Google or others to periodically analyze account activity for suspicious logins.
    Enterprise:
      - To prevent an attacker from gaining unauthorized access to sensitive functionality (e.g., locating or wiping a device associated with the account), enable two-factor or other strong authentication methods for user accounts on Google, Apple, or other device management and tracking services.
      - To detect unauthorized access to user accounts, use features from Google or others to periodically analyze account activity for suspicious logins.
title: ECO-5
rawID: 5
---
