---
layout: threat
ThreatCategory: Supply Chain
ID: SPC-9
Threat: An adversary with access privileges within the software development environment and to associated tools, including the software unit/component test system and the software configuration management system, can hide malicious code in custom software.
ThreatOrigin: Supply Chain Attack Framework and Attack Patterns [^142]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Require test results to be digitally signed by both the testing component and a credential uniquely associated with the test operator to enforce non-repudiation
      - Enforce strict access control and auditing for software testing systems to enable effective auditing of tests
      - Design testing processes such that individuals responsible for testing do not know the destination of a tested component to prevent sabotage of a specific critical function, location, device, or organizational operation
      - Design testing processes that use at least two independent testers/processes/tools and compare test results for consistency
      - For mission-critical components, randomly test the same component multiple times using different testers/processes/tools and compare test results for consistency
title: SPC-9
---
