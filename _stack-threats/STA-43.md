---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-43
    Threat: "A malicious application with root access acts as a keylogger to capture sensitive information."
    ThreatOrigin:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "To reduce the potential of downloading a malicious app, such as a keylogger, only install (or permit the installation of) mobile apps downloaded directly from an official app store (e.g. Apple iTunes Store, Google Play)."
            - Mobile Device User
            - Enterprise
        "To help reduce the opportunity for attack following availability of patches, insure timely installation of mobile OS security updates.":
            - Enterprise    
            - Mobile Device User
        "Use tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices until they pass such integrity checks.":
            - Enterprise
---
