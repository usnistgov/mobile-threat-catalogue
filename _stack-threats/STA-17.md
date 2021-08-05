---
layout: threat
ThreatCategory: Boot firmware
ID: STA-17
Threat: Operating System Downgrade
ThreatOrigin:
ThreatDescription: Downgrading the phone's operating system may expose the device to previously patched security vulnerabilities.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Use EMM/MDM solutions in combination with devices that can detect mobile OS verions and successfully block access to enterprise resources from devices running unapproved OS versions.
      - Consider the use of iOS devices; to prevent devices from being downgraded to older versions that lack the latest security updates, iOS uses a process called System Software Authorization. [^54]
title: STA-17
rawID: 17
---
