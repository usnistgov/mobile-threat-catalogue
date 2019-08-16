---
layout: threat
ThreatCategory: 'Authentication: User to Device'
ID: AUT-2
Threat: PIN/password brute force
ThreatOrigin:
ExploitExample:
  - Black Box Brouhaha Breaks Out Over Brute Forcing of iPhone Pin Lock [^125]
  - The bumpy road towards iPhone 5c NAND mirroring [^243]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To directly increase the time required for a successful brute-force authentication attempt, increase the length, complexity, and randomness of device unlock codes, with a strong preference for a 'password' option that may contain letters (uppercase and lowercase), numbers, and special characters, rather than a simpler numeric PIN or (on Android devices) a geometric pattern.
      - To increase the time required to perform brute-force attacks, use mobile devices that incur incrementally increasing delays when the wrong unlock code is entered.
      - To reduce the likelihood of a successful brute-force user-to-device authentication attempt on a device, configure the device to wipe all device data after a preset number of consecutive failed unlock attempts (e.g., 10).
      - To reduce the opportunity for an attacker to conduct a brute-force authentication attack against the device, use strong physical security measures (e.g.,locking the device into a container) when not directly attended.
    Enterprise:
      - To prevent employees from accessing enterprise resources from devices with a weak device unlock code, deploy MDM or containerization solutions that enable device configuration policies that require the unlock code for enrolled devices to meet minimum length and complexity requirements prior to granting access to enterprise resources.
      - To increase the time required to perform brute-force attacks, use mobile devices that incur incrementally increasing delays when the wrong unlock code is entered.
title: AUT-2
rawID: 2
---
