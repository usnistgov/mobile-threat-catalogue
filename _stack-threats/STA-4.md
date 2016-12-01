---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-4
    Threat: "Failure to properly authenticate operating system updates, enabling attackers to provide a malicious update."
    ThreatOrigin: "UAE cellular carrier rolls out spyware as a 3G update [^203]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Use EMM/MDM solutions in combination with devices that successfully enforce a policy to maintain a minimum OS patch level and block access to enterprise resources to non-compliant devices.":
            - Enterprise
        "Purchase devices from vendors/carriers who have committed to providing timely updates or who have known track records for prompt updates.":
            - Enterprise
        "Use EMM/MDM solutions in combination with other tools or device APIs (e.g. Android SafetyNet, device attestation) to detect and block enterprise connectivity from devices that show indications of device compromise.":
            - Enterprise
        "Prior to authorizing general users to install an upgrade to an untested and potentially malicious software update, evaluate the behavior of the update on test devices to determine if it appears to be free of malicious or vulnerable behaviors.":
            - Enterprise
        "To reduce the probability of devices being vulnerable to this type of exploit, consider deploying iOS devices. iOS updates are signed by Apple and the signed blob include the requesting device's unique ID and a nonce to ensure retrieved updates are intended for that specific device. The signature is verified using the chain-of-trust established at device boot to ensure the update was provided by Apple.":
            - Enterprise
---
