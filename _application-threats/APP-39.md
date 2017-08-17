---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-39
    Threat: Malware uses device to conduct DDoS attacks
    ThreatDescription: "DDoS attacks are generally more effective with a greater number of systems an attacker can control. As many DDoS attack techniques only require a given participant to generate a small amount of network traffic, such as a spoofed DNS query used in a reflection attack, they can be easily generated from a mobile device. Given the high volume of these devices, the ability for an attacker to compromise a large number in a short time with trojan apps, and their potential to launch attacks from multiple networks (e.g., Wi-Fi and celluar connections, ) they are likely intermediary targets in DDoS campaigns."
    ThreatOrigin:
    ExploitExample:
        - "Android.Tascudap [^T-Katsuki-1]"
    CVEExample:
    - CVE-2017-6982
    - CVE-2017-2495
    - CVE-2017-0599
    - CVE-2017-0600
    - CVE-2017-0603
    PossibleCountermeasures:
        "To reduce the risk of installing apps with trojan functionality, only download apps from official app stores.":
            - "Mobile Device User"
        "Use malware detection apps that identify malware by anomalous network activity.":
            - "Enterprise"
            - "Mobile Device User"
---
