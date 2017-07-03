---
    layout: threat-new
    ThreatCategory: Vulnerable Applications
    ID: APP-5
    Threat: "Malicious code or exploit accidentally downloaded by visiting a URL (i.e., Drive by download)"
    ThreatOrigin:
        - "Android Towelroot Exploit Used to Deliver Dogspectus Ransomware [^71]"
        - "JailbreakMe [^72]"
    ExploitExample:
    CVEExample:
        - CVE-2010-1797
        - CVE-2010-2973
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "To reduce the potential for drive-by downloads or similar exploits, ensure the latest security updates for the mobile OS are installed.":
            - Mobile Device User
            - Enterprise
        "Use built-in browser features or third-party products to identify and avoid known malicious web pages.":
            - Mobile Device User
            - Enterprise
        "Use a proxy or VPN for all web traffic and identify and block connections to known malicious web pages.":
            - Enterprise
        "Educate enterprise users about safe browsing practices.":
            - Enterprise
        "Use anti-malware device agents to detect malicious applications inadvertently installed on the device.":
            - Enterprise
            - Mobile Device User
        "Regularly use Verify Apps feature to identify potentially harmful applications.":
            - Mobile Device User
---
