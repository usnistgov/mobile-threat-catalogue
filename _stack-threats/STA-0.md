---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-0
    Threat: "Exploitation of operating system software vulnerabilities to gain escalated privileges."
    ThreatOrigin:
        - "Internet Security Threat Report 2016 [^110]"
        - "Mobile Security: Threats and Countermeasures [^90]"
    ExploitExample:
        - "Zimperium Applauds Google's Rapid Response to Unpatched Kernel Exploit [^213]"
        - "Remote Code Execution as System User on Samsung Phones [^55]"
    CVEExample:
        - CVE-2010-2973
        - CVE-2016-4655
        - CVE-2016-4656
    PossibleCountermeasures:
        "To reduce the risk to enterprise resources being accessed from vulnerable devices, deploy EMM/MDM solutions that can successfully enforce policies to monitor the OS version of devices and block enterprise connectivity from out-of-date devices or those with known-exploitable privilege escalation vulnerabilities.":
            - Enterprise
        "To help reduce the latency between exploit notification and patch availability, purchase devices from vendors/carriers who have committed to providing timely updates or who have known track records for prompt updates.":
            - Enterprise
        "To help reduce the opportunity for attack following availability of patches, configure automatic installation of, or, at a minimum, automatic notification of the availability of mobile OS security updates.":
            - Enterprise
            - Mobile Device User
        "Use tools or device APIs (e.g. Android SafetyNet) to detect and block enterprise connectivity from devices that fail attestation or integrity checks.":
            - Enterprise
---
