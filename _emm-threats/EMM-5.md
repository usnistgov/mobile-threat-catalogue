---
layout: threat
ThreatCategory: Enterprise Mobility
ID: EMM-5
Threat: A compromised or rooted device bypasses root/jailbreak or other compliance checks
ThreatDescription: Root and jailbreak detection for mobile devices is based on detecting the changes that a process by which a mobile device was compromised would have caused. For instance, creation of files or directories that do not exist on uncompromised devices. Given the diversity of mobile devices, mobile OSs, the varying methods of compromise, and the potential for an attacker to intercept and forge acceptable responses to checks for such changes, root detection continues to be an area of challenge.
ThreatOrigin: 'All Your Root Checks Are Belong to Us: The Sad State of Root Detection [^5]'
ExploitExample:
CVEExample: CVE-2017-4895 [^AirWatch-1]
PossibleCountermeasures:
    Enterprise:
      - To increase the potential that device root or jail-break is detected, deploy a variety of mechanisms capable of root or jail-break detection (e.g., on-device agents, apps that require successful boot attestation checks, manual inspection)
      - To reduce the opportunity for an attacker to locally root or jail-break devices, educate users on the importance of physically securing their devices (e.g., locking it into a container) when not directly attended.
      - To reduce the potential a given root or jail-break attack will succeed, ensure devices are configured with a strong device unlock code.
    Mobile Device User:
      - To reduce the potential for USB-based root or jail-break exploits, do not accept prompts to grant trust when connecting to untrusted computers or charging stations.
---
