---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-9
    Threat: "App communicates with a compromised back-end server"
    ThreatDescription: "If an app exchanges data with a compromised back-end server, it may be vulnerable to exploitation from what may be treated as a trusted system. This may provide an attacker with unauthorized access to sensitive user data or  remote control over app functionality."
    ThreatOrigin:
    ExploitExample:
    CVEExample:
        - "CVE-2015-1581"
    PossibleCountermeasures:
        "Follow best practices for server security, for example as described in https://www.owasp.org/index.php/Mobile_Top_10_2014-M1": 
            - Mobile App Developer
---
