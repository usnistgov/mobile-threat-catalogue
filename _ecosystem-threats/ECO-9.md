---
    layout: threat
    ThreatCategory: "Mobile OS & Vendor Infrastructure"
    ID: ECO-9
    Threat: "A brute-force attack parallelized across many computers could theoretically be attempted on the authentication data and cryptographic keys  (passwords, etc.) stored in the cloud."
    ThreatOrigin: "iOS Security: iOS 9.3 or later [^54]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Periodically changing the iCloud account password should likewise cause a new set of derived keys used by iCloud to be created, which prompts reencryption of any objects protected by those keys, including the iCloud Backup keybag, which would negate any progress an attacker had made towards a brute-force attack on that object.":
            - 
        "Creating a strong iCloud password increases the difficulty of brute-force attacks on the iCloud Backup keybag.":
            - 
---
