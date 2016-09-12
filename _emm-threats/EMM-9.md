---
    layout: threat
    ThreatCategory: Enterprise Mobility
    ID: EMM-9
    Threat: "Enterprise data synchronized to unmanaged and potentially insecure 3rd party cloud services"
    ThreatOrigin: "Man in the Cloud: Threat, Impact, Resolution and the Bigger Picture [^8]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        - "Use MDM profiles to prevent managed devices from using cloud-based file storage services or synchronization services. Note, this may increase the risk of loss of availability in the event of unintentional device wipe or similarly destructive events (e.g. mobile ransomware)."
        - "Reduce the risk a loss of confidentiality for enterprise data stored by authorized cloud-based file storage or synchronization services by ensuring enterprise data is encrypted (e.g. via an encrypted contained) prior to synchronization."
---
