---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-4
    Threat: "Failure to properly authenticate operating system updates, enabling attackers to provide a malicious update."
    ThreatOrigin: "UAE cellular carrier rolls out spyware as a 3G update [^203]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        - "Monitor the security patch state of devices and block enterprise connectivity from out-of-date devices with known exploitable vulnerabilities."
        - "Purchase devices from vendors/carriers who have committed to providing timely updates or who have known track records for prompt updates."
        - "Ensure devices are kept up-to-date with security patches to decrease the likelihood that they can be rooted/jailbroken."
        - "Use tools or device APIs (e.g. Android SafetyNet) to detect and block enterprise connectivity from known compromised devices."
        - "iOS updates are signed by Apple and the signed blob include the requesting device's unique ID and a nonce to ensure retrieved updates are intended for that device. The signature is verified using the chain-of-trust established at device boot to ensure the update was provided by Apple."
---
