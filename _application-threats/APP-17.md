---
    layout: threat-new
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-17
    Threat: "Captured text messages received without user authorization, for example to obtain authentication codes sent as part of multi-factor authentication"
    ThreatOrigin: "Dissecting Android Malware: Characterization and Evolution [^85]"
    ExploitExample:
        - "New Android Trojan xBot Phishes Credit Cards and Bank Accounts, Encrypts Devices for Ransom [^96]"
        - "How Anywhere Computing Just Killed Your Phone-Based Two-Factor Authentication [^97]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that may intercept SMS messages.":
            - Mobile Device User
        "Perform application vetting to identify inappropriate behaviors by apps including interception of SMS messages.":
            - Enterprise
        "Avoid the use of applications that rely on SMS messages for 2-factor authentication.":
            - Enterprise
            - Mobile Device User
        "When stronger 2-factor authentication methods are available, such as FIDO U2F tokens, educate enterprise users to avoid the use of SMS messages for configuring 2-factor authentication for enterprise applications.":
            - Enterprise
        "Use application threat intelligence data to identify apps that increase risks associated with SMS message interception.":
            - Enterprise
        "Avoid the use of SMS messages for 2-factor authentication.":
            - Mobile App Developer
---
