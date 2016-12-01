---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-31
    Threat: "Impersonating a legitimate credential entry prompt in order to trick the user into entering credentials into an app controlled by an attacker."
    ThreatOrigin:
        - "Phishing on Mobile Devices [^105]"
        - "Exploiting Androids for Fun and Profit [^106]"
        - "The Latest Android Overlay Malware Spreading via SMS Phishing in Europe [^107]"
        - "Password-Stealing Instagram App [^108]"
        - "Hackers Sneak Malware Into Apple App Store 'To Steal iCloud Passwords' [^109]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "Consider the use of devices that support Android 5.0 and later, in which ActivityManager.getRunningTasks() has been modified to stop leaking information about the current foreground activity, increasing the difficulty of malicious apps being able to perform a user interface spoofing attack":
            - Enterprise
            - Mobile Device User
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify potentially harmful apps.":
            - Mobile Device User
        "Use app-vetting tools or services to identify apps that attempt to spoof the interface to other apps or common web sites, such as banking sites.":
            - Enterprise
---
