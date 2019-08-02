---
layout: threat
ThreatCategory: Vulnerable Applications
ID: APP-8
Threat: WebView app vulnerable to browser-based attacks
ThreatDescription: A mobile app that implement a WebView, which allows it to render and potentially perform actions available in a web page, may contain vulnerabilities to common browser-based attacks, such as cross-site request forgery, cross-site scripting, and injection of malicious dynamic content (e.g., JavaScript). Further, exploits delivered over web pages may allow remote exploitation of vulnerabilities in other app components, thereby gaining access to data or functionality outside the context of the vulnerable WebView.
ThreatOrigin:
ExploitExample:
  - WebView addJavaScriptInterface Remote Code Execution [^79]
  - DRD13. Do not provide addJavaScriptInterface method access in a WebView which could contain untrusted content [^80]
  - Remote code execution on Android devices [^81]
CVEExample:
  - CVE-2017-0587
  - CVE-2017-0588
  - CVE-2017-0589
  - CVE-2017-0590
  - CVE-2017-0591
  - CVE-2017-0592
PossibleCountermeasures:
    Enterprise:
      - Use app-vetting tools or services to identify vulnerable applications
      - Use a proxy or VPN for connections to decrease the chance of success of a man-in-the-middle attack.
    Mobile App Developer:
      - Always use https URLs for WebView content.
      - Avoid enabling the WebView JavaScript bridge (with addJavascriptInterface) unless explicitly needed.
title: APP-8
---
