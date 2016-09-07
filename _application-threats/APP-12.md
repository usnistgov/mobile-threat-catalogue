---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-12
    Threat: "Gathering device information potentially used for further attacks, such as persistent identifiers (phone number, IMEI, IMSI, MAC addresses), operating system and device hardware information, or list of installed applications (i.e., data collection)"
    ThreatOrigin: "The Google Android Security Team''s Classifications for Potentially Harmful Applications [^83]"
    ExploitExample:
        - "Slembunk: An Evolving Android Trojan Family [^84]"
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Perform application vetting to identify inappropriate behaviors by apps including permission requests made by the apps"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
---
