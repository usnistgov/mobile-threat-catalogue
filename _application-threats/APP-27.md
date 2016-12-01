---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-27
    Threat: "Maintaining persistence of malicious code or unauthorized privileged access across device resets by using escalated privileges to write to system partitions, Trusted Execution Environment, bootloader, or other lower-level component that is typically not erased during a device reset"
    ThreatOrigin:
    ExploitExample:
        - "Brain Test re-emerges: 13 apps found in Google Play [^102]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use application threat intelligence data about apps that may achieve malicious persistence":
            - Enterprise
        "Use app-vetting tools or services to identify apps that exploit the underlying OS to achieve malicious persistence.":
            - Enterprise
        "To avoid executing apps that process sensitve information while low-level malware is present on the device, perform device integrity checking within enterprise applications, such as use of Android's SafetyNet device integrity attestation API":
            - Mobile App Developer
        "Deploy MDM solutions that require successful boot attestation prior to granting access to enterprise resources.":
            - Enterprise
---
