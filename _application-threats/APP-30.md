---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-30
    Threat: "Data exfiltration evades Wi-Fi traffic analysis"
    ThreatDescription: "Malicious apps that collect and exfiltrate sensitive data have multiple communication channels available. In addition to using encryption, steganography, or other obfuscation techniques over an inspected Wi-Fi connection, apps may exfiltrate data over a cellular connection, which cannot be directly analyzed using an enterprise network security mechanism. While requiring a receiver with proximity to the device, apps can also potentially exfiltrate data over Bluetooth or NFC connections. Common use of these channels are interfaces to device peripherals or short-range data transfers, making these channels less likely to be monitored by enterprise security mechanisms."
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
