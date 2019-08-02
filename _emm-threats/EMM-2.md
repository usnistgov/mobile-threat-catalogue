---
layout: threat
ThreatCategory: Enterprise Mobility
ID: EMM-2
Threat: Unauthorized access to EMM/MDM administrative console, for instance by exploiting EMM/MDM vulnerabilities
ThreatOrigin: The Security of MDM Systems[^3]
ExploitExample: The Security of MDM Systems[^3]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Ensure that strong authentication methods are enabled for access to the administrative console.
      - To prevent compromise of other administrator credentials from granting unauthorized access to EMM solutions, create distinct administrative credentials for EMM administrators.
      - Configure EMM solutions to use multi-factor authentication mechanisms for remote EMM/MDM administration sessions.
      - Audit administrative actions within EMM/MDM systems to enable detection of unauthorized access or actions
      - Employ application vetting processes on prospective EMM/MDM solutions to reduce the risk attackers can gain unauthorized access to administrative functions.
      - To prevent an attacker with unauthorized administrative access from activating sensitive features, such as remote full-wipe of devices, configure EMM solutions to with workflows that require authorization by multiple administrators prior to executing such actions.
      - To limit the functions available to an attacker with unauthorized administrative access, divide administrative responsibilities across distinct administrator roles or accounts.
title: EMM-2
---
