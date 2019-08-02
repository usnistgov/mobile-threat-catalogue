---
layout: threat
ThreatCategory: Mobile Application Store
ID: ECO-10
Threat: Compromise leading to distribution of rogue / malicious applications
ThreatOrigin:
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - To decrease the probability that unvetted apps are malicious, prohibit users from sideloading apps or downloading apps from unofficial and unauthorized app stores
      - Use app threat intelligence data to identify malicious applications unknowingly distributed through official or unofficial application stores.
      - Use features such as Apple iOS Managed Apps, Android for Work, or Samsung KNOX Workspace that provide some level of separation between personal apps and enterprise apps to mitigate the impact of malicious behaviors.
      - Use app-vetting tools or services to determine if enterprise applications appear free of malicious behaviors before authorizing their installation.
      - Host vetted apps within a locally controlled repository of an application store, such as F-Droid [^158]
title: ECO-10
---
