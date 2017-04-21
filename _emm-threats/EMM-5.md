---
    layout: threat
    ThreatCategory: Enterprise Mobility
    ID: EMM-5
    Threat: "A compromised or rooted device bypasses root/jailbreak or other compliance checks"
    ThreatOrigin: "All Your Root Checks Are Belong to Us: The Sad State of Root Detection [^5]"
    ExploitExample:
    CVEExample: CVE-2017-4895 [^Airwatch-1]
    PossibleCountermeasures:
        "To increase the potential that device root or jail-break is detected, deploy a variety of mechanisms capable of root or jail-break detection (e.g., on-device agents, apps that require successful boot attestation checks, manual inspection)":
            - Enterprise
        "To reduce the opportunity for an attacker to locally root or jail-break devices, educate users on the importance of physically securing their devices (e.g., locking it into a container) when not directly attended.":
            - Enterprise
        "To reduce the potential a given root or jail-break attack will succeed, ensure devices are configured with a strong device unlock code.":
            - Enterprise
        "To reduce the potential for USB-based root or jail-break exploits, do not accept prompts to grant trust when connecting to untrusted computers or charging stations.":
            - Mobile Device User
---
