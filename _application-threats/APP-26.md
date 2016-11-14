---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-26
    Threat: "Escalating privileges on device using OS or other lower-level vulnerability to perform a malicious action or obtain a persistent presence"
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use application threat intelligence data to identify apps that exploit the OS to achieve privilege escalation.":
            - Enterprise
        "Use app-vetting tools or services to identify apps that exploit the OS to achieve privilege escalation.":
            - Enterprise
---
