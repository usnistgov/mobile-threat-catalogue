---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-5
    Threat: "Bypassing Code signing mechanisms"
    ThreatOrigin:
    ExploitExample: "iOS 8.4.1 Kernel Vulnerabilities in AppleHDQGasGaugeControl [^216]"
    CVEExample: CVE-2015-5839
    PossibleCountermeasures:
        "Use EMM/MDM solutions in combination with devices that successfully enforce a policy to maintain a minimum OS patch level and block access to enterprise resources to non-compliant devices.":
            - Enterprise
        "Purchase devices from vendors/carriers who have committed to providing timely updates or who have known track records for prompt updates.":
            - Enterprise
        "Use EMM/MDM solutions in combination with other tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices that show indications of device compromise.":
            - Enterprise
---
