---
    layout: threat-new
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-13
    Threat: "Gathering sensitive information vis OS APIs"
    ThreatDescription: "Apps may be granted permission, by the user or by default, access common data stores provided by the mobile OS. Common stores are contacts lists, call history, calendar, notes, or app clipboard. When apps used in differing personal and enterprise contexts have access to these stores, they may contain co-mingled personal and enterprise data. A malicious or invasive app granted access to these locations can collect any sensitive data stored there, likely with an intent to exfiltrate it to the attacker."
    ThreatOrigin: "The Google Android Security Team's Classifications for Potentially Harmful Applications [^83]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the sideloading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that may violate privacy.":
            - Mobile Device User
        "Perform application vetting to identify privacy-invasive behaviors by apps.":
            - Enterprise
        "Use application threat intelligence data about potential privacy risks associated with apps installed on devices":
            - Enterprise
        "Use features such as Apple iOS Managed Apps, Android for Work, or Samsung KNOX Workspace that provide additional separation between personal apps and enterprise apps to mitigate the leakage of private information between work/personal contexts.":
            - Enterprise
        "Only request access to the minimal set of shared data stores (e.g., contacts, calendar), OS services (e.g. location services), and device sensors (e.g. camera, microphone) necessary for the app to provide functionality.":
            - Mobile App Developer
        "Only collect the minimal set of device or user data necessary for the app to provide functionality.":
            - Mobile App Developer
---
