---
layout: threat
ThreatCategory: Supply Chain
ID: SPC-3
Threat: An adversary with access to software processes and tools within the development or software support environment can insert malicious software into components during development or update/maintenance.
ThreatOrigin:
  - Supply Chain Attack Framework and Attack Patterns [^142]
  - Symantec Internet Security Threat Report 2016 [^110]
ExploitExample: XcodeGhost distributed a malicious version of Xcode (Apple''s developer tools) that automatically includes malicious code in compiled iOS apps.
CVEExample:
PossibleCountermeasures:
    Mobile App Developer:
      - App developers should ensure that development tools are obtained from a trusted source (e.g. directly from the vendor).
    Enterprise:
      - Only software digitally signed by a trusted developer should be used, and the integrity of software development installation packages should be verified prior to installation
      - Obtained software should be installed onto target operating systems in a known-good state (fresh install from verified installation media) in a test environment, which is then evaluated for any indicators of compromise prior to authorization of production use
title: SPC-3
---
