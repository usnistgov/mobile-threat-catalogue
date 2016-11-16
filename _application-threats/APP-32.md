---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-32
    Threat: "Malicious app taking advantage of the device\'s access to an internal enterprise network (e.g. via device-wide VPN connection or connection to corporate Wi-Fi) to access enterprise resources."
    ThreatOrigin:
    ExploitExample:
        - "Juniper Networks Third Annual Mobile Threats Report [^236]"
    CVEExample:
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
