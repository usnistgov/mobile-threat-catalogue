---
    layout: threat-new
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-14
    Threat: "Repackaging or impersonating a benign app, such as an online banking app, to contain malicious functionality (i.e., trojan)"
    ThreatOrigin:
        - "The Google Android Security Team's Classifications for Potentially Harmful Applications [^83]"
        - "Mobile Threat Protection: A Holistic Approach to Securing Mobile Data and Devices [^61]"
        - "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
        - "New Android Malware Family Evades Antivirus Detection by Using Popular Ad Libraries [^86]"
        - "Slembunk: An Evolving Android Trojan Family Targeting Users of Worldwide Banking Apps [^84]"
        - "Incident Response for Android and iOS [^87]"
        - "Cloned banking app stealing usernames sneaks into Google Play [^88]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the sideloading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use application threat intelligence data about potentially harmful apps installed on COPE or BYOD devices":
            - Enterprise
        "To reduce the ease of an attacker to abuse existing app functionality, only request access to the minimal set of shared data stores (e.g., contacts, calendar), OS services (e.g. location services), and device sensors (e.g. camera, microphone) necessary for the app to provide functionality.":
            - Mobile App Developer
---
