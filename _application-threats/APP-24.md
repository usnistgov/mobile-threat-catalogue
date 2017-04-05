---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-24
    Threat: "Surreptitiously reporting the physical location (e.g. using GPS or other means) of the device through programmatic means by invoking standard APIs."
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that may abuse location services.":
            - Mobile Device User
        "When apps that require location services (e.g., map services) are not in use, use OS-provided settings to globally disable access to location services":
            - Mobile Device User
        "When using untrusted apps that require locations services (e.g., map services), use OS-provided settings to revoke access to location services once the app is no longer in use.":
            - Mobile Device User
        "Use application threat intelligence data about potential abuse of location services associated with apps installed on COPE or BYOD devices":
            - Enterprise
---
