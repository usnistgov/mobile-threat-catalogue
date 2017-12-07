---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-34
    Threat: "App provides remote control over device"
    ThreatDescription: "Malicious apps built with effective code execution exploits against the mobile OS and the ability to receive remote commands can provide a resourceful attacker with considerable control over a compromised mobile device. Typical usage of remote control functionality has been using build-in sensors, such as the microphone and camera, to surveil the user. However, an attacker can potentially exercise any capability of the device."
    ThreatOrigin:
    ExploitExample:
        - "Dendroid malware can take over your camera, record audio, and sneak into Google Play [^237]"
        - "Mobile RAT attack makes Android the ultimate spy tool [^112]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use app-vetting tools or services to identify apps that appear to provide remote control to an attacker.":
            - Enterprise
        "Use application threat intelligence services to identify apps flagged as providing remote access to an attacker":
            - Enterprise
        "When installing apps, be suspicious of those requesting access to OS services or sensors that do not appear related to the functionality of the app":
            - Mobile Device User
---
