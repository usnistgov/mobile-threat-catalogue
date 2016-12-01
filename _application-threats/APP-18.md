---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-18
    Threat: "Malicious app that subscribes to mobile carrier-provided premium services without user authorization (i.e., WAP Fraud)"
    ThreatOrigin: "Android Security 2015 Year In Review [^98]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that may abuse premium carrier services.":
            - Mobile Device User
        "Use application threat intelligence data about potential abuse of carrier services associated with apps installed on COPE or BYOD devices":
            - Enterprise
---
