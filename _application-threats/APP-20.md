---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-20
    Threat: "Downloading and executing dynamic code after installation to evade app vetting / app store review."
    ThreatOrigin:
        - "Execute This! Analyzing Unsafe and Malicious Dynamic Code Loading in Android Applications [^240]"
        - "Jekyll on iOS: When Benign Apps Become Evil [^111]"
    ExploitExample:
        - "Android Hax [^100]"
        - "Hot or Not? The Benefits and Risks of iOS Remote Hot Patching [^241]"
        - "Method Swizzling [^242]"
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Perform application vetting to identify potentially inappropriate behaviors by apps including dynamic code execution practices"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
---
