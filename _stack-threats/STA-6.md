---
layout: threat
ThreatCategory: Mobile Operating System
ID: STA-6
Threat: Malicious Apps Installed via USB
ThreatOrigin:
  - Mobile Iron Q4 Mobile Security and Risk Review [^195]
  - Government Mobile and Wireless Security Baseline [^204]
ThreatDescription: When connected through USB, potentially malicious applications can be installed on the mobile device, sometimes without the user's knowledge.
ExploitExample: Injecting Malware into iOS Devices via Malicious Chargers [^217]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To reduce the probability of this attack, follow general best practices for securing systems to which a trusted mobile device may synchronize or access debugging functionality. For example, ensure the OS and applications maintain current security updates, endpoint protection software is installed, and systems are monitored for anomalous behavior.
      - Consider use of Android 4.2.2 or later devices. In Android 4.2.2, connections to ADB are authenticated with an RSA keypair. This prevents unauthorized use of ADB where the attacker has physical access to a device. [^220]
      - Consider the use of Android 6.0 or later, in which users must confirm to allow USB access to files, storage, or other functionality on the phone. The default behavior permits charging only. [^221]
      - Consider the use of iOS 7.x or later, in which synchronization with a computer over USB that requires the device be unlocked and the user confirm an explicit trust request. Failure to establish trust permits charging only.
      - Provide extra device chargers to users that plug directly into an electrical socket and encourage users to use them instead of plugging into potentially malicious USB charging stations or USB ports on potentially infected computers.
    Mobile Device User:
      - To prevent some varities of this attack, ensure ADB debugging is disabled.
      - To reduce the probability of this attack, do not accept prompts to trust untrusted systems.
      - Consider use of Android 4.2.2 or later devices. In Android 4.2.2, connections to ADB are authenticated with an RSA keypair. This prevents unauthorized use of ADB where the attacker has physical access to a device. [^220]
      - Consider the use of Android 6.0 or later, in which users must confirm to allow USB access to files, storage, or other functionality on the phone. The default behavior permits charging only. [^221]
      - Consider the use of iOS 7.x or later, in which synchronization with a computer over USB that requires the device be unlocked and the user confirm an explicit trust request. Failure to establish trust permits charging only.
      - Provide extra device chargers to users that plug directly into an electrical socket and encourage users to use them instead of plugging into potentially malicious USB charging stations or USB ports on potentially infected computers.
title: STA-6
rawID: 6
---
