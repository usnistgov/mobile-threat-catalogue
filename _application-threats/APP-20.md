---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-20
Threat: App evades vetting by loading malicious code at runtime
ThreatDescription: Mobile apps may evade app vetting by downloading and executing malicious app code after installation. On Android, external code can be loaded using the OS-provided API. On iOS, the ability to modify app code is a consequence of the Objective C runtime environment that apps execute within, which permits method definitions to be modified at runtime. As the malicious code would not be present when the app was submitted for review, it may evade detection as a malicious application.
ThreatOrigin:
  - Execute This! Analyzing Unsafe and Malicious Dynamic Code Loading in Android Applications [^240]
  - 'Jekyll on iOS: When Benign Apps Become Evil [^111]'
ExploitExample:
  - Android Hax [^100]
  - Hot or Not? The Benefits and Risks of iOS Remote Hot Patching [^241]
  - Method Swizzling [^242]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Use application threat intelligence data about potential abuse of dynamic code execution associated with apps installed on COPE or BYOD devices
    Mobile Device User:
      - Use Android Verify Apps feature to identify potentially harmful apps.
title: APP-20
---
