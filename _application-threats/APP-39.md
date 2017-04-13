---
    layout: threat
    ThreatCategory: Malicious or privacy-invasive application
    ID: APP-39
    Threat: "Malware with root access avoids detection by uninstalling itself without user interaction."
    ThreatDescription: "By abusing root privileges, a malicious application could avoid detection by deleting itself after executing malicious behaviors. This would reduce the opportunity for detection and identification of the malicious activity, and may prevent or limit remediation."
    ThreatOrigin:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "To help reduce the opportunity for attack following availability of patches, ensure timely installation of mobile OS security updates.":
            - Enterprise    
            - Mobile Device User
        "To reduce the potential of installing malicious applications, download public apps directly from an official app store (e.g., Google Play, iTunes Store).":
            - Mobile Device User
        "On Android devices, to prevent an attacker from remotely installing malicious applications from unknown sources, ensure Security > Unknown Sources is turned off; an enterprise can deploy EMM solutions that enforce a policy to never permit the installation of apps from unknown sources.":
            - Mobile Device User
            - Enterprise
        "To decrease the time-to-detection following the installation of a malicious app, deploy on-device agents that automatically detect the installation of any app and initiate either local (on-device) or remote processes for detection and identification of malware and potentially-harmful applications.":
            - Enterprise
            - Mobile Device User
---
