---
layout: threat
ThreatCategory: 'Network Threats: Wi-Fi'
ID: LPN-2
Threat: Eavesdropping of traffic over unencrypted or insufficiently encrypted (e.g. WEP) Wi-Fi networks
ThreatOrigin: Guidelines for Securing Wireless Local Area Networks (WLANs) (SP 800-163) [^16]
ExploitExample: Using the Fluhrer, Mantin, and Shamir Attack to Break WEP [^19]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To reduce the opportunity for this attack, configure mobile devices to not automatically connect to untrusted and unsecure networks.
      - To mitigate eavesdropping over unencrypted Wi-Fi networks, use over-the-top encryption products that encrypt data prior to transmission off the device.
    Enterprise:
      - To reduce the probability of this attack, configure Wi-Fi networks to WPA2 in personal mode with a strong password (increased length, complexity, and randomness).
      - To further reduce the probability of this attack, configure Wi-Fi networks with WPA2 in enterprise mode with digital certificates.
      - To mitigate eavesdropping over unencrypted Wi-Fi networks, use over-the-top encryption products that encrypt data prior to transmission off the device.
      - To mitigate eavesdropping over unencrypted Wi-Fi networks, use VPN solutions to establish an encrypted tunnel.
title: LPN-2
rawID: 2
---
