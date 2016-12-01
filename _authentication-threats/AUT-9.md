---
    layout: threat
    ThreatCategory: "Authentication: User or Device to Remote Service"
    ID: AUT-9
    Threat: "Phishing attack via e-mails that link to malicious applications or websites that captures credentials"
    ThreatOrigin: "Phishing Defenses for Webmail Providers [^138]"
    ExploitExample: "Your Account PayPal Has Been Limited Phishing Scam [^139]"
    CVEExample:
    PossibleCountermeasures:
        "Ensure corporate e-mail policy is configured to scan for suspicious files, executables, or attachments, and segregate such emails to increase end-user awareness of their potential to contain malicious content.":
            - Enterprise
        "Deploy email and web proxy services that will examine URL resources for malicious content, and if any is found, prevent delivery of the message to the intended recipient.":
            - Enterprise
        "Deploy email filtering tools or services that will automatically remove detected URLs from the body of emails from untrusted domains.":
            - Enterprise
        "Educate end users on how to recognize phishing attempts and increase their awareness of techniques to browse safely from mobile devices, such as tap-and-hold on a hyperlink to examine its associated URL.":
            - Enterprise
---
