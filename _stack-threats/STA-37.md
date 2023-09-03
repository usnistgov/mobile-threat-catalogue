---
layout: threat
ThreatCategory: USIM / SIM / UICC security
ID: STA-37
Threat: Power Glitching
ThreatDescription: Power glitching microprocessors are designed to operate from a stable voltage wherein interruptions of the power supply are likely to crash running applications or reset the circuit. A power glitch will affect both the stored and the threshold values. Different internal capacities will cause the values to be influenced differently, possibly resulting in a misinterpretation of the actual value.
ThreatOrigin: A Review of Smartcard Security Issues [^212]
ExploitExample: Implementing Practical Electrical Glitching Attacks[^309]

CVEExample:CVE-2020-35553

PossibleCountermeasures: {
Mobile App Developer
The rigid use of sensors for voltage, frequency and temperature is the most common strategy against power glitching attacks.
Software and application countermeasures implemented to detect and recover from fault injection
Checking the flow decisions and cryptographic results carry out the fault detection}
title: STA-37
rawID: 37
---
