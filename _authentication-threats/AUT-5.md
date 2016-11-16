---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-5
    Threat: "Inferring PIN through device sensor information"
    ThreatOrigin: "Your Smartphone Isn\'t As Safe As You\'d Think [^128]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        "If possible, do not authorize (or revoke) access to device peripherals or OS services (camera, microphone, accelerometer, location services, internet) to applications when those applications are not open.":
            - Mobile Device User
        "Use access controls native to the mobile OS to completely revoke access to device peripherals or services to untrusted apps when the related app functions (e.g. editing photos in the camera roll) are not in use.":
            - Mobile Device User
        "Before authenticating to sensitive applications, revoke global access by 3rd party apps to unnecessary device sensors or OS services that can collect information to perform side-channel attacks.":
            - Mobile Device User
        "Deploy MAM or container solutions that prevent sensitive device peripherals or OS services from being accessed by unmanaged apps while the device is being used in a work context (e.g., user is authenticated to a work-based container solution, or geo-fencing identifies the user as in the workplace).":
            - Enterprise
---
