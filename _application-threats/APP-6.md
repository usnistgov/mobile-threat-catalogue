---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-6
    Threat: "Use of insecure third-party library (e.g. advertisement library, library with known vulnerabilities)"
    ThreatOrigin:
        - "A Pattern for Remote Code Execution using Arbitrary File Writes and MultiDex Applications [^73]"
        - "Unsafe Exposure Analysis of Mobile In-App Advertisements [^74]"
    ExploitExample:
    CVEExample:
        - CVE-2014-9333
    PossibleCountermeasures:
        - "App vetting or threat intelligence services that detect use of libraries with known vulnerabilities"
        - "Automated app store checks for use of libraries with known vulnerabilities (e.g. the Google Play App Security Improvement Program)"
---
