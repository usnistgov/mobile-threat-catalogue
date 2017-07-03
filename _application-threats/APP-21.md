---
    layout: threat-new
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-21
    Threat: "Embedding malicious code within app in encrypted or obfuscated form, then decrypting or deobfuscating and executing at runtime to evade app vetting"
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Use app-vetting tools or services to identify untrusted apps that contain encrypted or obfuscated code.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use application threat intelligence data about apps that contain encrypted or obfuscated code":
            - Enterprise
        "To mitigate your app being detected as potentially malicious, do not arbitrarily encrypt or obfuscate code.":
            - Mobile App Developer
---
