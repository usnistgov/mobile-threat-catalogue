---
layout: threat
ThreatCategory: 'Authentication: User to Device'
ID: AUT-4
Threat: Inferring PIN/password from Screen Smudges
ThreatOrigin: Smudge Attacks on Smartphone Touch Screens [^124]
ThreatDescription: Typical device usage scenarios result in fingerprints and smudges being left on the screen of a mobile device. Repeated taps to the same location on the screen may be discernable due to the clustering and build-up of similar prints, potentially allowing an attacker to infer some or all of the numbers or characters that appear in a device unlock PIN or password. This greatly facilitates an educated brute-force attack against the device unlock PIN or passcode, particularly when combined with similar attacks, such as recording events of device unlock by the a user.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To increase the difficulty in successfully inferring the authentication credential, increase the minimum length and complexity of PINs, passwords, or other authentication credentials.
      - To reduce the window of opporuntity during which an attacker can use an inferred authentication credential, reduce the maximum lifetime of authentication credentials.
      - Use devices and applications that support biometric authentication methods (e.g. facial recognition, voice print), which do not result in direct physical evidence of authentication data being left on the device for later analysis.
    Mobile Device User:
      - To increase the difficulty in successfully inferring the authentication credential, increase the minimum length and complexity of PINs, passwords, or other authentication credentials.
      - To reduce the window of opporuntity during which an attacker can use an inferred authentication credential, reduce the maximum lifetime of authentication credentials.
      - To limit the amount of data available to an attacker conducting a screen smudge inferrence attack, clean the screen of the device often, particularly when leaving the device directly unattended.
      - To limit the amount of authentication data available to the attacker (e.g. size, and number of smudges), enter device unlock codes and passwords using a stylus on (ideally) a clean device screen.
      - Use devices and applications that support biometric authentication methods (e.g. facial recognition, voice print), which do not result in direct physical evidence of authentication data being left on the device for later analysis.
      - To limit the window of opportunity for an attacker to conduct a screen smudge inferrence attack, physically secure the device when it is being left directly unattended.
    Mobile OS Developer:
      - To increase the difficulty of visual or sensor-based inference attacks on entries by the on-screen keyboard, a randomized keyboard layout for PIN or password entry could be implemented as a feature of the mobile OS.
title: AUT-4
rawID: 4
---
