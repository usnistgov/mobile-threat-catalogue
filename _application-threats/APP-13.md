---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-13
    Threat: "Gathering sensitive personal or enterprise information such as contact list, call log, calendar information by invoking standard operating system (e.g. Android or iOS) APIs."
    ThreatOrigin: "The Google Android Security Team's Classifications for Potentially Harmful Applications [^83]"
    ExploitExample:
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
