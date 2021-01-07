---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-14
Threat: Masquerade as Legitimate Application
ThreatDescription: Like well-behaved apps, a trojan app offers some functionality to the user, though a trojan also includes hidden functionality that is malicious or otherwise undesirable. One technique for deploying trojan functionality is to obtain the install packages for a legitimate app, decompile/disassemble it, introduce the trojan, and then generate a new install package. The app will appear to a user to be the legitimate app. Distribution of trojans is commonly achieved by submission to open 3rd party app stores or social engineering attacks claiming to offer users the app with incentives (lower cost, free, extras unlocked, etc.).
ThreatOrigin:
  - The Google Android Security Team's Classifications for Potentially Harmful Applications [^83]
  - 'Mobile Threat Protection: A Holistic Approach to Securing Mobile Data and Devices [^61]'
  - 'Dissecting Android Malware: Characterization and Evolution [^85]'
ExploitExample:
  - New Android Malware Family Evades Antivirus Detection by Using Popular Ad Libraries [^86]
  - 'Slembunk: An Evolving Android Trojan Family Targeting Users of Worldwide Banking Apps [^84]'
  - Incident Response for Android and iOS [^87]
  - Cloned banking app stealing usernames sneaks into Google Play [^88]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the sideloading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Use application threat intelligence data about potentially harmful apps installed on COPE or BYOD devices
    Mobile Device User:
      - Use Android Verify Apps feature to identify potentially harmful apps.
    Mobile App Developer:
      - To reduce the ease of an attacker to abuse existing app functionality, only request access to the minimal set of shared data stores (e.g., contacts, calendar), OS services (e.g. location services), and device sensors (e.g. camera, microphone) necessary for the app to provide functionality.
title: APP-14
rawID: 14
---
