---
layout: threat
ThreatCategory: Supply Chain
ID: SPC-13
Threat: The design and manufacture of critical hardware at targeted suppliers can be compromised.
ThreatOrigin: Supply Chain Attack Framework and Attack Patterns [^142]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Employ software integrity verification checks on firmware, which can be validated against a known-good value (e.g. brute-force resistant cryptographic hash of firmware image) to detect any modification
      - Obtain device measurements for comparison to normal ranges (e.g., temperature, timing, EM radiation, power consumption) to detect anomalous behavior in received components prior to production use.
---
