---
layout: threat
ThreatCategory: Physical Access
ID: PHY-2
Threat: Attack via a connection from an untrusted or compromised mobile device to a PC
ThreatOrigin: Exploiting Smart-Phone USB Connectivity for Fun and Profit [^143]
ExploitExample: New Malware Tries to Infect Android Devices Via USB Cable [^232]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - When charging a device, avoid connecting mobile devices directly to computers, and prefer the use of simple corded chargers obtained directly from the device vendor.
      - To prevent some attacks over USB connectivity, disable USB debugging on Android devices when that feature is not in use.
      - To reduce the opportunity for an attacker to directly connect a device to a malicious computer, use strong physical security when a device is being left directly unattended (e.g., lock it in a secure container).
      - To prevent some attacks over USB connectivity, ensure the device has an unlock code set and is explicitly locked when being left directly unattended.
---
