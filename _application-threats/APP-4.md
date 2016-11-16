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
        "Use iOS and Android runtime permission features to remove risky permissions (e.g. GPS access, contact list access, etc.) from unsupported apps or apps with known vulnerabilities.":
            - Mobile Device User
            - Enterprise
        "Use MAM solutions to detect vulnerable apps and prevent access to enterprise resources while the app is installed.":
            - Enterprise
        "Use MAM solutions to forcefully disable vulnerable apps until a patch is available and installed.":
            - Enterprise
        "Use MAM solutions to temporarily revoke access to sensitive device sensors or OS-provided services.":
            - Enterprise
        "Uninstall vulnerable apps from the device. Once a patched version is available for download, redownload and install the app.":
            - Mobile Device User
---
