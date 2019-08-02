---
layout: threat
ThreatCategory: Mobile Operating System
ID: STA-43
Threat: Secrets in app process memory can be read by a malicious app.
ThreatDescription: All operating systems intend to separate normally executed processes (e.g. excepting debuggers or similar environments that were specifically designed otherwise), thereby preventing one user-level process from accessing the memory allocated to another process in any way. Vulnerabilities in the design or implementation of the mobile OS, kernel, or the underlying computational hardware (e.g. CPU), may allow a malicious process to access memory locations allocated to another process. As a result, the attacker may be able to extract secrets (e.g. cryptographic keys, sensitive documents) from other processes, to potentially include the OS services or the kernel itself.
ThreatOrigin:
  - 'Project Zero: Reading privileged memory with a side-channel [^J-Horn-1]'
ExploitExample:
  - 'Spectre Attacks: Exploiting Speculative Execution [^P-Kocher-et-al-1]'
  - Meltdown [^M-Lipp-et-al-1]
CVEExample:
  - CVE-2017-5754
  - CVE-2017-5753
  - CVE-2017-5715
PossibleCountermeasures:
    Mobile App Developer:
      - To reduce the opportunity for an attacker to compromise the confidentiality of secrets in process memory, the memory location allocated to any secrets, such as cryptographic keys, should be explicitly overwritten as soon as its contents are no longer in use.
      - To reduce the opportunity for an attacker to compromise the confidentiality of secrets in process memory, secrets (e.g. cryptographic keys) should not be read into memory until they are needed as input to computations.
    Enterprise:
      - To reduce the opportunity for an attacker to leverage any underlying vulnerability in the mobile OS or computing hardware, apply OS security updates in a timely fashion.
    Mobile Device User:
      - To reduce the opportunity for an attacker to leverage any underlying vulnerability in the mobile OS or computing hardware, apply OS security updates in a timely fashion.
title: STA-43
---
