---
    layout: threat
    ThreatCategory: NFC-based
    ID: PAY-2
    Threat: "Credit or debit card enrolled into mobile payment without cardholder authorization"
    ThreatOrigin: "The Weak Link in Apple Pay\'s Strong Chain is Bank Verification. Who\'s to Blame? [^14]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "To reduce the time to detection for unauthorized enrollment in mobile payment services, use credit monitoring services to monitor credit card accounts for unauthorized changes.":
            - Mobile Device User
        "To prevent an attacker from bypassing holder-to-bank authentication to achieve card enrollment, configure payment services to use multi-factor authentication to enroll the user\'s card into a mobile payment service.":
            - Mobile Device User
        "As one method of enrollment into Apple Pay requires the attacker to provide the CVV, use strong physical security mechanisms to prevent unauthorized disclosure of the CVV. See iOS Security: iOS 9.3 and Later [^54]":
            - Mobile Device User
        "Follow general guidelines to protect credit card info: When conducting online transactions or accessing banking sites online, never access the URL from a link in an email or SMS/MMS; always type the URL directly into the location bar.":
            - Mobile Device User
        "Verify the browser indicates the session is secured with HTTPS before authenticating to a banking site or making online payments to vendors.":
            - Mobile Device User
        "To prevent attackers from obtaining authentication credentials or account details for payment systems, never access banking sites from public or untrusted systems, as these may have been infected with malware designed to steal authentication credentials or credit card information.":
            - Mobile Device User
---
