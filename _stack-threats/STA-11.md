---
    layout: threat
    ThreatCategory: Isolated Execution Environments
    ID: STA-11
    Threat: "Exploitation of vulnerability in code running within isolated environment, leading to the ability to access data stored in environment (e.g. crypto keys) or access data stored within the primary OS (e.g. Android, iOS) itself."
    ThreatOrigin: "Extracting Qualcomm\'s KeyMaster Keys - Breaking Android Full Disk Encryption [^209]"
    ExploitExample:
    CVEExample: CVE-2016-0825
    PossibleCountermeasures:
        "To decrease the latency between availability and installation of security fixes for isolated execution environments, configure devices (potentially using EMM solutions) to automatically install security updates, or at a minimum, provide automated notification to the user that security updates are available for installation.":
            - Mobile Device User
            - Enterprise
        "To decrease the risk of persistent and unpatched vulnerabilities in isolated execution environments in deployed devices, consider acquiring mobile devices from vendors with a history of addressing and releasing security updates in a timely fashion.":
            - Enterprise
        "Use TEE OS that provide integrity protections over trustlets, such as verification of digital signatures on installed trustlets, such as Trusty OS. [^222]":
            - Original Equipment Manufacturer
---
