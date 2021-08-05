---
layout: threat
ThreatCategory: Physical Access
ID: PHY-0
Threat: Device Loss or Theft
ThreatOrigin: FAQ on Lost/Stolen Devices [^230]
ThreatDescription: Lost or stolen mobile devices gives an adversary unhindered access to the device, and if there's an insecure or no PIN in place, access to the data on the device as well.
ExploitExample:
  - 'Phone Theft in America: What really happens when your phone gets grabbed [^225]'
  - Smartphone thefts drop as kill switch usage grows [^226]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To prevent accidental loss of a device, pair it with another device, such as a smart watch, capable of alerting the user to separation from the device, or quickly triggering mechanisms to help the user locate it.
      - To prevent theft of a device, closely attend the device at all times, and if leaving it unattended, apply strong physical security measures (e.g., lock it into a secure container).
      - To mitigate the impact of a lost or stolen device in the possession of an attacker, use remote lock, activation lock, locate, or wipe capabilities as deemed appropriate based on the sensitivity of data stored on or capabilities of the device.
    Enterprise:
      - To mitigate the impact of a lost or stolen device in the possession of an attacker, use remote lock, activation lock, locate, or wipe capabilities as deemed appropriate based on the sensitivity of data stored on or capabilities of the device.
title: PHY-0
rawID: 0
---
