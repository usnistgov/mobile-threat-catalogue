---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-37
Threat: App entices user to perform hidden actions in another app
ThreatDescription: This threat primarily affects Android devices prior to 6.0, in which an app could abuse Accessibility Services to display false graphical interfaces that overlay another app. The displayed app can relay user input to the overlayed app, and by creating an interface that leads the user to interact with specific areas of the device screen in a certain way (e.g. pretends to be a game), the user unknowingly carries out actions in the hidden app. The impact of this threat varies according to the sensitivity of the actions the user is enticed to perform, but could potentially be any action available through the user interface of the mobile OS or installed apps.
ThreatOrigin:
  - '"Accessibility Clickjacking" - The Next Evolution in Android Malware that Impacts More Than 500 Million Devices [^YAmit1]'
  - Android ransomware variant uses clickjacking to become device administrator [^M-Zhang-1]
ExploitExample:
  - Android.Lockdown.E [^Symantec-1]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To detect if an unauthorized app has access to restricted functionality, such as Device Administrator or Accessibility Services, use device settings to review permissions and identify any app for which that functionality is not authorized.
      - On Android 6.0 and later, use device settings to revoke access to unauthorized services, such as Device Administrator or Accessibility Services. On earlier versions, permissions cannot be individually revoked; instead, the app must be uninstalled.
      - To prevent this attack, use Android 5.0 and later devices, which does not allow apps to appear above any system dialogs used to grant permissions.
    Enterprise:
      - To prevent this attack, use Android 5.0 and later devices, which does not allow apps to appear above any system dialogs used to grant permissions.
title: APP-37
rawID: 37
---
