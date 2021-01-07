---
layout: threat
ThreatCategory: Mobile Application Store
ID: ECO-21
Threat: Distributing URLs Pointing to Malicious Applications
ThreatDescription: A popular method of distributing links to malicious applications is direct links to the application files. These links can be distributed over several channels, including QR codes, NFC tags, and SMS messages.
ThreatOrigin: How to Protect Yourself From Malicious QR Codes [^149]
ExploitExample:
  - Find and Call app becomes first trojan to appear on iOS App Store [^154]
  - An investigation of Chrysaor Malware on Android [^AndroidWebBlog-1]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To prevent the installation of malicious applications, prohibit sideloading of apps and the use of unauthorized app stores
      - To decrease the time to detection, use app threat intelligence data to identify malicious applications installed on devices.
      - Use features such as Apple iOS Managed Apps, Android for Work, or Samsung KNOX Workspace that provide additional separation between personal apps and enterprise apps to mitigate the impact of malicious behaviors.
      - Educate users about the risks of activating links in emails or SMS messages, and instead encourage users to identify the app where hosted by an official app store.
title: ECO-21
rawID: 21
---
