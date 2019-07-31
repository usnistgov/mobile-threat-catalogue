---
    layout: threat
    ThreatCategory: Boot firmware
    ID: STA-15
    Threat: "Deliberate unlocking of bootloader by device user/owner to install custom operating systems, which could then enable an attacker to use the bootloader to install malware."
    ThreatOrigin:
    ExploitExample: "Xiaomi Locks Mi Devices' Bootloaders On Fears Of Malware And Security Risks: Up To 21 Days To Unlock [^47]"
    CVEExample:
    PossibleCountermeasures:
        "Educate users of the risks of unlocking the device bootloader.":
            - Enterprise
        "Use EMM/MDM solutions or on-device agents that can potentially detect rooted or jail-broken devices and subsequently, successfully block access to enterprise resources.":
            - Enterprise
        "To mitigate the potential of accessing sensitive data or functionality on rooted or jail-broken devices, leverage device attestation APIs to determine the device is in a known-good state prior to executing sensitve actions.":
            - Mobile App Developer
---
