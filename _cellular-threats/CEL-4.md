---
    layout: threat
    ThreatCategory: Cellular Air Interface
    ID: CEL-4
    Threat: "Preventing Emergency Phone Calls via Rogue Base station"
    ThreatOrigin:
        - "3G Security: Security Threats and Requirements (Release 4) [^165]"
        - "LTE Architecture Overview and Security Analysis (Draft NISTIR 8071) [^166]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Implement rogue base station detection.":
            - Original Equipment Manufacturer
        "Use bandband firmware that does not connect to a base station unless it has been verified as a legitimate device operated as part of a trusted mobile network.":
            - Original Equipment Manufacturer
        "Use baseband firmware that does not support deprecated communciation protocols that are more vulnerable to attack (e.g., 2G or 3G connections).":
            - Original Equipment Manufacturer
---
