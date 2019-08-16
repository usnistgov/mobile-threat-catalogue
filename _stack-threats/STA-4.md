---
layout: threat
ThreatCategory: Mobile Operating System
ID: STA-4
Threat: Failure to properly authenticate operating system updates, enabling attackers to provide a malicious update.
ThreatOrigin: UAE cellular carrier rolls out spyware as a 3G update [^203]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Use EMM/MDM solutions in combination with devices that successfully enforce a policy to maintain a minimum OS patch level and block access to enterprise resources to non-compliant devices.
      - Purchase devices from vendors/carriers who have committed to providing timely updates or who have known track records for prompt updates.
      - Use EMM/MDM solutions in combination with other tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices that show indications of device compromise.
      - Prior to authorizing general users to install an upgrade to an untested and potentially malicious software update, evaluate the behavior of the update on test devices to determine if it appears to be free of malicious or vulnerable behaviors.
      - Use devices that require updates to be signed by the device vendor.
title: STA-4
rawID: 4
---
