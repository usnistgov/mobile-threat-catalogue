---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-4
    Threat: "Business or personal need to use a vulnerable app or device for which a patch is not yet available or had not yet been installed"
    ThreatOrigin:
    ExploitExample:
        - "Stumping the Mobile Chipset [^70]"
    CVEExample:
        - CVE-2016-5340
        - CVE-2016-2059
        - CVE-2016-2503
        - CVE-2016-2504
    PossibleCountermeasures:
        - "Monitor devices for apps that are no longer present in the app stores and hence are no longer supported by the developer."
        - "Use iOS and Android runtime permission features to remove risky permissions (e.g. GPS access, contact list access, etc.) from unsupported apps or apps with known vulnerabilities."
        - "Monitor devices for apps with known vulnerabilities and require enterprise users remove the app (blacklist the app)."
---
