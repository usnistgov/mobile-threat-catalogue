---
layout: threat
ThreatCategory: 'Authentication: User to Device'
ID: AUT-1
Threat: Unauthorized disclosure of sensitve data displayed on device lock screen
ThreatDescription: When notification features are enabled for a device and mobile app, any sensitive information contained in a notification may be displayed on screen, even when the device is locked. An attacker with proximity to a locked device may gain unauthorized access to that information. Additional device features, such as voice-operated assistants (e.g., Siri, Cortana) may also allow an attacker with physical or voice access to a locked device to access sensitive information, such as contacts or reminders.
ThreatOrigin: About the security content of iOS 10.3 [Apple-1]
ExploitExample: How hackers can access iPhone contacts and photos without a password [^129]
CVEExample:
  - CVE-2017-2397
  - CVE-2017-2399
  - CVE-2017-2452
PossibleCountermeasures:
    Mobile Device User:
      - To limit opportunity for lockscreen bypass attacks, strongly secure mobile devices when not directly attended.
      - To reduce the success of lockscreen bypass exploits, ensure mobile OS security updates are installed in a timely manner
      - To reduce the potential that sensitive information is displayed on the lock screen, use mobile OS settings to disable access to notification features for apps that may receive sensitive content, or configure such notifications to only display when the device is unlocked.
      - Use mobile OS settings or deploy MDM solutions that can effectively enforce policies to limit the data or services available while the device screen is locked (e.g., notifications, voice-operated assistants, camera)
    Enterprise:
      - To reduce the success of lockscreen bypass exploits, ensure mobile OS security updates are installed in a timely manner
      - Use mobile OS settings or deploy MDM solutions that can effectively enforce policies to limit the data or services available while the device screen is locked (e.g., notifications, voice-operated assistants, camera)
title: AUT-1
---
