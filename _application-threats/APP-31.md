---
    layout: threat
    ThreatCategory: Vulnerable Applications
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
        - "Ensure Android devices are running a recent version of the operating system, as starting in Android 5.0, ActivityManager.getRunningTasks() has been modified to stop leaking information about the current foreground activity, increasing the difficulty of malicious apps being able to perform a user interface spoofing attack"
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Perform application vetting to identify inclusion of exploit code or inappropriate behaviors by apps"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
---
