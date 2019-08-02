---
layout: threat
ThreatCategory: Supply Chain
ID: SPC-10
Threat: An adversary with access to 3rd party bundling processes and tools can implant malicious software in a system during the hardware-software integration phase.
ThreatOrigin: Supply Chain Attack Framework and Attack Patterns [^142]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Test systems that contain newly integrated or updated software components to detect incorrect function or anomalous behavior prior to production use
      - Obtain direct from the software developer a list of files changed by the installation or upgrade process, and if possible, strong cryptographic hashes for file updates that are configuration-independent and should produce known values
      - Use fine-grained role-based access control mechanisms and user/service roles that reduce the potential that malicious installation or upgrade packages can introduce malware outside of files and directories allocated to the associated software
      - Scan systems with newly integrated or updated software components for indicators of compromise prior to production use
title: SPC-10
---
