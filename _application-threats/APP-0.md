---
    layout: threat-new
    ThreatCategory: Vulnerable Applications
    ID: APP-0
    Threat: "Passive eavesdropping of unencrypted app traffic"
    ThreatDescription: "Transmission of app or device data unencrypted allows any attacker with access to the physical media channel (e.g. proximity to wireless radios) to intercept that data. Even if the data is not directly sensitive, it may in combination with other data, allow an attacker in infer sensitive information or conduct other attacks against the user or device (e.g. geo-physical tracking, social engineering, phishing, watering-hole attacks)."
    ThreatOrigin:
    ExploitExample:
        - "Remote Code Execution as System User on Samsung Phones [^55]"
        - "Insecurity Cameras and Mobile Apps: Surveillance or Exposure? [^56]"
        - "Team Joch vs. Android [^57]"
        - "CBS App & Mobility Website [^116]"
        - "The Fork [^117]"
        - "Card Crypt [^121]"
    CVEExample:
        - CVE-2015-4640
        - CVE-2017-2412
    PossibleCountermeasures:
        Mobile Device User:
            - mit1
        Mobile App Developer:
            - mit2
        Enterprise:
            - mit3
            - mit4
    title: APP-0
---
