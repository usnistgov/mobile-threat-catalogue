---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-32
    Threat: "Malicious app exploits device access to enterprise resources"
    ThreatDescription: "Any device-wide communication channels, such as an encrypted enterprise Wi-Fi connection, may be accessible to all apps running on the device. This may allow an attacker to bypass some network defense mechanisms, such as network access control or firewalls, thereby facilitating attacks against enterprise resources from within the enterprise network."
    ThreatOrigin:
    ExploitExample:
        - "Juniper Networks Third Annual Mobile Threats Report [^236]"
    CVEExample:
    - CVE-2016-10292
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful.":
            - Mobile Device User
        "Use app-vetting tools or services to identify apps that perform host discovery or attempt to access hosts with internal (e.g. inside a private LAN) domains or IP addresses.":
            - Enterprise
        "Use features such as Apple iOS Managed Apps, Android for Work, or Samsung KNOX Workspace that provide some level of separation between personal apps and enterprise apps to mitigate the impact of malicious behaviors, including use of per-app/per-user VPN features, so that only enterprise-approved apps can traverse the VPN and access enterprise resources.":
            - Enterprise
---
