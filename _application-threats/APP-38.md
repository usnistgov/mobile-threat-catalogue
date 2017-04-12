---
    layout: threat
    ThreatCategory: Malicious or privacy-invasive application
    ID: APP-38
    Threat: "A malicious application with root access can change the permissions on application specific files (e.g. Facebook app)"
    ThreatDescription: "By abusing root access and maliciously altering the permissions on files associated with application of interest, such as Facebook, an attacker can facilitate future data collection from those apps. Any application granted permissions in this way could access the exposed files using standard API calls, and therefore is less likely to be detected as malicious or privacy-invasive."
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
