---
layout: threat
ThreatCategory: Mobile Application Store
ID: ECO-22
Threat: Bypass or evasion of application security analysis or vetting techniques to sneak an app into the store
ThreatOrigin: Researchers Find Methods for Bypassing Google's Bouncer Android Security [^151]
ExploitExample:
  - Dissecting the Android Bouncer [^155]
  - Adventures in Bouncerland [^156]
  - Malware designed to take over cameras and record audio enters Google Play [^99]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Use app-vetting tools or services to determine that apps appear free of malicious behaviors or vulnerabilities prior to authorizing their use.
      - To decrease the time to detection for malicious apps, use app threat intelligence services to detect malicious apps installed on devices
      - Educate end users to scrutinize the permissions requested by apps, particularly if an updated version requests significantly different permissions than previous ones.
    Mobile Device User:
      - To decrease the time to detection for malicious apps on Android devices, use Android Verify Apps feature.
---
