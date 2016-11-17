---
    layout: threat
    ThreatCategory: "Third-Party mobile app stores"
    ID: ECO-15
    Threat: "App store compromise leading to distribution of private enterprise application to unauthorized parties"
    ThreatOrigin:
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Use solutions such as Google Play Private Channel or Apple\'s Developer Enterprise program to securely distribute private applications.":
            - Enterprise
        "To limit the distribution of sensitive enterprise apps outside of authorized mobile devices, use MAM solutions to push private apps directly onto authorized and enrolled devices.":
            - Enterprise
        "To prevent the unauthorized disclosure of secrets within private enterprise apps, do not hardcode secrets, such as cryptographic keys, directly into private enterprise applications.":
            - Mobile App Developer
        "To prevent unauthorized access to private enterprise apps from further granting unauthorized access to sensitive data, require the user of a mobile app to pass strong authentication mechanisms prior to granting access to sensitive data.":
            - Application Developer
---
