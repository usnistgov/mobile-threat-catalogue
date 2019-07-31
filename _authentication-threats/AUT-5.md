---
    layout: threat
    ThreatCategory: "Authentication: User to Device"
    ID: AUT-5
    Threat: "Inferring PIN through device sensor information"
    ThreatDescription: "Mobile applications, if granted permissions to do so, can collect data from various device sensors such as an accelerometer, gyroscope, microphone, or camera to calculate what areas of the mobile device screen are being tapped by the user. This data can be analyzed to infer with high probability (70%) the keystrokes made by the user, such as a PIN or password entry. The success of this attack improves as additional data is collected from activity by a given user. Note this attack does not require an application to acheive privilege escalation; however, an application that can successfully exploit privilege escalation vulnerabilities may have increased potential to realize this threat by accessing otherwise restricted sensors."
    ThreatOrigin: "Your Smartphone Isn't As Safe As You'd Think [^128]"
    ExploitExample:
        - "Touchscreen keylogger created using accelerometer movement during typing [^248]"
        - "Tapprints: your finger taps have fingerprints [^249]"
        - "ToughLogger: Inferring Keystrokes on Touch Screen from Smartphone Motion [^250]"
    CVEExample:
    PossibleCountermeasures:
        "To detect Android apps that may realize this threat, use the Verify Apps feature to detect 3rd party apps that appear to abuse access to device sensors.":
            - Mobile Device User
        "To reduce the opporunity for this threat, deploy containerization or MAM solutions in combination with devices that successfully enforce policies that restrict access to device sensors by untrusted apps.":
            - Enterprise
        "To reduce the opportunity for this threat, do not authorize (or revoke if granted) access to device sensors by untrusted applications when those applications are not actively in use (e.g., running in the background).":
            - Mobile Device User
        "To reduce the opportunity for this threat, use access controls native to the mobile OS to revoke access to device peripherals or services for an app when related application functions are no longer in use.":
            - Mobile Device User
        "To prevent this threat, before authenticating to sensitive applications, forcibly close all untrusted applications that have access to device sensors such as an accelerometer or gyroscope.":
            - Mobile Device User
        "To detect apps that may realize this threat, use app-vetting services to determine if any apps present in your mobile device deployment appear to use sensor data in an untrusted manner.":
            - Enterprise
        "To prevent this threat, before authenticating to sensitive applications, use OS configuration settings to revoke global access for all apps to device sensors such as an accelerometer or gyroscope.":
            - Mobile Device User
        "To increase the difficulty of visual or sensor-based inference attacks on entries by the on-screen keyboard, a randomized keyboard layout for PIN or password entry could be implemented as a feature of the mobile OS.":
            - Mobile OS Developer
---
