---
    layout: threat
    ThreatCategory: "Malicious or privacy-invasive application"
    ID: APP-37
    Threat: "Clickjacking to entice user to perform activity in a hidden application."
    ThreatOrigin: 
        - "\"Accessibility Clickjacking\" - The Next Evolution in Android Malware that Impacts More Than 500 Million Devices [^YAmit1]"
        - "Android ransomware variant uses clickjacking to become device administrator [^M-Zhang-1]"
    ExploitExample:
        - "Android.Lockdown.E [^Symantec-1]"
    CVEExample:
    PossibleCountermeasures:
        "To detect if an unauthorized app has access to restricted functionality, such as Device Administrator or Accessibility Services, use device settings to review permissions and identify any app for which that functionality is not authorized.":
            - Mobile Device User
        "On Android 6.0 and later, use device settings to revoke access to unauthorized services, such as Device Administrator or Accessibility Services. On earlier versions, permissions cannot be individually revoked; instead, the app must be uninstalled.":
            - Mobile Device User
        "To prevent this attack, use Android 5.0 and later devices, which does not allow apps to appear above any system dialogs used to grant permissions.":
            - Mobile Device User
            - Enterprise
---
