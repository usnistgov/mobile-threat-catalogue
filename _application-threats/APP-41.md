---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-41
Threat: App records audio by stealthily placing or answering phone calls
ThreatDescription: An attacker who can place or answer calls without the device user's knowledge could remotely record audio from within the vicinity of the device without directly accessing the device microphone.
ThreatOrigin:
  - An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]
ExploitExample:
  - An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To prevent data collection using the device microphone, install a protective cover over the device which reliably blocks sound from being picked up when features requiring use of the microphone are not in use. Alternatively, turn off the device or do not take it into areas in which audio collection is a main concern.
      - To reduce the potential for such an exploit for which a security patch is available, ensure OS security updates are installed in a timely fashion.
    Enterprise:
      - To reduce the potential for such an exploit for which a security patch is available, ensure OS security updates are installed in a timely fashion.
title: APP-41
---
