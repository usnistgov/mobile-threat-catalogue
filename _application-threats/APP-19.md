---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-19
Threat: Audio or Video Surveillance
ThreatDescription: "Starting with Android 6.0, access to the microphone or camera is considered a dangerous permission and each recording attempt must be granted permission by the user at runtime. Similarly, the iOS security model only allows apps granted permission by the user to access the camera or microphone while running in the foreground. Therefore, an app operating in these or newer environments cannot abuse public APIs to initiate a recording outside the user's knowledge.\nThis threat can still be realized following successful exploits of OS vulnerabilities that ultimately provide a malicious app with unauthorized access to those resources (e.g. bypass access control on APIs or direct access to the hardware)."
ThreatOrigin:
ExploitExample:
  - Malware designed to take over cameras and record audio enters Google Play [^99]
  - An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Deploy MDM solutions that support geo-fencing of BYOD devices with policies that disable device sensors (e.g., camera, microphone) when the device is being operated in sensitive locations.
      - Deploy MDM solutions for COPE devices that support disabling device sensors (e.g. camera, microphone) that can be used for recording of nearby activity.
      - Deploy MAM solutions for COPE devices that support selectively enabling device sensors (e.g. camera, microphone) for a whitelist of trusted enterprise applications that require those functionalities.
      - Use application threat intelligence data about potential abuse of access to device sensors associated with apps installed on COPE or BYOD devices
    Mobile Device User:
      - Use Android Verify Apps feature to identify apps that may abuse access to sensor data to record nearby activity.
    Mobile App Developer:
      - To reduce risks of using the app, only request access to the minimal set of shared data stores (e.g., contacts, calendar), OS services (e.g. location services), and device sensors (e.g. camera, microphone) necessary for the app to provide functionality.
title: APP-19
rawID: 19
---
