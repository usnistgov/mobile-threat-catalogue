---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-33
    Threat: "Malicious apps abusing operating system private APIs (typically on iOS) to gather sensitive data or perform unauthorized actions."
    ThreatOrigin: "Symantec Internet Security Threat Report 2016 [^110]"
    ExploitExample:
        - "YiSpecter: First iOS Malware That Attacks Non-jailbroken Apple iOS Devices by Abusing Private APIs [^43]"
        - "Jekyll on iOS: When Benign Apps Become Evil [^111]"
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Perform application vetting to identify inappropriate behaviors by apps including use of private APIs"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
---
