---
layout: threat
ThreatCategory: Mobile OS & Vendor Infrastructure
ID: ECO-7
Threat: Zombie Applications
ThreatDescription: When an application is removed from an app store, the app is not removed from devices that it is installed on. This can present a threat when the removed application is malicious, and therefore allowed to continue running on infected devices. The applications still present on mobile devices are referred to as "zombie applications".
ThreatOrigin: The State of the Mobile Ecosystem, Appthority Unveils New Security Research at Black Hat [^199]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To reduce the time to detection, use app threat intelligence services to detect malicious or vulnerable apps installed on devices.
      - To reduce the risk of malicious behaviors or exploitation of vulnerable apps, deploy MDM or MAM solutions that successfully enforce policies restricting access to enterprise resources for devices running untrusted and unsupported versions of apps.
    Mobile Device User:
      - To detect malicious or vulnerable apps installed on Android devices, use the Android Verify Apps feature.
title: ECO-7
rawID: 7
---
