---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-46
    Threat: "Malware with root access avoids detection by uninstalling itself without user interaction."
    ThreatDescription: "By abusing root privileges, a malicious application could avoid detection, and thereby hinder remediation, for any unauthorized actions it took on the device. This may allow malicious changes to persist that facilitate further attacks (e.g. weakening device security configuration) or hinder remediation activities by delaying detection of the incident."
    ThreatOrigin:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "To help reduce the opportunity for attack following availability of patches, ensure timely installation of mobile OS security updates.":
            - Enterprise    
            - Mobile Device User
        "Use tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices that fail attestation or integrity checks.":
            - Enterprise
---
