---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-2
    Threat: "Exploitation of cloud backups or other cloud file storage performed by individual mobile applications"
    ThreatOrigin: "Mobile Security: Threats and Countermeasures [^90]"
    ExploitExample: "Q4 Mobile Security and Risk Review [^195]"
    CVEExample:
    PossibleCountermeasures:
        "Analyze application data storage practices as part of app vetting before allowing an app to be used for processing enterprise data.":
            - Enterprise
        "To protect the confidentiality of app data backed-up to a cloud service, prefer the use of FedRAMP-certified cloud service providers to gain assurance that app data backed-up to the cloud is strongly encrypted.":
            - Enterprise
        "To prevent an attacker from gaining access to app data backups via the cloud service account, enable two-factor or other strong authentication mechanisms.":
            - Mobile Device User
            - Enterprise
        "To protect the confidentiality of app data backed-up to a cloud service, when possible, deploy MAM or MDM solutions that configure enrolled devices to strongly encrypt cloud backups or synchronized data.":
            - Enterprise
        "To prevent sensitive app data from being backed-up to an untrusted cloud service, deploy MAM or MDM solutions in combination with devices that successfully enforce policies intended to prohibit app data from being synchronized or backed-up to cloud services.":
            - Enterprise
---
