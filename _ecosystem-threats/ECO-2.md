---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-2
    Threat: "Exploitation of cloud backups or other cloud file storage performed by individual mobile applications"
    ThreatOrigin: "Mobile Security: Threats and Countermeasures [^90]"
    ExploitExample: "Q4 Mobile Security and Risk Review [^195]"
    CVEExample:
    PossibleCountermeasures:
        - "Analyze application data storage practices as part of app vetting before allowing an app to be used for processing enterprise data."
        - "Be sure that any cloud storage services used by these apps are authorized by the enterprise for use."
        - "Enable two-factor or other strong authentication mechanism for the cloud provider."
        - "When feasible, encrypt data stored by cloud services prior to transmission to the service provider to protect the confidentiality of stored data."
---
