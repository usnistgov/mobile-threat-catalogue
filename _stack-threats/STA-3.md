---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-3
    Threat: "Insecure library that insecurely parses images or other file types"
    ThreatOrigin:
    ExploitExample: "TALOS Vulnerability Report [^215]"
    CVEExample: CVE-2016-4637
    PossibleCountermeasures:
        "To reduce the probability of this variety of attack, configure devices to automatically install or, at a minimum, notify users of the availability of security updates for the mobile OS, drivers, and installed apps.":
            - Enterprise
            - Mobile Device User
        "To minimize the latency between exploit notification and the availability of security fixes, choose devices that have a reputation for providing security patches in a timely fashion.":
            - Enterprise
        "To minimize opportunity for this attack under a known exploit, use email filtering technologies to block attachments from untrusted domains to contain suspect file types.":
            - Enterprise
        "To prevent exploitation of this variety of attack under a known exploit, educate users to be suspicious of the file types in question, and when possible, avoid opening them on vulnerable devices.":
            - Enterprise
        "To minimize the risk of access from compromised devices, use EMM/MDM solutions in combination with devices that successfully enforce policies to block access to enterprise resources for vulnerable devices.":
            - Enterprise
---
