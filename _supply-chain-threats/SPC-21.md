---
layout: threat
ThreatCategory: Supply Chain
ID: SPC-21
Threat: Low-level Backdoor
ThreatOrigin:
  - This is what a root debug backdoor in a Linux kernel looks like [^207]
  - Chinese ARM vendor left developer backdoor in kernel for Android, other devices [^208]
ThreatDescription: Low level backdoor inadvertently left by firmware developer.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprises:
      - Obtain devices from a reputable vendor with a strong record of addressing security flaws in a timely fashion.
    Mobile Device User:
      - Obtain devices from a reputable vendor with a strong record of addressing security flaws in a timely fashion.
      - To reduce the opportunity for an attacker to exploit a patched vulnerability, ensure security updates are applied in a timely manner by configuring automated installation of or, at a minimum, automatic notification of the availability of security updates.
      - To reduce the opportunity for attacks against various firmware components, disable device features when not in use (e.g., Bluetooth, Wi-Fi, NFC), and globally revoke access to unused device sensors or OS-provided functions (e.g., camera, microphone, location services).
    Enterprise:
      - To reduce the opportunity for an attacker to exploit a patched vulnerability, ensure security updates are applied in a timely manner by configuring automated installation of or, at a minimum, automatic notification of the availability of security updates.
title: SPC-21
rawID: 21
---
