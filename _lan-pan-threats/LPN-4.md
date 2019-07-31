---
layout: threat
ThreatCategory: 'Network Threats: Wi-Fi'
ID: LPN-4
Threat: Client MAC address tracking
ThreatOrigin: IEEE 802 Privacy Threat Analysis [^22]
ThreatDescription: When probing for available Wi-Fi networks, mobile devices transmit their MAC address. Persistent use of a single MAC address readily enables physical tracking of a specific device by listening or probing for messages that contain its associated MAC address. As a result, most mobile OS added support for some implementation of MAC address randomization, such that a device generates a new MAC address when establishing communication with an unknown Wi-Fi network. Note, however, that once an attacker has associated a target device with the MAC address it uses on a given Wi-Fi network, successful SSID spoofing may trigger the device to attempt to connect, thereby revealing a traceble MAC address.
ExploitExample:
  - How Stores Use Your Phone's Wi-Fi to Track Your Shopping Habits [^23]
  - 'Attention, Shoppers: Store is Tracking Your Cell [^24]'
  - FTC Goes After Firm for Tracking Shoppers' Cell Phones [^25]
  - How Retailers Use Smartphones to Track Shoppers In the Store [^26]
CVEExample:
PossibleCountermeasures:
    Mobile Device Owner:
      - To increase the complexity of MAC address tracking, procure mobile devices with OS and hardware versions that support MAC address randomization. Starting in Android 6.0, randomized MAC addresses are used for Wi-Fi and Bluetooth scans. See __Android 6.0 Changes__. [^35] In iOS 8, Wi-Fi scanning behavior changed to use random, locally administrated MAC addresses. See User Privacy on iOS and OS X. [^36] Windows 10 and later verions support MAC address randomization. [^251]
    Enterprise:
      - To increase the complexity of MAC address tracking, procure mobile devices with OS and hardware versions that support MAC address randomization. Starting in Android 6.0, randomized MAC addresses are used for Wi-Fi and Bluetooth scans. See __Android 6.0 Changes__. [^35] In iOS 8, Wi-Fi scanning behavior changed to use random, locally administrated MAC addresses. See User Privacy on iOS and OS X. [^36] Windows 10 and later verions support MAC address randomization. [^251]
    Mobile Device User:
      - To reduce traceable signals from a mobile device, place it airplane mode when wireless communication is not in use. In this mode, most devices will disconnect from any current Wi-Fi network, and not attempt to join any Wi-Fi networks until reenabled.
      - To minimize traceable signals from a mobile device, power it off when not in use.
---
