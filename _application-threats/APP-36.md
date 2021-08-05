---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-36
Threat: Pre-Installed Apps Invading Privacy
ThreatDescription: Mobile devices with cellular capability must generally be registered with a cellular carrier, and many devices are sold pre-configured to operate with a given carrier so users can have a fully functional device by the end of the initial purchase and activation at a retailer. As part of the configuration, the device may come with carrier-specific apps pre-installed, which may not be removable by the user. Because these apps come pre-installed, they may also may be granted implicit permission to access device resources without explicit knowledge or consent of the device owner. Privacy violations by such pre-installed apps may be more difficult to mitigate than by user-installed apps, which can be uninstalled at any time.
ThreatOrigin:
ExploitExample:
  - "Device Squad: The story behind the FTC's first case against a mobile device maker [^113]"
  - 'Certifi-gate: Hundreds of Millions of Android Devices Could Be Pwned [^114]'
  - Samsung Keyboard Security Risk Disclosed [^115]
CVEExample:
  - CVE-2015-4640
  - CVE-2015-4641
PossibleCountermeasures:
    Mobile Device User:
      - To mitigate the potential for abuse or exploits by pre-installed apps, ensure that devices have the latest security updates installed.
      - Uninstall pre-installed apps that are not in use.
      - For pre-installed apps that cannot be uninstalled, revoke access to device sensors and OS-provided services.
      - For pre-installed apps that cannot be uninstalled, disable the app so that it cannot be launched.
    Enterprise:
      - To mitigate the potential for abuse or exploits by pre-installed apps, ensure that devices have the latest security updates installed.
      - Deploy MAM solutions to identify and block access to devices running high-risk pre-installed apps.
      - Deploy MAM or container solutions to provide additional separation between trusted and untrusted pre-installed apps to mitigate the potential for pre-installed apps to violate the privacy of user actions performed within trusted apps.
title: APP-36
rawID: 36
---
