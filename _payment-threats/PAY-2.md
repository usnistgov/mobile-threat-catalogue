---
layout: threat
ThreatCategory: NFC-based
ID: PAY-2
Threat: Unauthorized Mobile Payment Usage
ThreatOrigin: The Weak Link in Apple Pay's Strong Chain is Bank Verification. Who's to Blame? [^14]
ThreatDescription: Adversaries that are able to enroll credit or debit cards in mobile payment systems without the cardholder's authorization could use the card and charge to it without the cardholder's knowledge.
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - To reduce the time to detection for unauthorized enrollment in mobile payment services, use credit monitoring services to monitor credit card accounts for unauthorized changes.
      - To prevent an attacker from bypassing holder-to-bank authentication to achieve card enrollment, configure payment services to use multi-factor authentication to enroll the user's card into a mobile payment service.
      - 'As one method of enrollment into Apple Pay requires the attacker to provide the CVV, use strong physical security mechanisms to prevent unauthorized disclosure of the CVV. See iOS Security: iOS 9.3 and Later [^54]'
      - 'Follow general guidelines to protect credit card info: When conducting online transactions or accessing banking sites online, never access the URL from a link in an email or SMS/MMS; always type the URL directly into the location bar.'
      - Verify the browser indicates the session is secured with HTTPS before authenticating to a banking site or making online payments to vendors.
      - To prevent attackers from obtaining authentication credentials or account details for payment systems, never access banking sites from public or untrusted systems, as these may have been infected with malware designed to steal authentication credentials or credit card information.
title: PAY-2
rawID: 2
---
