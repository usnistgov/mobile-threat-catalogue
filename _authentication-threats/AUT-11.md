---
layout: threat
ThreatCategory: 'Authentication: User or Device to Remote Service'
ID: AUT-11
Threat: Authentication credentials (e.g. token or private key) stolen from device
ThreatOrigin: Mobile Top 10 2016 [^9]
ExploitExample: Serious OS X and iOS Flaws Let Hackers Steal Keychain, 1Password Contents [^130]
CVEExample:
PossibleCountermeasures:
    Mobile App Developer:
      - When creating files, named sockets, or similar resources statically-defined (i.e., predictable by an attacker), verify that the resource does not already exist. If it does, cease execution and exit the app with an error that prompts the user to take action.
    Enterprise:
      - Use app-vetting tools or services to identify malicious apps that exploit cross-application resource attacks.
---
