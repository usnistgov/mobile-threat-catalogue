---
    layout: threat
    ThreatCategory: "Network Threats: NFC"
    ID: LPN-12
    Threat: "Man in the middle by relaying NFC packets"
    ThreatOrigin: "Implementation and Analysis of a Practical NFC Relay Attack Example [^31]"
    ExploitExample: "Demo: NFCGate - An NFC Relay Application for Android [Extended Abstract] [^32]"
    CVEExample:
    PossibleCountermeasures:
        "In iOS 9.x, when Apple Pay transactions are initiated, the device user must successfully authenticate to TouchID before payment information is transmitted. Additionally, if there are multiple credit cards associated with Apple Pay, the user may be prompted to choose which card to use for the transaction. Both require user interaction that would prevent a relay attack against a user not currently interacting with the device who also fulfills these requirements. Other mobile device OS/OEMs may provide NFC payment methods that include similar requirements to prove user presence and intention to complete the transaction.":
            - 
        "Disable NFC or the associated pay apps when not actively engaged in NFC payment transactions":
            - 
        "Disable or uninstall any NFC payment apps you do not use":
            - 
---
