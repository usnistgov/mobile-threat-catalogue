---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-4
    Threat: "Need to use a known-vulnerable app or device"
    ThreatDescription: "Organizations or individual users may develop and rely upon specific apps or devices to complete necessary work. Knowledge of a serious vulnerability affecting such an app or device increases the risk associated with using it to accomplish that work. However, the impact of being unable to complete the work as a result of abstaining from use of the app or device, may be unacceptable."
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
