---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-23
    Threat: "Distribution of malicious apps by a 3rd party store"
    ThreatDescription: "By default, mobile OS only trust (and allow the installation of) apps signed by valid digital certificates they issued to developers. Further, only developers with verified identities are permitted to publish apps to their public app stores. Additionally, apps submitted for publication are evaluated for the presence of exploit code or malicious or privacy-invasive behaviors; apps that fail to meet their criteria are rejected. 3rd party app stores, however, may not apply the same standards to developers or apps, increasing the potential for malicious or potentially harmful apps to be published by them."
    ThreatOrigin:
        - "Change to sideloading apps in iOS 9 is a security win [^89]"
        - "Mobile Security: Threats and Countermeasures [^90]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Ensure iOS devices are running the latest version of iOS, as iOS 9 introduces improvements to make it more difficult for users to inadvertently install non-Apple App Store apps (e.g. apps distributed using illicitly obtained enterprise certificates).":
            - Mobile Device User
            - Enterprise
        "When the installation of apps from unofficial app stores (e.g., enterprise app stores) is necessary, use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "To protect against arbitrary installation of 3rd party apps, when the installation of apps from unofficial app stores (e.g., enterprise app stores) is necessary, disable the installation of 3rd party apps once installation is complete.":
            - Mobile Device User
---
