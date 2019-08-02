---
layout: threat
ThreatCategory: Supply Chain
ID: SPC-4
Threat: A software or firmware programmer with access to the configuration control system can introduce malicious logic into software or microelectronics during coding and/or logic-bearing component development or update/maintenance.
ThreatOrigin: Supply Chain Attack Framework and Attack Patterns [^142]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Enforce strict access control and auditing for the configuration control system to enable effective auditing of any unauthorized changes to configuration settings.
      - Use configuration management tools that can validate that current configuration settings meet policy requirements
      - Test software and microelectronics to verify their functionality conforms to expected behavior and operates within normal tolerances (e.g. timing, temperature, power consumption, EM emissions) both after development and maintenance prior to placing or returning the component to the production environment
title: SPC-4
---
