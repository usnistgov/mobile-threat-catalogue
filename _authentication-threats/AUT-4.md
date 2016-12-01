---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-4
    Threat: "Inferring the PIN/password from screen smudges"
    ThreatOrigin: "Smudge Attacks on Smartphone Touch Screens [^124]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "To increase the difficulty in successfully inferring the authentication credential, increase the minimum length and complexity of PINs, passwords, or other authentication credentials.":
            - Enterprise
            - Mobile Device User
        "To reduce the window of opporuntity during which an attacker can use an inferred authentication credential, reduce the maximum lifetime of authentication credentials.":
            - Mobile Device User
            - Enterprise
        "To limit the amount of data available to an attacker conducting a screen smudge inferrence attack, clean the screen of the device often, particularly when leaving the device directly unattended.":
            - Mobile Device User
        "To limit the amount of authentication data available to the attacker (e.g. size, and number of smudges), enter device unlock codes and passwords using a stylus on (ideally) a clean device screen.": 
            - Mobile Device User
        "Use devices and applications that support biometric authentication methods (e.g. facial recognition, voice print), which do not result in direct physical evidence of authentication data being left on the device for later analysis.":
            - Mobile Device User
            - Enterprise
        "To limit the window of opportunity for an attacker to conduct a screen smudge inferrence attack, physically secure the device when it is being left directly unattended.":
            - Mobile Device User
---
