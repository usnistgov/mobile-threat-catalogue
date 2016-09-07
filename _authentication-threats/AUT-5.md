---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-5
    Threat: "Inferring PIN through device sensor information"
    ThreatOrigin: "Your Smartphone Isn\'t As Safe As You\'d Think [^128]"
    ExploitExample:
    CVEExample:
    PossibleCountermeasures:
        - "Do not authorize access to device peripherals or OS services (camera, microphone, accelerometer, location services, internet) to applications when those applications are not open."
        - "Use access controls native to the mobile OS to revoke access to device peripherals or services when related application functions are not in use."
        - "Before authenticating to sensitive applications, revoke global access by 3rd party apps to unnecessary device sensors or OS services that can collect information to perform side-channel attacks."
---
