---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-15
    Threat: "Distribution of malicious apps outside of a controlled app store"
    ThreatOrigin:
        - "Change to sideloading apps in iOS 9 is a security win [^89]"
        - "Mobile Security: Threats and Countermeasures [^90]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores, including use of the Android device setting that prevents installation of apps from non-Google Play Store sources and use of the iOS allowEnterpriseAppTrust and allowEnterpriseAppTrustModification configuration profile restrictions."
        - "Ensure iOS devices are running the latest version of iOS, as iOS 9 introduces improvements to make it more difficult for users to inadvertently install non-Apple App Store apps (e.g. apps distributed using illicitly obtained enterprise certificates)."
        - "Use Android Verify Apps feature to identify harmful apps."
---
