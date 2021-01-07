---
layout: threat
ThreatCategory: Mobile Operating System
ID: STA-0
Threat: Privilege Escalation via Software Vulnerabilities
ThreatDescription: Privilege escalation vulnerabilities in the mobile OS, OS services, service libraries, or the OS kernel itself can allow an attacker to gain unauthorized access to sensitive data or execute arbitrary code from the privileged context to achieve any number of goals.
ThreatOrigin:
  - Internet Security Threat Report 2016 [^110]
  - 'Mobile Security: Threats and Countermeasures [^90]'
ExploitExample:
  - Zimperium Applauds Google's Rapid Response to Unpatched Kernel Exploit [^213]
  - Remote Code Execution as System User on Samsung Phones [^55]
CVEExample:
  - CVE-2010-2973
  - CVE-2016-4655
  - CVE-2016-4656
  - CVE-2017-0538
  - CVE-2017-0539
  - CVE-2017-0540
  - CVE-2017-0544
  - CVE-2017-0546
  - CVE-2017-0547
  - CVE-2017-0548
  - CVE-2017-0549
  - CVE-2017-0553
  - CVE-2017-0554
  - CVE-2017-0556
  - CVE-2017-0557
  - CVE-2017-0558
  - CVE-2017-0564
PossibleCountermeasures:
    Enterprise:
      - To reduce the risk to enterprise resources being accessed from vulnerable devices, deploy EMM/MDM solutions that can successfully enforce policies to monitor the OS version of devices and block enterprise connectivity from out-of-date devices or those with known-exploitable privilege escalation vulnerabilities.
      - To help reduce the latency between exploit notification and patch availability, purchase devices from vendors/carriers who have committed to providing timely updates or who have known track records for prompt updates.
      - To help reduce the opportunity for attack following availability of patches, configure automatic installation of, or, at a minimum, automatic notification of the availability of mobile OS security updates.
      - Use tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices that fail attestation or integrity checks.
      - Disable components with known vulnerabilities (e.g. disable MMS, Bluetooth, etc.) until the vulnerability is patched to prevent exploitation.
    Mobile Device User:
      - To help reduce the opportunity for attack following availability of patches, configure automatic installation of, or, at a minimum, automatic notification of the availability of mobile OS security updates.
      - Disable components with known vulnerabilities (e.g. disable MMS, Bluetooth, etc.) until the vulnerability is patched to prevent exploitation.
title: STA-0
rawID: 0
---
