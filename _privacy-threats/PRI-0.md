---
layout: threat
ThreatCategory: Behavior Tracking
ID: PRI-0
Threat: Tracking via Ultrasonic Beacons
ThreatDescription: ''
ThreatOrigin: Privacy Threats through Ultrasonic Side Channels on Mobile Devices [^Arp-1]
ExploitExample:
  - SilverPush Says It's Using Audio Beacons For An Unusual Approach To Cross-Device Ad Targeting [^Ha-1]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - Scrutinize apps that request access to the device microphone with an understanding that they may listen for and respond to ultrasonic beacons without user consent or knowledge.
      - To help identify mobile apps that respond to ultrasonic beacons and better inform decisions regarding their use on any mobile device, consult resources such as the AddOns Detector website.
      - To prevent apps that use ultrasonic beacons in a known and acceptible manner from potentially violating privacy when active outside their intended use (e.g., after leaving a store that uses beacons to offer targeted discounts), either block permission to the microphone, force-close, or disable the app when leaving its intended context.
    Enterprise:
      - To identify apps that may abuse access to the microphone to receive ultrasonic beacons and take action without user consent on managed devices, employ app-vetting services that can identify and notify users of potentially privacy-invasive behaviors.
    Mobile OS Developer:
      - To prevent apps from generating inaudible signals to relay ultrasonic beacons to other devices without user knowledge or consent, expand existing device resource usage and/or permission models to include controls that prevent apps from abusing the ability listen to or generate audio at ultrasonic frequencies.
    OEM Manufacturer:
      - To prevent apps from generating inaudible signals to relay ultrasonic beacons to other devices without user knowledge or consent, expand existing device resource usage and/or permission models to include controls that prevent apps from abusing the ability listen to or generate audio at ultrasonic frequencies.
title: PRI-0
rawID: 0
---
