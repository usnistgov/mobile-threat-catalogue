---
    layout: threat
    ThreatCategory: Device Drivers
    ID: STA-9
    Threat: "Exploitation of software vulnerability in a device driver or firmware"
    ThreatDescription: "Privilege escalation, input validation, or buffer overflow vulnerabilities in a device driver or the associated firmware may allow an attacker to achieve arbitrary code execution in the context of the firmware or OS kernel, information disclosure, or denial-of-service attacks."
    ThreatOrigin: "Android Security Bulletin June 2016 [^206] [^Artenstein-1]"
    ExploitExample:
    CVEExample:
        - CVE-2016-10231
        - CVE-2016-10236
        - CVE-2016-10240
        - CVE-2016-10241
        - CVE-2016-10278
        - CVE-2016-10279
        - CVE-2016-2066
        - CVE-2016-2469
        - CVE-2016-2474
        - CVE-2016-2490
        - CVE-2016-2491
        - CVE-2016-5346
        - CVE-2017-0325
        - CVE-2017-0329
        - CVE-2017-0339
        - CVE-2017-0454
        - CVE-2017-046
        - CVE-2017-056
        - CVE-2017-0561
        - CVE-2017-0562
        - CVE-2017-0565
        - CVE-2017-0566
        - CVE-2017-0567
        - CVE-2017-0569
        - CVE-2017-057
        - CVE-2017-057
        - CVE-2017-0570
        - CVE-2017-0571
        - CVE-2017-0572
        - CVE-2017-0575
        - CVE-2017-0579
        - CVE-2017-058
        - CVE-2017-058
        - CVE-2017-0584
        - CVE-2017-0585
        - CVE-2017-6424
        - CVE-2017-6425
        - CVE-2017-6975
        - CVE-2017-9417
    PossibleCountermeasures:
        "Use EMM/MDM solutions in combination with devices that successfully enforce a policy to maintain a minimum OS patch level and block access to enterprise resources to non-compliant or devices with known-exploitable vulnerabilities.":
            - Enterprise
        "Purchase devices from vendors/carriers who have committed to providing timely updates or have good track records for providing prompt security updates.":
            - Enterprise
        "Use EMM/MDM solutions in combination with other tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices that show indications of device compromise.":
            - Enterprise
        "To reduce the probability an exploit for a driver for an access-controlled peripheral or OS-provided service (e.g., camera, microphone), use OS configuration settings to disable or block access to these resources, with a preference for global settings (e.g., disabling NFC device-wide) over app-specific permissions.":
            - Mobile Device User
        "To reduce the probability an exploit for a driver for a peripheral or OS-provided service that can be disabled via device management APIs, use EMM/MDM solutions in combination with devices that successfully enforces a policy to disable unauthorized resources, including temporarily disabling known-vulnerable resources until a security patch is available.":
            - Enterprise
---
