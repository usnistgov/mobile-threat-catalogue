---
    layout: threat
    ThreatCategory: NFC-based
    ID: PAY-2
    Threat: "Credit or debit card enrolled into mobile payment without cardholder authorization"
    ThreatOrigin: "The Weak Link in Apple Pay\'s Strong Chain is Bank Verification. Who\'s to Blame? [^14]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Credit monitoring services can alert the user to unauthorized transactions and detect authorized enrollment into Apple Pay":
            -
        "Multi-factor authentication to all banking sites used will decrease the potential that an attacker can bypass holder-to-bank authentication and challenges required to enroll the user\'s card into a mobile payment service.":
            -
        "As one method of enrollment into Apple Pay requires the attacker to provide the CVV, use strong physical security mechanisms to prevent unauthorized disclosure of the CVV. See iOS Security: iOS 9.3 and Later [^54]":
            -
        "Follow general guidelines to protect credit card info: When conducting online transactions or accessing banking sites online, never access the URL from a link in an email or SMS/MMS; always type the URL directly into the location bar":
            -
        "Verify the browser indicates the session is secured with HTTPS before authenticating to a banking site or making online payments to vendors":
            -
        "Never access banking sites from public or untrusted systems, as these may have been infected with malware designed to steal authentication credentials or credit card information":
            -
---
