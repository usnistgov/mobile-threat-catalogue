---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-23
    Threat: "Android: Abuse of device administrator access, for example to lock the user out of his or her own device or wipe the device contents (Ransomware technique)"
    ThreatOrigin: "Android Security 2015 Year In Review [^98]"
    ExploitExample:
        - "New Android Trojan xBot Phishes Credit Cards and Bank Accounts, Encrypts Devices for Ransom [^96]"
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Perform application vetting to identify potentially inappropriate behaviors by apps including requests for device administrator access"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
        - "Ensure Android devices are running a recent version of the operating system, and ensure that devices have their screen locks enabled with a PIN/password already set, because starting in Android N, device administrator apps can no longer change the device PIN/password when one is already set, as described in https://developer.android.com/preview/behavior-changes.html and at 44:20 of https://www.youtube.com/watch?v=XZzLjllizYs"
---
