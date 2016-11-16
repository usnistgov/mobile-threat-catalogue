---
    layout: threat
    ThreatCategory: Isolated Execution Environments
    ID: STA-11
    Threat: "Exploitation of vulnerability in code running within isolated environment, leading to the ability to access data stored in environment (e.g. crypto keys) or access data stored within the primary OS (e.g. Android, iOS) itself."
    ThreatOrigin: "Extracting Qualcomm\'s KeyMaster Keys - Breaking Android Full Disk Encryption [^209]"
    ExploitExample:
    CVEExample: CVE-2016-0825
    PossibleCountermeasures:
        "Based on description of Trusty TEE, it is implicitly understood that all applications that execute in this space are capable of accessing device secrets (no concept of privilege escalation per se). However, they are only included in the Trusty image, cannot be dynamically loaded or modified, and must have been signed with a developer certificate trusted by the manufacturer of the TEE hardware. TEE OS other than Trusty can be used. [^222]":
            - 
---
