---
    layout: threat-new
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-30
    Threat: "Data exfiltration or command-and-control through non-enterprise controlled network or other out-of-band channel (e.g. cellular data, SMS) to avoid enterprise network monitoring"
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that may abuse communication channels to exfiltrate data.":
            - Mobile Device User
        "Use application threat intelligence data about potential data exfiltration risks associated with apps installed on COPE or BYOD devices":
            - Enterprise
        "Use app-vetting tools or services to identify apps that appear to exfiltrate data.":
            - Enterprise
---
