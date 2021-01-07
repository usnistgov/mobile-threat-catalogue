---
layout: threat
ThreatCategory: 'Network Threats: Wi-Fi'
ID: LPN-1
Threat: Wi-Fi SSID Tracking
ThreatOrigin: 'CAPEC-163: Wi-Fi SSID Tracking (Version 2.8) [^18]'
ThreatDescription: Once an adversary is able to associate a Wi-Fi SSID with a specific user, the attacker can scan for that SSID in the future to track the user.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To prevent an attacker from persistently associating a tracked mobile device with the SSID of a known network (e.g., home or enterprise Wi-Fi), frequently change the SSID to a new and unrelated value.
    Mobile Device User:
      - To reduce the number of SSIDs available to an attacker to track a specific device, configure it to not attempt to automatically connect or notify the user of available Wi-Fi networks.
      - To further reduce the number of SSIDs available to an attacker to track a specific device, configure network settings to 'forget' Wi-Fi networks, particularly infrequently used public Wi-Fi networks.
      - To greatly reduce the number of messages available to an attacker to actively track a specific device, disable Wi-Fi whenever networked services are not in use.
title: LPN-1
rawID: 1
---
