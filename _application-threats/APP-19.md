---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-19
    Threat: "Surreptitiously recording via camera and/or microphone. This can be done using standard operating system APIs."
    ThreatOrigin:
    ExploitExample:
        - "Malware designed to take over cameras and record audio enters Google Play [^99]"
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Deploy MDM solutions that support geo-fencing of BYOD devices with policies that disable device sensors (e.g., camera, microphone) when the device is being operated in sensitive locations.":
            - Enterprise
        "Deploy MDM solutions for COPE devices that support disabling device sensors (e.g. camera, microphone) that can be used for recording of nearby activity.":
            - Enterprise
        "Deploy MAM solutions for COPE devices that support selectively enabling device sensors (e.g. camera, microphone) for a whitelist of trusted enterprise applications that require those functionalities.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that may abuse access to sensor data to record nearby activity.":
            - Mobile Device User
        "Use application threat intelligence data about potential abuse of access to device sensors associated with apps installed on COPE or BYOD devices":
            - Enterprise
        "To reduce risks of using the app, only request access to the minimal set of shared data stores (e.g., contacts, calendar), OS services (e.g. location services), and device sensors (e.g. camera, microphone) necessary for the app to provide functionality.":
            - Mobile App Developer
---
