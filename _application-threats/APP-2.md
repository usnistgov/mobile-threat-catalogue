---
    layout: threat-new
    ThreatCategory: Vulnerable Applications
    ID: APP-2
    Threat: "Storing files with insecure file permissions or in an unprotected location on the device"
    ThreatOrigin:
    ExploitExample:
        - "Vulnerability in Skype for Android [^67]"
        - "World Writable Code Is Bad, MMMMKAY [^68]"
        - "LOOK-11-001 something [^69]"
    CVEExample:
        - CVE-2011-1717
    PossibleCountermeasures:
        "Use app-vetting tools or services to identify insecure storage of sensitive data.":
            - Enterprise
        "Consider the use of devices that support Android 7.0 and later, which enables app-level encryption in addition to block-level encryption.":
            - Mobile Device User
            - Enterprise
---
