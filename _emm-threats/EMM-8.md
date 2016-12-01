---
    layout: threat
    ThreatCategory: Enterprise Mobility
    ID: EMM-8
    Threat: "Unauthorized or unintentional wiping of personal user data from devices"
    ThreatOrigin: "Personal Data Security and the ''BYOD'' problem: Who is Truly at Risk? [^7]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Consider the use of EMM/MDM solutions that can be configured to require dual authorization (two administrative users) to trigger device wipe functions, or at a minimum, solutions for which wiping functions involve multiple steps to complete.":
            - Enterprise
        "To enable recovery of personal data wiped from a managed device, provide a mechanism for users to preserve personal data, such as encrypted back-ups to the native cloud service (e.g. iCloud Backup & Storage).":
            - Enterprise
        "To limit the potential loss of personal data, encourage users of enrolled devices to use authorized mechanisms for the synchronization or transfer of personal data to external systems not subject to remote wipe by enterprise EMM solutions.":
            - Enterprise
        "Educate users regarding the risks to any personal data generated on an enrolled mobile device.":
            - Enterprise
---
