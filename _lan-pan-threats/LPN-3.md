---
layout: threat
ThreatCategory: 'Network Threats: Wi-Fi'
ID: LPN-3
Threat: Malicious Wi-Fi networks masquerading as legitimate Wi-Fi networks (hotspot hijacking)
ThreatOrigin: Guidelines for Securing Wireless Local Area Networks (WLANs) (SP 800-163) [^16]
ExploitExample: FCC Fines Marriott $600,000 for Jamming Hotel Wi-Fi [^21]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - When choosing to connect to an unencrypted and potentially spoofed Wi-Fi network, to reduce the probability of connecting to a malicious network, verify the network appears consistently geolocated with the host (e.g., on the premises), and if possible, verify with a representative that the intended Wi-Fi network is the one they host.
      - To decrease the probability of connecting to a spoofed Wi-Fi network, configure devices to not automatically connect to unknown Wi-Fi networks, and to 'forget' public networks once they are no longer in use.
    Enterprise:
      - To greatly decrease the probability of this attack, only allow mobile devices to connect to authorized Wi-Fi networks that use WPA2 encryption with a strong pre-shared key (for personal mode).
title: LPN-3
---
