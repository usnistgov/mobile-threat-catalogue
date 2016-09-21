---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-24
    Threat: "Surreptitiously reporting the physical location (e.g. using GPS or other means) of the device through programmatic means by invoking standard APIs."
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Perform application vetting to identify inappropriate behaviors by apps including permission requests made by the apps for access to the device's physical location"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
---
