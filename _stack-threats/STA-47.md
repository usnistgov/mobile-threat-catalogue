---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-47
    Threat: "A malicious app with root access records user activity by copying the raw screen buffer (screenshot)."
    ThreatOrigin:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "To limit the opportunity for an attacker to realize threat following a security patch for an underlying vulnerability, ensure timely installation of mobile OS security updates.":
            - Mobile Device User
            - Enterprise
        "Use tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices that fail attestation or integrity checks.":
            - Enterprise
---
