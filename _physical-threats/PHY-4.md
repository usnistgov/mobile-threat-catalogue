---
    layout: threat
    ThreatCategory: Physical Access
    ID: PHY-4
    Threat: "Data loss via 3rd party temporary access to unattended and unlocked mobile device"
    ThreatOrigin: "Eight Ways to Keep Your Smartphone Safe [^231]"
    ExploitExample: "The Current State of Android Security [^234]"
    CVEExample:
    PossibleCountermeasures:
        "Enforce activation of the auto-lock feature of a mobile device with a maximum idle time that reduces the likelihood an attacker will gain physical access to the device in an unlocked state":
            - Enterprise
            - Mobile Device User
        "Activate auto-lock features based on loss of proximity to a trusted, paired device attended by the mobile device user, such as a smart watch":
            - Enterprise
            - Mobile Device User
        "Require additional user-to-app or user-to-service authentication for apps that provide access to sensitive data":
            - Enterprise
        "Educate end-users of the importance of locking their device if they are leaving it unattended in an area lacking strong physical security controls.":
            - Enterprise
---
