---
layout: threat
ThreatCategory: USIM / SIM / UICC security
ID: STA-21
Threat: SIM Software Vulnerabilites
ThreatOrigin:
ThreatDescription: Applications on the SIM card can be remotely configured by operators by sending a special class of SMS. Each application on a SIM card is configured with a corresponding minimum security level (MSL). Attackers can only exploit applications where the MSL is set to zero. An unprivileged user is normally gained through attacking a system and exploiting an unprivileged process. If an application with abuse potential is present on the SIM card, it can instruct a mobile phone to do various things, such as make a call, send an SMS, get location, prompt the user for input, establish a TCP/TLS connection, or open a browser on a specific URL.[^307]
ExploitExample: Spoofing and intercepting SIM commands through STK framework [^219]
CVEExample: CVE-2015-3843
PossibleCountermeasures: {}
title: STA-21
rawID: 21
---
