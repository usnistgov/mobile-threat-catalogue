---
    layout: threat
    ThreatCategory: Physical Access
    ID: PHY-5
    Threat: "Use of a sidechannel attack to obtain crypto private keys"
    ThreatOrigin: "ECDSA Key Extraction from Mobile Devices Via Nonintrusive Physical Side Channels"
    ExploitExample: "New Attack Steals Secret Crypto Keys from Android and iOS Phones [^164]"
    CVEExample:
    PossibleCountermeasures:
        "Applications using the OS-provided cryptographic functions on iOS 9.x devices are not vulnerable to this attack as described, as the contain mitigations against side-channel attacks. Applications that employ their own cryptographic functions may still be vulnerable, however.":
            - 
        "Educate users to be mindful of their physical surroundings when using mobile devices, and to report the appearance of unexpected hardware components to IT security immediately.":
            - 
        "Educate users to not directly connect their mobile devices to untrusted systems or docking stations, and to maintain strong physical security for innocent components such as USB charging cables":
            - 
---
