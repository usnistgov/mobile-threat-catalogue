---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-3
    Threat: "Developer unintentionally writing sensitive information (e.g. passwords) to system logs"
    ThreatOrigin:
    ExploitExample:
    CVEExample:
        - CVE-2012-2630
        - CVE-2014-0647
    PossibleCountermeasures:
        - "Avoid logging sensitive data."
        - "Starting in Android 4.1, this requires privilege escalation, as apps can no longer access the system log (other than reading log entries added by the app itself)."
        - "CTS includes tests that check for the presence of potentially sensitive information in the system logs."
        - "https://source.android.com/security/overview/implement.html"
---
