---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-29
Threat: Command-and-control messaging evades traffic analysis
ThreatDescription: Mobile OS offer built-in and encrypted communication channels that may appear to be normal traffic or occur out-of-band (over a cellular connection), thereby evading detection by Wi-Fi-based enterprise traffic analysis tools. Google offers Google Cloud Messaging (GCM) and newly, Firebase Cloud Messaging (FCM), which provides two-way communication. Apple offers the Apple Push Notification Service (APNS), which offers one-way communication from server-to-device. Both services are commonly used within mobile apps, which makes detecting abuse of these services difficult.
ThreatOrigin:
ExploitExample:
  - 'Mobile Malware Evolution: 2013 [^103]'
  - 'DroydSeuss: A Mobile Banking Trojan Tracker [^104]'
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Use app-vetting tools or services to identify remote access control apps that receive commands over notification or messaging serices or other communication channels.
    Mobile Device User:
      - Disable access to notification or messaing services to apps for which such functions are not actually used.
      - Use Verify Apps feature to identify potentially harmful apps.
title: APP-29
---
