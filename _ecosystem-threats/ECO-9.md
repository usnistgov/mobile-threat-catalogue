---
layout: threat
ThreatCategory: Mobile OS & Vendor Infrastructure
ID: ECO-9
Threat: A brute-force attack parallelized across many computers could theoretically be attempted on the authentication data and cryptographic keys  (passwords, etc.) stored in the cloud.
ThreatOrigin: 'iOS Security: iOS 9.3 or later [^54]'
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To reduce the probability an attacker will successfully launch a brute-force attack against cloud-based cryptographic keys, periodically change authentication credentials, digital certificates, or any cryptographic secret used to derive keys that protect access to the account or data associated with it.
      - As the strength of cryptographic mechanisms generally increases relative to that of any passwords or cryptographic secrets used, prefer or enforce the use of stronger passwords (increasing length, complexity, and randomness).
    Enterprise:
      - To reduce the probability an attacker will successfully launch a brute-force attack against cloud-based cryptographic keys, periodically change authentication credentials, digital certificates, or any cryptographic secret used to derive keys that protect access to the account or data associated with it.
      - As the strength of cryptographic mechanisms generally increases relative to that of any passwords or cryptographic secrets used, prefer or enforce the use of stronger passwords (increasing length, complexity, and randomness).
---
