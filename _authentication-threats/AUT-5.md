---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-5
    Threat: "Inferring PIN through device sensor information"
    ThreatDescription: "Mobile applications can collect data from various device sensors such as an accelerometer, gyroscope, microphone, or camera to calculate what areas of the mobile device screen are being tapped by the user. This data can be analyzed to infer with high probability (70%) the information entered by the user, such as a PIN or password. The success of this attack improves as additional data is collected from activity by a given user."
    ThreatOrigin: "Your Smartphone Isn\'t As Safe As You\'d Think [^128]"
    ExploitExample:
        - "Touchscreen keylogger created using accelerometer movement during typing [^248]"
        - "Tapprints: your finger taps have fingerprints [^249]"
        - "ToughLogger: Inferring Keystrokes on Touch Screen from Smartphone Motion [^250]"
    CVEExample:
    PossibleCountermeasures:
        "On Android devices, use the Verify Apps feature to detect 3rd party apps that appear to abuse access to device sensors.":
            - Mobile Device User
        "Deploy MAM or containerization solutions that support policies that can enforce strong encryption on any data stored on the SD card by trusted apps":
            - Enterprise
        "Deploy containerization or MAM solutions that allow administrators to restrict access to device sensors by untrusted apps.":
            - Enterprise
        "Do not authorize access to device sensors to untrusted applications when those applications are not in use.":
            - Mobile Device User
        "Use access controls native to the mobile OS to revoke access to device peripherals or services when related application functions are no longer in use.":
            - Mobile Device User
        "Before authenticating to sensitive applications, forcibly close untrusted applications with access to device sensors such as an accelerometer or gyroscope.":
            - Mobile Device User
        "Use app-vetting services to determine if any apps present in your mobile device deployment appear to use sensor data in an untrusted manner so appropriate policies and controls can be established to mitigate those risks.":
            - Enterprise
        "Before authenticating to sensitive applications, use OS configuration settings to revoke global access to device sensors such as an accelerometer or gyroscope.":
            - Mobile Device User
---
