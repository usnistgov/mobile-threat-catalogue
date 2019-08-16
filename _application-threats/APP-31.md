---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-31
Threat: Malicious app impersonates a legitimate app
ThreatDescription: 3rd party apps may duplicate the appearance and interface of a legitimate app, such as a banking app, to trick the user into supplying authentication credentials or other sensitive information intended for the app being spoofed. This threat was facilitated on Android devices before 5.0, as a malicious app could determine if a target app was running in the foreground, then initiate an activity to gain focus and intercept credential entry by the user.
ThreatOrigin:
  - Phishing on Mobile Devices [^105]
  - Exploiting Androids for Fun and Profit [^106]
  - The Latest Android Overlay Malware Spreading via SMS Phishing in Europe [^107]
  - Password-Stealing Instagram App [^108]
  - Hackers Sneak Malware Into Apple App Store 'To Steal iCloud Passwords' [^109]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Consider the use of devices that support Android 5.0 and later, in which ActivityManager.getRunningTasks() has been modified to stop leaking information about the current foreground activity, increasing the difficulty of malicious apps being able to perform a user interface spoofing attack
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Use app-vetting tools or services to identify apps that attempt to spoof the interface to other apps or common web sites, such as banking sites.
    Mobile Device User:
      - Consider the use of devices that support Android 5.0 and later, in which ActivityManager.getRunningTasks() has been modified to stop leaking information about the current foreground activity, increasing the difficulty of malicious apps being able to perform a user interface spoofing attack
      - Use Android Verify Apps feature to identify potentially harmful apps.
title: APP-31
rawID: 31
---
