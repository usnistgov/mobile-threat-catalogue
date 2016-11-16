---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-6
    Threat: "Installing potentially malicious apps via USB, either unintentionally by the device user, or by an infected computer or charging station without the user\'s knowledge."
    ThreatOrigin:
        - "Mobile Iron Q4 Mobile Security and Risk Review [^195]"
        - "Government Mobile and Wireless Security Baseline [^204]"
    ExploitExample: "Injecting Malware into iOS Devices via Malicious Chargers [^217]"
    CVEExample:
    PossibleCountermeasures:
        "Keep USB debugging disabled on Android devices unless explicitly needed. When USB debugging is enabled, do not trust new computers unless appropriate. On iOS, do not trust new computers connected via USB unless appropriate.":
            - 
        "In Android 4.3, ADB Authentication. Since Android 4.2.2, connections to ADB are authenticated with an RSA keypair. This prevents unauthorized use of ADB where the attacker has physical access to a device. [^220]":
            - 
        "In Android 6.0, Users must confirm to allow USB access to files, storage, or other functionality on the phone. Default is now charge only with access to storage requiring explicit approval from the user. [^221]":
            - 
---
