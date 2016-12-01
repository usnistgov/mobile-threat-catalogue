---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-29
    Threat:
        - "Command-and-control using built-in encrypted channels such as Google Cloud Messaging or Apple Push Notification Service that will not stand out as unusual traffic."
        - "On Android, GCM can be used for two-way communication. On iOS, APNS can be used for one-way communication (server to device)."
    ThreatOrigin:
    ExploitExample:
        - "Mobile Malware Evolution: 2013 [^103]"
        - "DroydSeuss: A Mobile Banking Trojan Tracker [^104]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Disable access to notification or messaing services to apps for which such functions are not actually used.":
            - Mobile Device User
        "Use Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use app-vetting tools or services to identify remote access control apps that receive commands over notification or messaging serices or other communication channels.":
            - Enterprise
---
