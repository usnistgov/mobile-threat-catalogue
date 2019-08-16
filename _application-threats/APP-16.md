---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-16
Threat: Sending premium SMS messages without user authorization
ThreatDescription: SMS messages were initially charged to a cellular subscriber's account on a per-message basis. However, some services use SMS messaging as a subscription or one-time payment method. The charge associated with the SMS message is placed on the cellular subscriber's account and collected along with standard cellular service fees. This model enables malicious app developers to potentially collude with premium SMS service providers to commit fraud against users. The subscriber is held responsible for the fraudulent charges by the cellular carrier. Early forms of this attack exploited the weak OS permission models that allowed apps to send premium SMS messages without user interaction, which prompted improvement by affected OS developers. Contemporary variants must instead exploit vulnerabilities in the mobile OS to send messages without user knowledge and consent.
ThreatOrigin: 'Dissecting Android Malware: Characterization and Evolution [^85]'
ExploitExample:
  - 'zSone, RogueSPPush, GGTracker malware described in Dissecting Android Malware: Characterization and Evolution [^85]'
  - 'Mkero: Android malware secretly subscribes victims to premium SMS services [^94]'
  - Chinese Android botnet 'netting millions' [^95]
  - Android Security 2015 Year In Review [^98]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - 'Ensure Android devices are running a recent version of Android, as starting in Android 4.2, user confirmation is needed before apps can send premium SMSs (source: https://source.android.com/security/enhancements/enhancements42.html).'
      - Perform application vetting to identify SMS fraud by apps including permission requests made by the apps.
      - Use application threat intelligence data about potential SMS fraud risks associated with apps installed on devices.
    Mobile Device User:
      - 'Ensure Android devices are running a recent version of Android, as starting in Android 4.2, user confirmation is needed before apps can send premium SMSs (source: https://source.android.com/security/enhancements/enhancements42.html).'
      - Use Android Verify Apps feature to apps that attempt to abuse SMS functionality.
title: APP-16
rawID: 16
---
