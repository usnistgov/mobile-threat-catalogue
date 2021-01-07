---
layout: threat
ThreatCategory: 'Authentication: User or Device to Remote Service'
ID: AUT-11
Threat: Stolen Credentials
ThreatOrigin: Mobile Top 10 2016 [^9]
ThreatDescription: Vulnerabilities in applications may allow attackers to steal credentials from a device either remotely or with physical access.
ExploitExample: Serious OS X and iOS Flaws Let Hackers Steal Keychain, 1Password Contents [^130]
CVEExample:
PossibleCountermeasures:
    Mobile App Developer:
      - When creating files, named sockets, or similar resources statically-defined (i.e., predictable by an attacker), verify that the resource does not already exist. If it does, cease execution and exit the app with an error that prompts the user to take action.
    Enterprise:
      - Use app-vetting tools or services to identify malicious apps that exploit cross-application resource attacks.
title: AUT-11
rawID: 11
---
