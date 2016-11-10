---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-1
    Threat: "Man-in-the-middle eavesdropping on an application improperly authenticating server when connecting"
    ThreatOrigin: "Mobile Threat Protection: A Holistic Approach to Securing Mobile Data and Devices [^61]"
    ExploitExample:
        - "Why Eve and Mallory Love Android: An Analysis of Android SSL (In)Security [^62]"
        - "SMV-HUNTER: Large Scale, Automated Detection of SSL/TLS Man-in-the-Middle Vulnerabilities in Android Apps [^63]"
        - "How We Discovered Thousands of Vulnerable Android Apps in One Day [^65]"
    CVEExample:
        - "CVE-2016-3664"
        - "CVE-2014-5618"
    PossibleCountermeasures:
        - "Developer: Android Network Security Policy feature, certificate pinning."
        - "Developer: Ensure cryptographic protection for data in transit."
        - "Developer: Use App vetting tools/services or pen testing to detect these vulnerabilities in applications."
---
