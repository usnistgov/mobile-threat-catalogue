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
    - CVE-2017-0598
    - CVE-2017-0602
    - CVE-2017-7003
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that appear to abuse the OS API to gather sensitive data.":
            - Mobile Device User
        "Use application threat intelligence data about potential data collection risks associated with apps installed on COPE or BYOD devices":
            - Enterprise
        "Use app-vetting tools or services to identify apps that appear to abuse the OS API to gather sensitive data.":
            - Enterprise
        "To avoid inadvertent detection as a harmful app, review current developer documentation for the supporting OS and always use the recommended API calls to deliver app functionality.":
            - Mobile App Developer
---
