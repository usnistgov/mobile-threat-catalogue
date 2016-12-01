---
    layout: threat
    ThreatCategory: USSD
    ID: CEL-25
    Threat: "Unsafe interactions between USSD system and the browser, leading to autodial of unsafe USSD codes (e.g., factory reset)"
    ThreatOrigin:
    ExploitExample:
        - "Dirty USSD Code Could Automatically Wipe Your Samsung TouchWize Device (Updated) [^187]"
        - "Remote USSD Code Execution on Android Devices [^188]"
    CVEExample:
    PossibleCountermeasures:
        "Choose devices without a USSD software stack.":
            - Enterprises
            - Mobile Device User
        "Choose devices that will not execute USSD codes without user confirmation.":
            - Enterprise
            - Mobile Device User
---
