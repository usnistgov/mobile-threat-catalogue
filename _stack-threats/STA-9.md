---
    layout: threat
    ThreatCategory: Device Drivers
    ID: STA-9
    Threat: "Exploitation of software vulnerability in a driver"
    ThreatOrigin: "Android Security Bulletin June 2016 [^206]"
    ExploitExample:
    CVEExample:
        - CVE-2016-2066
        - CVE-2016-2469
        - CVE-2016-2474
        - CVE-2016-2490
        - CVE-2016-2491
    PossibleCountermeasures:
        "Use EMM/MDM solutions in combination with devices that successfully enforce a policy to maintain a minimum OS patch level and block access to enterprise resources to non-compliant or devices with known-exploitable vulnerabilities.":
            - Enterprise
        "Purchase devices from vendors/carriers who have committed to providing timely updates or have good track records for providing prompt security updates.":
            - Enterprise
        "Use EMM/MDM solutions in combination with other tools or device APIs (e.g. Android SafetyNet, device attestation technologies) to detect and block enterprise connectivity from devices that show indications of device compromise.":
            - Enterprise
        "To reduce the probability an exploit for a driver for an access-controlled peripheral or OS-provided service (e.g., camera, microphone), use OS configuration settings to disable or block access to these resources, with a preference for global settings (e.g., disabling NFC device-wide) over app-specific permissions.":
            - Mobile Device User
        "To reduce the probability an exploit for a driver for a peripheral or OS-provided service that can be disabled via device management APIs, use EMM/MDM solutions in combination with devices that successfully enforces a policy to disable unauthorized resources, including temporarily disabling known-vulnerable resources until a security patch is available.":
            - Enterprise
---
