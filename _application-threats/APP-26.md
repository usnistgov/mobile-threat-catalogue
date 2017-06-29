---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-26
    Threat: "Escalating privileges on device using OS or other lower-level vulnerability to perform a malicious action or obtain a persistent presence"
    ThreatDescription: "Malicious applications that achieve privilege escalation may further achieve unauthorized access or modification of app, user, or system data, access or modify process memory, or execute other unauthorized actions on the device."
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
    CVEExample:
        - CVE-2017-2398
        - CVE-2017-2401
        - CVE-2017-2440
        - CVE-2017-2451
        - CVE-2017-2456
        - CVE-2017-2472
        - CVE-2017-2473
        - CVE-2017-2474
        - CVE-2017-2478
        - CVE-2017-2482
        - CVE-2017-2483
        - CVE-2017-2490
        - CVE-2017-0617
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use the Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use application threat intelligence data to identify apps that exploit the OS to achieve privilege escalation.":
            - Enterprise
        "Use app-vetting tools or services to identify apps that exploit the OS to achieve privilege escalation.":
            - Enterprise
        "To limit the opportunity for malicious apps to exploit known vulnerabilities, ensure timely installation of security updates.":
            - Mobile Device User
            - Enterprise
---
