---
    layout: threat
    ThreatCategory: Malicious or privacy-invasive application
    ID: APP-40
    Threat: "A malicious app with root access records user activity by copying the raw screen buffer (screenshot)."
    ThreatDescription: "A malicious application that has elevated to root privileges may be able to capture the contents of the screen buffer, in essence taking a screenshot of any foreground activity. This would allow an attacker to steal authentication credentals or gain unauthorized access to any other sensitive information displayed in the foreground. Note that this capture would not handled like a user-initiated screenshot, and would not automatically be stored in default locations read by camera or photo browser apps (e.g. Google Photos)."
    ThreatOrigin:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "To limit the opportunity for an attacker to realize this threat following a security patch for a priviledge escalation vulnerability, ensure timely installation of mobile OS security updates.":
            - Mobile Device User
            - Enterprise
        "To reduce the probability of installing a malicious application, obtain public apps from an official app store (e.g., Google Play, iTunes Store).":
            - Mobile Device User
        "On Adroid, to prevent an attacker from remotely installing 3rd party malicious apps, ensure Security > Unknown Sources is turned off.":
            - Mobile Device User
        "To prevent users of managed Android devices from installing applications from unknown sources, deploy EMM solutions that effectively disable the Unknown Sources feature.":
            - Enterprise
        "To detect malicious applications, use on-device agents that automatically perform signature- and/or behavior-based malware detection.":
            - Mobile Device User
            - Enterprise
        "To prevent granting access to compromised devices, use tools or device APIs (Android SafetyNet, Samsung Knox hardware-backed remote attestation, or other applicable remote attestation technologies) to detect and block enterprise connectivity from devices that fail attestation or integrity checks.":
            - Enterprise
---
