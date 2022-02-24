---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-0
    Threat: Eavesdropping on Unencrypted App Traffic
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
            - To use HTTPS for web servers that support both HTTP and HTTPS, prepend URLs entered into the browser location bar with 'https://'.
        Mobile App Developer:
            - Implement secure communications in apps. On iOS, use the App Transport Security feature. On Android, opt out of the use of Cleartext traffic.
        Enterprise:
            - Use app vetting tools/services that can detect the use of cleartext traffic in mobile apps before deployment within your organization.
            - To protect the confidentiality of enterprise data against passive interception, particularly when mobile devices may be connected to public networks (e.g. coffee shop Wi-Fi), deploy mobile VPN technologies to encapsulate potentially clear-text network traffic with a layer of strong encryption.
    title: APP-0
---
