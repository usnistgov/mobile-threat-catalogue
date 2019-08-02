---
layout: threat
ThreatCategory: Mobile Application Store
ID: ECO-15
Threat: App store compromise leading to distribution of private enterprise application to unauthorized parties
ThreatOrigin:
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Use solutions such as Google Play Private Channel or Apple's Developer Enterprise program to securely distribute private applications.
      - To limit the distribution of sensitive enterprise apps outside of authorized mobile devices, use MAM solutions to push private apps directly onto authorized and enrolled devices.
    Mobile App Developer:
      - To prevent the unauthorized disclosure of secrets within private enterprise apps, do not hardcode secrets, such as cryptographic keys, directly into private enterprise applications.
    Application Developer:
      - To prevent unauthorized access to private enterprise apps from further granting unauthorized access to sensitive data, require the user of a mobile app to pass strong authentication mechanisms prior to granting access to sensitive data.
title: ECO-15
---
