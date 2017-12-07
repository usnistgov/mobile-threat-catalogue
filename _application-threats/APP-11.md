---
    layout: threat-new
    ThreatCategory: Vulnerable Applications
    ID: APP-11
    Threat: "Untrusted data used as input to sensitive operations"
    ThreatDescription: "Applications often have a need to dynamically incorporate input into sensitive operations such as access control decisions (e.g. authentication) or database operations. However, if a sensitive operation acts on untrusted and unsafe input, it may not function as intended. An attacker with control over such input can potentialy craft it to control application or system behavior. Prime examples of exploits include buffer overflow and code injection attacks. Therefore, it is important to evaluate untrusted input for safeness in the context in which it will be processed prior to accepting it."
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
