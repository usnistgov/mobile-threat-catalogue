---
layout: threat
ThreatCategory: Mobile OS & Vendor Infrastructure
ID: ECO-4
Threat: Remote App Installation Exploit
ThreatDescription: Remote installation capabilities of app stores can be exploited to install malicious apps on mobile devices.
ThreatOrigin: Symantec Internet Security Threat Report 2016 [^110]
ExploitExample:
  - How I Almost Won Pwn2Own via XSS [^200]
  - How Anywhere Computing Just Killed Your Phone-Based Two-Factor Authentication [^201]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To prevent an attacker from gaining unauthorized access to remote installation functionality, enable two-factor or other strong authentication methods for user accounts on app stores.
      - To detect unauthorized activity, including remote installation of apps, use features from Google or others to periodically analyze account activity for suspicious logins.
    Enterprise:
      - To prevent an attacker from gaining unauthorized access to remote installation functionality, enable two-factor or other strong authentication methods for user accounts on app stores.
      - To detect unauthorized activity, including remote installation of apps, use features from Google or others to periodically analyze account activity for suspicious logins.
      - Deploy a combination of MDM, MAM, or container solutions and mobile devices that successfully enforce policies (e.g., whitelisting) that prevent unauthorized applications from being installed to managed areas of the device.
      - To reduce the time to detection of malicious applications, use app threat intelligence services to identify malicious apps installed on devices.
title: ECO-4
rawID: 4
---
