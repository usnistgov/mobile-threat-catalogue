---
layout: threat
ThreatCategory: Mobile Operating System
ID: STA-3
Threat: Arbitrary code execution via a maliciously crafted file (e.g. graphic, audio, font, x509 certificate)
ThreatDescription: Vulnerabilities in how various file types are handled by any software running on a mobile device (e.g. mobile apps, mobile OS, native or 3rd party software libraries, device drivers, mobile OS kernel) may allow an attacker to craft a malicous file that when processed, results in code execution in the context of the vulnerable component.
ThreatOrigin:
ExploitExample: TALOS Vulnerability Report [^215]
CVEExample:
  - CVE-2016-4637
  - CVE-2017-2379
  - CVE-2017-2406
  - CVE-2017-2407
  - CVE-2017-2416
  - CVE-2017-2430
  - CVE-2017-2432
  - CVE-2017-2435
  - CVE-2017-2462
  - CVE-2017-2467
  - CVE-2017-2485
  - CVE-2017-2487
PossibleCountermeasures:
    Enterprise:
      - To reduce the probability of this variety of attack, configure devices to automatically install or, at a minimum, notify users of the availability of security updates for the mobile OS, drivers, and installed apps.
      - To minimize the latency between exploit notification and the availability of security fixes, choose devices that have a reputation for providing security patches in a timely fashion.
      - To minimize opportunity for this attack under a known exploit, use email filtering technologies to block attachments from untrusted domains to contain suspect file types.
      - To prevent exploitation of this variety of attack under a known exploit, educate users to be suspicious of the file types in question, and when possible, avoid opening them on vulnerable devices.
      - To minimize the risk of access from compromised devices, use EMM/MDM solutions in combination with devices that successfully enforce policies to block access to enterprise resources for vulnerable devices.
    Mobile Device User:
      - To reduce the probability of this variety of attack, configure devices to automatically install or, at a minimum, notify users of the availability of security updates for the mobile OS, drivers, and installed apps.
---
