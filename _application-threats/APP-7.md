---
    layout: threat-new
    ThreatCategory: Vulnerable Applications
    ID: APP-7
    Threat: "Insecurely exposed application components (e.g. exported Android broadcast receivers, services, activities, or content providers)"
    ThreatOrigin:
    ExploitExample:
        - "eBay for Android Content Provider Injection Vulnerability [^75]"
        - "Smishing Vulnerability in Multiple Android Platforms [^76]"
        - "Android SMS Spoofer [^77]"
        - "Content provider permission bypass allows malicious application to access data [^78]"
    CVEExample:
        - CVE-2016-2810
    PossibleCountermeasures:
        "Use app-vetting tools or services to identify apps that expose functionality to untrusted apps.":
            - Enterprise
        "Use personal/enterprise app separation features (e.g. Android for Work or Samsung KNOX Workspace) so that vulnerabilities in an enterprise app cannot be exploited by a personal app or vice versa.":
            - Enterprise
---
