---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-7
    Threat: "Applications that have been removed by app stores (for example, due to security vulnerabilities or harmful behaviors) but are still present on mobile devices (e.g. zombie apps) "
    ThreatOrigin: "The State of the Mobile Ecosystem, Appthority Unveils New Security Research at Black Hat [^199]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "To reduce the time to detection, use app threat intelligence services to detect malicious or vulnerable apps installed on devices.":
            - Enterprise
        "To reduce the risk of malicious behaviors or exploitation of vulnerable apps, deploy MDM or MAM solutions that successfully enforce policies restricting access to enterprise resources for devices running untrusted and unsupported versions of apps.":
            - Enterprise
        "To detect malicious or vulnerable apps installed on Android devices, use the Android Verify Apps feature.":
            - Mobile Device User
---
