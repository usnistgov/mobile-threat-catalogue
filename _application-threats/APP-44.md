---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-44
Threat: Hiding Application Icon
ThreatDescription: Malware may hide its icon after installation, making detection by the user more difficult.
ThreatOrigin: Self-Hiding Behavior in Android Apps: Detection and Characterization [^310]
ExploitExample:
  - Android Trojan steals money from PayPal accounts even with 2FA on [^311]
  - Is Mobile Malware Playing Hide and Steal on Your Device? [^312]
CVEExample:
  - Not Applicable
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the sideloading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Perform application vetting to identify inappropriate behaviors by apps including permission requests made by the apps
    Mobile Device User:
      - Consider the use of devices that support Android 10.0 and later, in which getActivityList() was modified to limit the ability for apps to hide their launcher icons.
title: APP-44
rawID: 44
---
