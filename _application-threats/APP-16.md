---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-16
    Threat: "Sending premium SMS messages without user authorization (i.e., SMS fraud)"
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
        - "zSone, RogueSPPush, GGTracker malware described in Dissecting Android Malware: Characterization and Evolution [^85]"
        - "Mkero: Android malware secretly subscribes victims to premium SMS services [^94]"
        - "Chinese Android botnet 'netting millions' [^95]"
    CVEExample:
        -
    PossibleCountermeasures:
        - "Ensure Android devices are running a recent version of Android, as starting in Android 4.2, user confirmation is needed before apps can send premium SMSs (source: https://source.android.com/security/enhancements/enhancements42.html)."
        - "Use Android Verify Apps feature to identify harmful apps."
        - "Perform application vetting to identify inappropriate behaviors by apps including permission requests made by the apps."
        - "Use application threat intelligence data about potential risks associated with apps installed on devices."
---
