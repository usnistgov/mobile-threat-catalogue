---
layout: threat
ThreatCategory: Vulnerable Applications
ID: APP-7
Threat: App exposes data or functionality to untrusted apps
ThreatDescription: Android apps can be designed to share data with other apps through a variety of mechanisms such as broadcast receivers, services, intents, and content providers. Some of these mechanisms permit the app developer to grant broader permissions to untrusted apps than intended. As a result, a malicious app may gain unauthorized access to sensitive functionality or data. The malicious app may further take advantage of the weak permission to exploit other vulnerabilities in the receiving app by sending it crafted input.
ThreatOrigin:
ExploitExample:
  - eBay for Android Content Provider Injection Vulnerability [^75]
  - Smishing Vulnerability in Multiple Android Platforms [^76]
  - Android SMS Spoofer [^77]
  - Content provider permission bypass allows malicious application to access data [^78]
CVEExample:
  - CVE-2016-2810
PossibleCountermeasures:
    Enterprise:
      - Use app-vetting tools or services to identify apps that expose functionality to untrusted apps.
      - Use personal/enterprise app separation features (e.g. Android for Work or Samsung KNOX Workspace) so that vulnerabilities in an enterprise app cannot be exploited by a personal app or vice versa.
title: APP-7
---
