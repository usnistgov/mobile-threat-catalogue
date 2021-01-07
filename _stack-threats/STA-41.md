---
CVEExample:
  - CVE-2014-7259
  - CVE-2014-1566
  - CVE-2014-1969
ExploitExample:
  - 
ID: STA-41
PossibleCountermeasures:
    Mobile Device User:
      - Configure the mobile device to encrypt data stored on an attached SD card.
      - If sensitive data is to be stored on or processed by an SD card, use a distinct SD card for each security context (e.g. business and personal) to limit the potential for data leakage between them via common use of an attached SD card.
      - On Android devices running 5.0 or later, do not grant access to the SD card to untrusted apps.
      - Remove any attached SD card when not in use.
      - When not in use, secure SD cards storing sensitive data with strong physical security controls.
    Enterprise:
      - Deploy MAM or containerization solutions that support policies that can enforce strong encryption on any data stored on the SD card by trusted apps
      - Deploy MAM or containerization solutions that support policies that can restrict access to the SD card by untrusted apps.
      - Use app-vetting services to determine if any apps present in your mobile device deployment store data on or access an SD card in an untrusted manner so appropriate policies and controls can be established to mitigate those risks.
Threat: Unauthorized Disclosure of SD Card Data
ThreatCategory: SD Card
ThreatDescription: Unauthorized access to data stored on an attached SD card may have multiple causes. Vulnerabilities in the microcontroller integrated into the SD card itself may allow a crafted app to access arbitrary memory locations. Further, apps may store data on an attached SD card in locations readable by any app with permission to access an attached SD card. Additionally, as removable media, SD cards can be mounted to devices accessed by operating systems or applications that may ignore or explicitly bypass any security information (e.g. file permissions) applied to stored data.
ThreatOrigin: On Hacking MicroSD Cards [^248]
layout: threat
title: STA-41
rawID: 41
---
