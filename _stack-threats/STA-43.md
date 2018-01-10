---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-43
    Threat: "Secrets in process memory be read by a malicious process."
    ThreatDescription: ""
    ThreatOrigin:
        - "Project Zero: Reading privileged memory with a side-channel [^J-Horn-1]"
    ExploitExample:

    CVEExample:
        - CVE-2017-5754
        - CVE-2017-5753
        - CVE-2017-5715
    PossibleCountermeasures:
        "To reduce the opportunity for an attacker to compromise the confidentiality of secrets in process memory, the memory location allocated to any secrets, such as cryptographic keys, should be explicitly overwritten as soon as its contents are no longer in use.":
            - Mobile App Developer
        "To reduce the opportunity for an attacker to compromise the confidentiality of secrets in process memory, secrets (e.g. cryptographic keys) should not be read into memory until they are needed as input to computations.":
            - Mobile App Developer
        "To reduce the opportunity for an attacker to leverage any underlying vulnerability in the mobile OS or computing hardware, apply OS security updates in a timely fashion.":
            - Enterprise    
            - Mobile Device User
---
