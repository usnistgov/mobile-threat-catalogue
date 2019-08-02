---
layout: threat
ThreatCategory: Isolated Execution Environments
ID: STA-11
Threat: Exploitation of vulnerability in code running within an isolated execution environment, leading to the ability to access data stored in environment (e.g. crypto keys) or access data stored within the primary OS (e.g. Android, iOS) itself.
ThreatDescription: Isolated execution environments, such as a Trusted Execution Environment, often run on a dedicated hardware chip. It has access to areas of physical memory that are restricted from the mobile operating system, which are often used to protect high-value cryptographic keys and other secrets. If a vulnerability in either the execution environment's operating system or a program executing under it is exploited, an attacker may gain access to these keys or be able to obtain the output from sensitive cryptographic operations that require them.
ThreatOrigin: Extracting Qualcomm's KeyMaster Keys - Breaking Android Full Disk Encryption [^209]
ExploitExample:
CVEExample:
  - CVE-2016-0825
  - CVE-2016-5349
PossibleCountermeasures:
    Mobile Device User:
      - To decrease the latency between availability and installation of security fixes for isolated execution environments, configure devices (potentially using EMM solutions) to automatically install security updates, or at a minimum, provide automated notification to the user that security updates are available for installation.
    Enterprise:
      - To decrease the latency between availability and installation of security fixes for isolated execution environments, configure devices (potentially using EMM solutions) to automatically install security updates, or at a minimum, provide automated notification to the user that security updates are available for installation.
      - To decrease the risk of persistent and unpatched vulnerabilities in isolated execution environments in deployed devices, consider acquiring mobile devices from vendors and carriers with a history of addressing and releasing security updates in a timely fashion.
    Original Equipment Manufacturer:
      - Use TEE OS that provide integrity protections over trustlets, such as verification of digital signatures on installed trustlets, such as Trusty OS. [^222]
title: STA-11
---
