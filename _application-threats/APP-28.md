---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-28
    Threat: "Encrypting, or preventing access to, user data (e.g. photos and similar files that are accessible to all installed apps) until a payment is made, or some other condition met (i.e., Ransomware)"
    ThreatOrigin:
    ExploitExample:
        - "New Android Trojan xBot Phishes Credit Cards and Bank Accounts, Encrypts Devices for Ransom [^96]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use application threat intelligence data about apps that maliciously encrypt user data.":
            - Enterprise
        "Use app-vetting tools or services to identify apps that maliciously encrypt user data.":
            - Enterprise
---
