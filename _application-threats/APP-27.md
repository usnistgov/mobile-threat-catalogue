---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-27
Threat: Persistance via Writing to System Partition
ThreatDescription: Malicious code that has achieved privilege escalation to the kernel or root user may achieve persistence by modifying memory locations reserved for use by the bootloader, mobile OS, or kernel to force the execution of malicious code following a device reboot or integrated factory reset.
ThreatOrigin:
ExploitExample:
  - 'Brain Test re-emerges: 13 apps found in Google Play [^102]'
CVEExample:
  - CVE-2016-10277
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Use application threat intelligence data about apps that may achieve malicious persistence
      - Use app-vetting tools or services to identify apps that exploit the underlying OS to achieve malicious persistence.
      - Deploy MDM solutions that require successful boot attestation prior to granting access to enterprise resources.
    Mobile Device User:
      - Use Android Verify Apps feature to identify potentially harmful apps.
    Mobile App Developer:
      - To avoid executing apps that process sensitve information while low-level malware is present on the device, perform device integrity checking within enterprise applications, such as use of Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies device integrity attestation API
title: APP-27
rawID: 27
---
