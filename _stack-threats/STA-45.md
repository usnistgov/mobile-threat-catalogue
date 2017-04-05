---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-45
    Threat: "A malicious application with root access can change the permissions on application specific files (e.g. Facebook app)"
    ThreatDescription: "By abusing root access and maliciously altering the permissions on files associated with application of interest, such as Facebook, an attacker can facilitate future data collection from those apps. Other applications controlled by the attacker would be able to access such files any kind of privilege escalation."
    ThreatOrigin:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "To reduce the opportunity for attack following availability of security patches, ensure the timely installation of mobile OS security updates.":
            - Enterprise
            - Mobile Device User
        "Use tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices until such integrity checks are passed.":
            - Enterprise
---
