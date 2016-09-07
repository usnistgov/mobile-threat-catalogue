---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-0
    Threat: "Exploitation of mobile device backups stored on a compromised PC"
    ThreatOrigin:
    ExploitExample:
        - "BackStab: Mobile Backup Data Under Attack from Malware [^192]"
        - "BackStab: Mobile Backup Data Under Attack From Malware [^193]"
    CVEExample:
    PossibleCountermeasures:
        - "On iOS devices: Enable encrypted backups. For enterprise-managed devices, enforce the _forceEncryptedBackup_ setting in the configuration profile."
        - "Caution users not to click the _Trust_ button in the dialog box that appears when connecting the device to a computer or charger unless it is a trusted computer under the user's control."
        - "Ensure that devices have a lock screen set, which makes it more difficult to pair iOS devices with a computer (and thus perform device backups to that computer) without the user's consent."
---
