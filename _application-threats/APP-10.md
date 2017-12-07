---
    layout: threat-new
    ThreatCategory: Vulnerable Applications
    ID: APP-10
    Threat: "Poorly implemented cryptography in app"
    ThreatDescription: "While still supported by many systems, cryptographic algorithms and ciphers proven to be weak or broken should not be used to protect sensitive data. Weak algorithm/ciphers are those that have been deprecated following advancements in processing speeds and distributed processessing that have made brute-force attacks against them feasible. Broken algorithms, such as MD5, have known vulnerabilities an attacker can exploit to defeat one or more of its security properties. Similarly, the use of novel (e.g. home-grown) cryptographic algorithms should also be avoided. Novel algorithms may not have yet undergone sufficient scrutiny by the cryptologic community at large, and may possess flaws that if discovered, present an attacker with a path of lesser resistance to achieving unauthorized access to any data these cryptographic mechanisms were designed to protect."
    ThreatOrigin: "OWASP Mobile Top 10 2016 [^9]"
    ExploitExample:
        - "FortiClient Multiple Vulnerabilities [^82]"
    CVEExample: CVE-2017-4896 [^AirWatch-1]
    PossibleCountermeasures:
        "Strictly avoid the use of hard-coded cryptographic keys in application source code.":
            - Mobile App Developer
        "Explicitly overwrite variables containing cryptographic keys or other secrets following each use to prevent unauthorized disclosure of the secret if that memory location is subsequently accessed by untrusted code.":
            - Mobile App Developer
        "Use each cryptographic key for a single purpose to limit the impact of key compromise.":
            - Mobile App Developer
        "Strictly avoid the use of \'broken\', weak, or novel algorithms (those that have not undergone extensive evaluation by the cryptographic community at large) to protect long-term secrets.":
            - Mobile App Developer
        "Consider the use of cryptographic functions provided by the mobile operating system and where possible, leverage hardware-backed cryptographic and secure storage services.":
            - Mobile App Developer
        "Additionally, application developers are strongly encouraged to familiarize themselves with best practices for cryptography and general key management, and to integrate that knowledge early in the application design process. See NIST SP 800-57 Part 1 Revision 4, Recommendation for Key Management, Part 1 General[^244]":
            - Mobile App Developer
        "For Android developers, review guidance on the proper use of the Android Keystore System.[^245]":
            - Mobile App Developer
        "For iOS developers, review guidance on the proper use of the iOS Keychain.[^246]":
            - Mobile App Developer
        "Use app vetting tools/services to detect the misuse of cryptography in mobile apps.":
            - Enterprise
---
