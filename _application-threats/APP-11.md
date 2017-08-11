---
    layout: threat-new
    ThreatCategory: Vulnerable Applications
    ID: APP-11
    Threat: "Having an application rely on untrusted data for security decisions"
    ThreatOrigin:
    ExploitExample:
        - "Team Joch vs. Android [^57]"
    CVEExample:
    - CVE-2017-7005
    PossibleCountermeasures:
        "When input should match one of a set of known and comparable options, use whitelisting to ensure the input is safe before applying it to security logic.":
            - Mobile App Developer
        "When whitelisting is not possible, use vetted data sanitization libraries to verify the input appears syntactically safe prior to applying it to security logic.":
            - Mobile App Developer
        "Always use fail-safe security logic in apps; if input cannot be verified to be safe (versus not identified as unsafe), reject the input and do not perform the security action.":
            - Mobile App Developer
---
