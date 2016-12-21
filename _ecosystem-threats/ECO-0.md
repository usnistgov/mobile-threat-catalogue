---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-0
    Threat: "Exploitation of mobile device backups stored on a compromised PC"
    ThreatOrigin:
    ExploitExample:
        - "BackStab: Mobile Backup Data Under Attack from Malware [^192]"
        - "iOS 10: Security Weakness Discovered, Backup Passwords Much Easier to Break [^O-Afonin-1]"
    CVEExample:
    PossibleCountermeasures:
        "As knowledge of the authentication credentials for any associated account (e.g., iTunes, Google) may facilitate an attacker\'s ability to initiate, access, or decrypt device backups, follow best practices for management of device account passwords.":
            - Mobile Device User
        "To detect malware that may realize this threat against device backups to a trusted computer, ensure up-to-date anti-malware software is configured to regularly scan for malicious files and application behavior.":
            - Mobile Device User
            - Enterprise
        "To prevent this threat for backups to a trusted computer, configure any device backup software (e.g., iTunes) to encrypt all device backups. Furthermore, securely erase any unencrypted backups that may already exist.":
            - Mobile Device User
        "To prevent this threat for all backups of managed devices, deploy EMM/MDM solutions in combination with devices that successfully enforce policies to either encrypt all device backups or to block device backups entirely, as appropriate.":
            - Enterprise
        "To prevent this threat for enterprise data contained in backups of managed devices, deploy EMM/MDM/container solutions in combination with devices that successfully enforce policies to either encrypt all enterprise data, or block enterprise data from being included in device backups.":
            - Enterprise
        "To prevent a device from being inadvertently backed up to an computer under an attacker\'s control, when charging the device, do not grant trust to an untrusted computer or charging station.":
            - Mobile Device User
        "To prevent an attacker from directly initiating an unauthorized device backup to a controlled computer, ensure a device unlock code has been configured for the device and that the device is left in a locked state when being left unattended.":
            - Mobile Device User
        "To further prevent an attacker from directly initiating an unauthorized device backup to a controlled computer, use strong physical security measures (e.g., lock the device into a secure container) when leaving a device directly unattended.":
            - Mobile Device User
---
