---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-21
    Threat: "Embedding malicious code within app in encrypted or obfuscated form, then decrypting or deobfuscating and executing at runtime to evade app vetting"
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Perform application vetting to identify potentially inappropriate behaviors by apps including dynamic code execution or reflection practices"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
---
