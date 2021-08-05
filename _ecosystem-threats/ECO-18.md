---
layout: threat
ThreatCategory: Mobile Application Store
ID: ECO-18
Threat: Remove App From App Store
ThreatDescription: App developer's credentials typically have permission to push app updates to the respective app store. If these credentials are somehow obtained by an attacker, they could remove any applications that the developer has published.
ThreatOrigin: 'Keep out hijackers: Secure your app store dev account [^150]'
ExploitExample: Major security hole allows Apple passwords to be reset with only email address, date of birth (update) [^152]
CVEExample:
PossibleCountermeasures:
    Mobile App Developer:
      - To reduce the potential for an attacker to impersonate you to official apps stores, follow best practices to protect your developer accounts, such as using multi-factor authentication. [^159] [^160]
title: ECO-18
rawID: 18
---
