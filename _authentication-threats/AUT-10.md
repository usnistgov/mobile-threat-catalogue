---
layout: threat
ThreatCategory: 'Authentication: User or Device to Remote Service'
ID: AUT-10
Threat: Capturing Credentials
ThreatOrigin: OAuth 2.0 for Native Apps [^141]
ThreatDescription: Malicious applications can intercept and steal passwords when logging in using webpages rendered within applications.
ExploitExample: Stealing Passwords is Easy in Native Mobile Apps Despite OAuth [^140]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Use app-vetting tools or services to identify malicious behaviors in apps.
title: AUT-10
rawID: 10
---
