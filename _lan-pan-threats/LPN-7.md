---
    layout: threat
    ThreatCategory: "Network Threats: Bluetooth"
    ID: LPN-7
    Threat: "BlueStumbling - allows an adversary to locate and identify users based on their Bluetooth device addresses."
    ThreatOrigin: "Guide to Bluetooth Security (SP 800-121) [^28]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Disable Bluetooth when not in use":
            - 
        "Bluetooth 4.0 and later allows for the address used by a device to change frequently, preventing persistent association of a given address with any user. Note that addresses are derived from the Identity Resolving Key (IRK), which is shared with other devices during pairing, which allows previously paired devices to successfully resolve a temporary address to a trusted device. See __Security, Bluetooth Smart (Low Energy)__ [^38]":
            - 
---
