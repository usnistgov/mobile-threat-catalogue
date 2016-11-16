---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-35
    Threat: "Malicious app retrieving sensitive data from the clipboard (e.g., passwords)"
    ThreatOrigin: "Attacks on Android Clipboard [^238]"
    ExploitExample:
        - "Update: XcodeGhost Attacker Can Phish Passwords and Open URLs Through Infected Apps [^239]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Deploy MAM solutions that can restrict access to the device clipboard and similar OS-provided services to a whitelist of trusted apps.":
            - Enterprise
        "Deploy MAM or container solutions that can restrict communication between trusted and untrusted apps using the device clipboard, copy-and-paste, and similar OS-provided services.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use application threat intelligence services to identify apps reported to abuse access to the device clipboard or similar OS-provided services to obtain sensitive information.":
            - Enterprise
        "Use app-vetting tools or services to identify applications that appear to abuse access to the device clipboard or similar OS-provided services to obtain sensitive information.":
            - Enterprise
---
