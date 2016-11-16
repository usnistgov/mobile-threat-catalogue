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
        "Monitor the security patch state of devices and block enterprise connectivity from out-of-date devices with known exploitable vulnerabilities.":
            - 
        "Purchase devices from vendors/carriers who have committed to providing timely updates or who have known track records for prompt updates.":
            - 
        "Ensure devices are kept up-to-date with security patches to decrease the likelihood that they can be rooted/jailbroken.":
            - 
        "Use tools or device APIs (e.g. Android SafetyNet) to detect and block enterprise connectivity from known compromised devices.":
            - 
        "Use device APIs (e.g. SystemUpdatePolicy) to enforce system update policies.":
            - 
---
