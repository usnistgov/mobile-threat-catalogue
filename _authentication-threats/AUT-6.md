---
layout: threat
ThreatCategory: 'Authentication: User to Device'
ID: AUT-6
Threat: 'Android: Spoofing of NFC token or Bluetooth devices that automatically unlock the mobile device, or keeps a mobile device unlocked (e.g., Android Smartlock)'
ThreatOrigin: Which is the most secure Android Smart Lock? [^131]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - As appropriate, use MDM solutions that enable policies to prevent features that would automatically unlock mobile devices or prevent mobile devices from otherwise locking based on your existing security policy, such as after a period of user inactivity.
    Mobile Device User:
      - To reduce the potential than communication from a paired device can be successfully spoofed, observe physical security measures to prevent interception of communication during the initial pairing of devices (e.g. in a secure location outside of which, interception or manipulation of NFC or Bluetooth signals is limited.
      - To reduce the potential an attacker can, post-pairing, spoof a paired device, maintain strong physical security over it when being left directly unattended (e.g., secure it in a locked container).
      - To reduce the potential an attacker acquires your device in an unlocked but unattended state or can acquire the pair of devices, avoid pairing your mobile device with a device that is typically already located in proximity to it, such as a keyboard or headset.
      - Avoid pairing with Bluetooth 2.0 or earlier devices, or those that otherwise only support Legacy Pairing, which is vulnerable to eavesdropping attacks that greatly facilitates the spoofing a trusted device.
title: AUT-6
rawID: 6
---
