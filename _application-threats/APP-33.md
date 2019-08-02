---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-33
Threat: App bypasses access controls on OS-private functions
ThreatDescription: Mobile OS generally have two APIs - an external API that is available to public developers, and a private API that is restricted to the OS and built-in applications. Access control mechanisms implemented at the OS level may have vulnerabilities that allow 3rd party apps to successfully execute private API functions. Mobile OS app stores have since improved detection of a direct attempt by an app to call a private OS function.
ThreatOrigin: Symantec Internet Security Threat Report 2016 [^110]
ExploitExample:
  - 'YiSpecter: First iOS Malware That Attacks Non-jailbroken Apple iOS Devices by Abusing Private APIs [^43]'
  - 'Jekyll on iOS: When Benign Apps Become Evil [^111]'
CVEExample:
  - CVE-2017-0598
  - CVE-2017-0602
  - CVE-2017-7003
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Use application threat intelligence data about potential data collection risks associated with apps installed on COPE or BYOD devices
      - Use app-vetting tools or services to identify apps that appear to abuse the OS API to gather sensitive data.
    Mobile Device User:
      - Use Android Verify Apps feature to identify apps that appear to abuse the OS API to gather sensitive data.
    Mobile App Developer:
      - To avoid inadvertent detection as a harmful app, review current developer documentation for the supporting OS and always use the recommended API calls to deliver app functionality.
title: APP-33
---
