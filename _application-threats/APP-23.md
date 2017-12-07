---
    layout: threat-new
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-23
    Threat: "Abuse of device management functionality to ransom assets"
    ThreatDescription: "Device management features built into Android and iOS allow organizations to develop apps designed to enforce organizational mobile device security policies. Some policy options could be abused by a malicious app to block access to desired functionality (e.g. camera access) until a ransom is paid. Prior to Android 7.0, the Device Administrator role could forcefully set a device unlock code, which could be used to hold the entire device for ransom."
    ThreatOrigin: "Android Security 2015 Year In Review [^98]"
    ExploitExample:
        - "New Android Trojan xBot Phishes Credit Cards and Bank Accounts, Encrypts Devices for Ransom [^96]"
    CVEExample:
    PossibleCountermeasures:
        "Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.":
            - Enterprise
        "Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.":
            - Enterprise
        "Use Android Verify Apps feature to identify apps that may abuse Administrator privileges.":
            - Mobile Device User
        "Use application threat intelligence data about potential abuse of Administrator privileges associated with apps installed on COPE or BYOD devices":
            - Enterprise
        "Consider the use of devices that support Android 7.0 and later and ensuring a PIN is set. Starting in 7.0, device administrator apps can no longer change the device PIN/password when one is already set, as described in https://developer.android.com/preview/behavior-changes.html and at 44:20 of https://www.youtube.com/watch?v=XZzLjllizYs":
            - Mobile Device User
            - Enterprise
---
