---
layout: threat
ThreatCategory: Vulnerable Applications
ID: APP-5
Threat: Malicious code downloaded by visiting a malicious URL
ThreatDescription: A URL can refer to a broad spectrum of resource types, some of which can contain code that is executed by the process that requests it. The malicious code may automatically function in the target context, such as a script that is allowed to execute in a web browser, or it may require the presence of a vulnerability in the app that downloaded it that is exploited during an attempt to process the content, such as a buffer overflow attack.
ThreatOrigin:
  - Android Towelroot Exploit Used to Deliver Dogspectus Ransomware [^71]
  - JailbreakMe [^72]
ExploitExample:
CVEExample:
  - CVE-2010-1797
  - CVE-2010-2973
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - To reduce the potential for drive-by downloads or similar exploits, ensure the latest security updates for the mobile OS are installed.
      - Use built-in browser features or third-party products to identify and avoid known malicious web pages.
      - Use a proxy or VPN for all web traffic and identify and block connections to known malicious web pages.
      - Educate enterprise users about safe browsing practices.
      - Use anti-malware device agents to detect malicious applications inadvertently installed on the device.
    Mobile Device User:
      - To reduce the potential for drive-by downloads or similar exploits, ensure the latest security updates for the mobile OS are installed.
      - Use built-in browser features or third-party products to identify and avoid known malicious web pages.
      - Use anti-malware device agents to detect malicious applications inadvertently installed on the device.
      - Regularly use Verify Apps feature to identify potentially harmful applications.
---
