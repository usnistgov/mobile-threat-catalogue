---
    layout: threat
    ThreatCategory: Isolated Execution Environments
    ID: STA-11
    Threat: "Exploitation of vulnerability in code running within isolated environment, leading to the ability to access data stored in environment (e.g. crypto keys) or access data stored within the primary OS (e.g. Android, iOS) itself."
    ThreatOrigin: "Extracting Qualcomm\'s KeyMaster Keys - Breaking Android Full Disk Encryption [^209]"
    ExploitExample:
    CVEExample: CVE-2016-0825
    PossibleCountermeasures:
        "Use TEE OS that provide integrity protections over trustlets, such as verification of digital signatures on installed trustlets, such as Trusty OS. [^222]":
            - Original Equipment Manufacturer
---
