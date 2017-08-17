---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-1
    Threat: "Man-in-the-middle attack on weak server authentication"
    ThreatDescription: "Apps that exchange information with a back-end server should strongly authenticate the server before attemtping to establish a secure connection. If the authentication mechanism used by the app is weak, such as not validating a server certificate, an attacker can readily impersonate the back-end server to the app and achieve a man-in-the-middle (MITM) attack. This would provide an attacker with unauthorized access to all unencrypted transmitted data, including modification of data-in-transit. A successful MITM greatly facilitates further attacks against the client app, the back-end server, and all parties of a compromised session."
    ThreatOrigin: "Mobile Threat Protection: A Holistic Approach to Securing Mobile Data and Devices [^61]"
    ExploitExample:
        - "Why Eve and Mallory Love Android: An Analysis of Android SSL (In)Security [^62]"
        - "SMV-HUNTER: Large Scale, Automated Detection of SSL/TLS Man-in-the-Middle Vulnerabilities in Android Apps [^63]"
        - "How We Discovered Thousands of Vulnerable Android Apps in One Day [^65]"
    CVEExample:
        - "CVE-2016-3664"
        - "CVE-2014-5618"
    PossibleCountermeasures:
        "Use fail-safe logic when establishing a connection to the back-end server; if server certificate validation fails, do not continue to negotiate a secure session or fall back to an unencrypted communication protocol, and warn the app user.":
            - Mobile App Developer
        "On Android devices, use the Android Network Security Policy feature, Certificate Pinning.":
            - Mobile App Developer
        "To reduce the impact of a successful MiTM attack on your application, consider the use of public key cryptography to protect sensitive data destined for back-end servers prior to transmission off the device.":
            - Mobile App Developer
        "App vetting tools/services or pen testing to detect MiTM vulnerabilities in mobile apps.":
            - Enterprise
---
