---
layout: threat
ThreatCategory: Physical Access
ID: PHY-3
Threat: Unauthorized access to device data resulting from poor lifecycle management.
ThreatOrigin: BYOD & Mobile Security [^146]
ExploitExample: Who's Got Your Old Phone's Data? [^233]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Use EMM or MDM solutions in combination with devices that successfully enforce data encryption and device lock policies (unlock code set, unlock code strength requirements, auto-locking enabled, and auto-wipe enabled) such that the recovery of data from an improperly retired device becomes highly improbable.
      - Consider devices containing storage media that successfully implement secure-erase functions such that initiating a device wipe or factory reset is sufficient to render the recovery of any wiped data infeasible.
title: PHY-3
---
