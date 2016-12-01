---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-0
    Threat: Passive network eavesdropping on cleartext application or device traffic
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
    PossibleCountermeasures:
        "Implement secure communications in apps. On iOS, use the App Transport Security feature. On Android, opt out of the use of Cleartext traffic.":
            - Mobile App Developer
        "App vetting tools/services that can detect the use of cleartext traffic in mobile apps.":
            - Enterprise
---
