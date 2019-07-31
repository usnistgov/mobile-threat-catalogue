---
layout: threat
ThreatCategory: NFC-based
ID: PAY-0
Threat: NFC Payment replay attacks
ThreatOrigin: 'iOS Security: iOS 9.3 and Later [^54]'
ExploitExample: Practical NFC peer-to-peer relay attack using mobile phones. [^11]
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To reduce opportunity for this attack, disable NFC when that feature is not in use.
      - To avoid this attack, do not activate - or if no longer in use, deactivate - native mobile payment features, such as Apple Pay.
      - To prevent this attack, ensure native payment services (e.g. Apple Pay) are configured to require user interaction to complete any contactless payment transaction.
---
