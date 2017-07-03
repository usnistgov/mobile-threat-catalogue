---
    layout: threat-new
    ThreatCategory: Vulnerable Applications
    ID: APP-12
    Threat: "Gathering device information potentially used for further attacks, such as persistent identifiers (phone number, IMEI, IMSI, MAC addresses), operating system and device hardware information, or list of installed applications (i.e., data collection)"
    ThreatOrigin: "The Google Android Security Team\'s Classifications for Potentially Harmful Applications [^83]"
    ExploitExample:
        - "Slembunk: An Evolving Android Trojan Family [^84]"
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the sideloading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that may abuse permissions to perform data collection.":
            - Mobile Device User
        "Perform application vetting to identify inappropriate behaviors by apps including permission requests made by the apps":
            - Enterprise
        "Use application threat intelligence data about potential data collection risks associated with apps installed on devices":
            - Enterprise
---
