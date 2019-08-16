---
layout: threat
ThreatCategory: Physical Access
ID: PHY-4
Threat: Data loss via 3rd party temporary access to unattended and unlocked mobile device
ThreatOrigin: Eight Ways to Keep Your Smartphone Safe [^231]
ExploitExample: The Current State of Android Security [^234]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Enforce activation of the auto-lock feature of a mobile device with a maximum idle time that reduces the likelihood an attacker will gain physical access to the device in an unlocked state
      - Activate auto-lock features based on loss of proximity to a trusted, paired device attended by the mobile device user, such as a smart watch
      - Require additional user-to-app or user-to-service authentication for apps that provide access to sensitive data
      - Educate end-users of the importance of locking their device if they are leaving it unattended in an area lacking strong physical security controls.
    Mobile Device User:
      - Enforce activation of the auto-lock feature of a mobile device with a maximum idle time that reduces the likelihood an attacker will gain physical access to the device in an unlocked state
      - Activate auto-lock features based on loss of proximity to a trusted, paired device attended by the mobile device user, such as a smart watch
title: PHY-4
rawID: 4
---
