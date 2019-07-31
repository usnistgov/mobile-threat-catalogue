---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-12
    Threat: "Gathering device-identifying information for further attacks"
    ThreatDescription: "Persistent information that can be used to identify or characterize a specific mobile device in one or more contexts, such as IMEI, IMSI, MAC address, phone number, mobile OS, or installed apps, may be collected by a malicious or privacy-invasive app to facilitate future attacks. These values, particularly in combination, greatly increase potential for geo-physical or behavioral tracking, device fingerprinting, and impersonation attacks against the device or its user."
    ThreatOrigin: "The Google Android Security Team's Classifications for Potentially Harmful Applications [^83]"
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
