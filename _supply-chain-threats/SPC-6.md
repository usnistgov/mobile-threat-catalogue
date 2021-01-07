---
layout: threat
ThreatCategory: Supply Chain
ID: SPC-6
Threat: Improperly Vetted or Untested Malicious Microelectronics
ThreatOrigin: Supply Chain Attack Framework and Attack Patterns [^142]
ThreatDescription: An adversary with access to the hardware commodity procurement process can insert improperly vetted or untested malicious critical microelectronics components into the system during development.[^142]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Require that hardware components be tested for correct functionality and normal operation, and that the output of automated testing processes be digitally signed by the component that performed the test, and that the results are verified prior to acceptance of the tested component into the next stage of procurement, development, or deployment to reduce the likelihood an adversary can successfully introduce a malicious component that is not detected prior to use in production
title: SPC-6
rawID: 6
---
