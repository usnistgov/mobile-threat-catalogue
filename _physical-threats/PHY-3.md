---
layout: threat
ThreatCategory: Physical Access
ID: PHY-3
Threat: Unauthorized Access via Poor Lifecycle Management
ThreatOrigin: BYOD & Mobile Security [^146]
ThreatDescription: Discarded devices may not be properly erased, potentially exposing the data to anyone that has access to the device after disposal.
ExploitExample: Who's Got Your Old Phone's Data? [^233]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Use EMM or MDM solutions in combination with devices that successfully enforce data encryption and device lock policies (unlock code set, unlock code strength requirements, auto-locking enabled, and auto-wipe enabled) such that the recovery of data from an improperly retired device becomes highly improbable.
      - Consider devices containing storage media that successfully implement secure-erase functions such that initiating a device wipe or factory reset is sufficient to render the recovery of any wiped data infeasible.
title: PHY-3
rawID: 3
---
