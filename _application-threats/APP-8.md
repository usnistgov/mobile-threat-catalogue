---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-8
    Threat: "Android: Remote code execution by injecting JavaScript into a web page retrieved using WebView"
    ThreatOrigin:
    ExploitExample:
        - "WebView addJavaScriptInterface Remote Code Execution [^79]"
        - "DRD13. Do not provide addJavaScriptInterface method access in a WebView which could contain untrusted content [^80]"
        - "Remote code execution on Android devices [^81]"
    CVEExample:
    PossibleCountermeasures:
        - "App vetting tools that detect these vulnerabilities."
        - "Use of https URLs for WebView content."
        - "Avoid enabling the WebView JavaScript bridge (with addJavascriptInterface) unless explicitly needed."
        - "Use a proxy or VPN for connections to decrease the chance of success of a man-in-the-middle attack."
---
