---
    layout: threat
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
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores."
        - "Use Android Verify Apps feature to identify harmful apps."
        - "Perform application vetting to identify inappropriate behaviors by apps including permission requests made by the apps."
        - "Use application threat intelligence data about potential risks associated with apps installed on devices."
        - "Use features such as Apple iOS Managed Apps, Android for Work, or Samsung KNOX Workspace that provide some level of separation between personal apps and enterprise apps to mitigate the impact of malicious behaviors."
---
