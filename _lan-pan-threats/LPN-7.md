---
    layout: threat
    ThreatCategory: "Network Threats: Bluetooth"
    ID: LPN-7
    Threat: "BlueStumbling - allows an adversary to locate and identify users based on their Bluetooth device addresses."
    ThreatOrigin: "Guide to Bluetooth Security (SP 800-121) [^28]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "To reduce opportunity for this attack, disable Bluetooth when that feature is not in use":
            - Mobile Device User
        "To increase the complexity of this attack, consider the use of devices that support Bluetooth 4.0 and later. Bluetooth 4.0 allows for the address used by a device to change frequently, preventing persistent association of a given address with any user. See __Security, Bluetooth Smart (Low Energy)__ [^38]":
            - Mobile Device User
            - Enterprise
        "As pairing with an attacker-controlled device greatly increases the success of this attack, never authorize an unanticipated pairing request.":
            - Mobile Device User
        "As interception of pairing messages facilitates this attack, when pairing devices, observe physical security, such as pairing devices in a secure location outside of which, the ability of an attacker to intercept Bluetooth messages is remote.":
            - Mobile Device User
---
