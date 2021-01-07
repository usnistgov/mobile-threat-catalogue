---
layout: threat
ThreatCategory: Vulnerable Applications
ID: APP-2
Threat: Sensitive Information Exposure
ThreatDescription: Mobile OS APIs allow apps to share data with other apps, either by exposing specific services to other apps (e.g. Android intents) or by storing it to locations accessible to other apps. Sensitive information stored in commonly-accessible files/locations (e.g. OS-managed contacts list) or openly accessible through intents may be read or potentially modified by apps untrusted by the developer, which may lead to a loss of confidentiality, integrity, or availability of that data.
ThreatOrigin:
ExploitExample:
  - Vulnerability in Skype for Android [^67]
  - World Writable Code Is Bad, MMMMKAY [^68]
  - LOOK-11-001 something [^69]
CVEExample:
  - CVE-2011-1717
PossibleCountermeasures:
    Enterprise:
      - Use app-vetting tools or services to identify insecure storage of sensitive data.
      - Consider the use of devices that support Android 7.0 and later, which enables app-level encryption in addition to block-level encryption.
    Mobile Device User:
      - Consider the use of devices that support Android 7.0 and later, which enables app-level encryption in addition to block-level encryption.
title: APP-2
rawID: 2
---
