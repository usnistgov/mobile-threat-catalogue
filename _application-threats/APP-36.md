---
    layout: threat-new
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-36
    Threat: "Privacy invasive behaviors in applications pre-installed on mobile device by carrier or device manufacturer (that a user may be unable to remove)."
    ThreatOrigin:
    ExploitExample:
        - "Device Squad: The story behind the FTC's first case against a mobile device maker [^113]"
        - "Certifi-gate: Hundreds of Millions of Android Devices Could Be Pwned [^114]"
        - "Samsung Keyboard Security Risk Disclosed [^115]"
    CVEExample:
        - CVE-2015-4640
        - CVE-2015-4641
    PossibleCountermeasures:
        "To mitigate the potential for abuse or exploits by pre-installed apps, ensure that devices have the latest security updates installed.":
            - Mobile Device User
            - Enterprise
        "Uninstall pre-installed apps that are not in use.":
            - Mobile Device User
        "For pre-installed apps that cannot be uninstalled, revoke access to device sensors and OS-provided services.":
            - Mobile Device User
        "For pre-installed apps that cannot be uninstalled, disable the app so that it cannot be launched.":
            - Mobile Device User
        "Deploy MAM solutions to identify and block access to devices running high-risk pre-installed apps.":
            - Enterprise
        "Deploy MAM or container solutions to provide additional separation between trusted and untrusted pre-installed apps to mitigate the potential for pre-installed apps to violate the privacy of user actions performed within trusted apps.":
            - Enterprise
---
