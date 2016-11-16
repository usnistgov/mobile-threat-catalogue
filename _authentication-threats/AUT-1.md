---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-1
    Threat: "Lockscreen bypass"
    ThreatOrigin:
    ExploitExample: "How hackers can access iPhone contacts and photos without a password [^129]"
    CVEExample:
    PossibleCountermeasures:
        "To limit opportunity for lockscreen bypass attacks, strongly secure mobile devices when not directly attended.":
            - Mobile Device User
        "To reduce the success of lockscreen bypass exploits, ensure mobile OS security updates are installed in a timely manner":
            - Mobile Device User
            - Enterprise
        "To mitigate the risks following a successful lockscreen bypass, apply secondary authentication requirements to enterprise container solutions, sensitive apps, or back-end serivces).":
            - Enterprise
        "Use mobile OS configuration settings or deploy MDM solutions with policies to limit the data or services available while the device screen is locked (e.g., notifications, camera)":
            - Mobile Device User
            - Enterprise
---
