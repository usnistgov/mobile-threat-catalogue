---
layout: threat
ThreatCategory: In-app Purchases
ID: PAY-4
Threat: Accidental In-App Purchase
ThreatOrigin:
ThreatDescription: Many apps offer in-app purchases. Depending on a user's purchase settings, some of these purchases can be executed with one or two clicks, making accidental purchases probable.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - If the use of enterprise apps that support in-app purchases is authorized, consider the use of EMM/MDM solutions that offer policy settings to require user authentication for each access to the native app store.
    Mobile Device User:
      - Configure settings for native app store purchases on the device so that each purchase requires successful authentication. Alternatively, only enable the bypassing of authentication for purchases during a limited period following a successful authentication to the app store (e.g. within 15 minutes).
title: PAY-4
rawID: 4
---
