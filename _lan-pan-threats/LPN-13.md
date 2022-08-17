---
layout: threat
ThreatCategory: 'Network Threats: NFC'
ID: LPN-13
Threat: Malicious NFC tags
ThreatOrigin: NFC Threat Landscape [^33]
ThreatDescription: Malicious NFC tags can be created that redirect the user to a malicious website or application, which can install malware on the target device.
ExploitExample: Near field communication (NFC) technology, vulnerabilities and principal attack schema [^34]
CVEExample: CVE-2016-3761
PossibleCountermeasures:
    Mobile Device User:
      - 'Use devices with NFC features and apps that explicitly request user authorization prior to following URLs or executing potentially harmful instructions on the device. See __QR Codes and NFC Chips: Preview-and-Authorize Should be Default__ [^39]'
      - To reduce the opportunity for this attack, disable NFC when that feature is not in use.
      - To further reduce the opportunity for this attack, protect the device from malicious signals using a NFC-blocking case when that features is not in use.
title: LPN-13
rawID: 13
---
