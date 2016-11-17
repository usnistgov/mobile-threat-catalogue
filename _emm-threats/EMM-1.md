---
    layout: threat
    ThreatCategory: Enterprise Mobility
    ID: EMM-1
    Threat: "A user of one organization\'s EMM instance is able to access information from another organization\'s EMM instance."
    ThreatOrigin: "New VMSA-2014-0014 _ AirWatch by VMWare Product Update Addresses Information Disclosure Vulnerabilities [^190]"
    ExploitExample: "New VMSA-2014-0014 _ AirWatch by VMWare Product Update Addresses Information Disclosure Vulnerabilities [^190]"
    CVEExample: CVE-2014-8372
    PossibleCountermeasures:
        "To avoid this threat, deploy on-premises instances of EMM solutions when possible.":
            - Enterprise
        "To further reduce the potential impact of unauthorized access to account and device data, configure the EMM solution to capture and store the minimum amount of device, user, and activity data as required to meet your broader mobile device security goals.":
            - Enterprise
        "To further reduce the potential impact of unauthorized access to account and device data, dissociate or anonymize the data provided to the EMM service as much as possible (e.g., map enterprise or personal identities to alias accounts provisioned within the EMM solution).":
            - Enterprise
        "To reduce the time to detection of unauthorized access to EMM administrative accounts, configure the EMM solution to audit system access and administrative actions, and establish procedures to review recent activity for indications of unauthorized access.":
            - Enterprise
        "To reduce the potential for an attacker to activate sensitive EMM functionality, such as remote wiping of enrolled devices, configure the EMM solution to require authorization by multiple administrators before such actions will execute.":
            - Enterprise
---
