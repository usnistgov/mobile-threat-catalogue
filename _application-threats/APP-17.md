---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-17
    Threat: "Captured text messages received without user authorization, for example to obtain authentication codes sent as part of multi-factor authentication"
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
        - "New Android Trojan xBot Phishes Credit Cards and Bank Accounts, Encrypts Devices for Ransom [^96]"
        - "How Anywhere Computing Just Killed Your Phone-Based Two-Factor Authentication [^97]"
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Perform application vetting to identify inappropriate behaviors by apps including permission requests made by the apps"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
---
