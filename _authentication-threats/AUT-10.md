---
    layout: threat
    ThreatCategory: "Authentication: User or Device to Remote Service"
    ID: AUT-10
    Threat: "Malicious application that captures credentials"
    ThreatOrigin: "OAuth 2.0 for Native Apps [^141]"
    ExploitExample: "Stealing Passwords is Easy in Native Mobile Apps Despite OAuth [^140]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use app-vetting tools or services to identify malicious behaviors in apps.":
            - Enterprise
---
