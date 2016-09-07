---
    layout: threat
    ThreatCategory: Isolated Execution Environments
    ID: STA-13
    Threat: "Shack attack via physical access using common equipment"
    ThreatOrigin: "ARM Security Technology Building a Secure System using TrustZone Technology [^210]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        - "Maintain strong physical security controls over the device to prevent an attacker from having sufficient physical access to execute this form of attack"
        - "Automated monitoring of the state of an unattended device to detect unauthorized physical access, at which point, a remote wipe of all device data can be triggered to reduce the loss of data"
        - "Assume any device that has been under the physical control of an attacker for any timeframe sufficient to have executed this attack has been permanently compromised and should be transitioned to end-of-lifecycle."
---
