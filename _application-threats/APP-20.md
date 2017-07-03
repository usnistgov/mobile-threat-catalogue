---
    layout: threat-new
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
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use application threat intelligence data about potential abuse of dynamic code execution associated with apps installed on COPE or BYOD devices":
            - Enterprise

---
