---
    layout: threat
    ThreatCategory: "Third-Party mobile app stores"
    ID: ECO-12
    Threat: "MiTM attack providing illegitimate apps when users request legitimate apps"
    ThreatOrigin:
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "To decrease the time to detection, use app threat intelligence data to identify malicious applications installed on devices":
            - Enterprise
        "Use features such as Apple iOS Managed Apps, Android for Work, or Samsung KNOX Workspace that provide additional separation between personal apps and enterprise apps to mitigate the impact of malicious behaviors.":
            - Enterprise
        "To reduce the probability that an attacker will have established a MiTM on a session during which a user attempts to intall apps from a trusted source (e.g., official app store), recommend or require users to download apps when connected to a trusted and secured Wi-Fi network.":
            - Enterprise
        "To reduce the probability that malicious apps will be installed on managed devices, use app-vetting tools or services in combination with MAM solutions to push vetted apps directly onto enrolled devices over trusted and secured Wi-Fi networks.":
            - Enterprise
---
