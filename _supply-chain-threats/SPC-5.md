---
layout: threat
ThreatCategory: Supply Chain
ID: SPC-5
Threat: Malware Embedded in Critical Component
ThreatOrigin: Supply Chain Attack Framework and Attack Patterns [^142]
ThreatDescription: An adversary with access to hardware procurement, maintenance, or upgrade control can embed malware in a critical component.[^142]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Obtain device measurements for comparison to normal ranges (e.g., temperature, timing, EM radiation, power consumption) to detect anomalous behavior.
      - Test hardware to verify it functions as expected (e.g. known inputs yield correct outputs) prior to placing or replacing the device into the production environment
title: SPC-5
rawID: 5
---
