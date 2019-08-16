---
layout: threat
ThreatCategory: Mobile OS & Vendor Infrastructure
ID: ECO-2
Threat: Exploitation of cloud backups or other cloud file storage performed by individual mobile applications
ThreatOrigin: 'Mobile Security: Threats and Countermeasures [^90]'
ExploitExample: Q4 Mobile Security and Risk Review [^195]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To prevent sensitive app data from unknowingly being backed-up to unauthorized or unsecure cloud services, analyze app data storage practices as part of the app vetting process prior to authorizing apps for use.
      - To protect the confidentiality of app data backed-up to a cloud service, prefer the use of FedRAMP-certified cloud service providers to gain assurance that app data backed-up to the cloud is strongly encrypted.
      - To prevent an attacker from gaining access to app data backups via the cloud service account, enable two-factor or other strong authentication mechanisms.
      - To protect the confidentiality of app data backed-up to a cloud service, deploy MAM or MDM solutions in combinations with devices that successfully enforce a policy to strongly encrypt app data backed-up or synchronized to authorized cloud services.
      - To prevent sensitive app data from being backed-up to an untrusted cloud service, deploy MAM or MDM solutions in combination with devices that successfully enforce a policy that prohibits app data from being synchronized or backed-up to any cloud services.
    Mobile Device User:
      - To prevent an attacker from gaining access to app data backups via the cloud service account, enable two-factor or other strong authentication mechanisms.
title: ECO-2
rawID: 2
---
