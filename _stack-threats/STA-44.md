---
    layout: threat
    ThreatCategory: Mobile Operating System
    ID: STA-44
    Threat: "A malicous application with root privileges can surruptitiously answer phone calls."
    ThreatDescription: "An attacker who can cause a device to answer his to it without the device user's knowledge could achieve a denial-of-service on voice services by depleting any pool of minutes allocated to the associated cellular subscriber account. Of more concern is the potential for a malicious caller to remotely record audio from within the vicinity of the device without directly accessing the device microphone."
    ThreatOrigin:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    ExploitExample:
        - "An investigation of Chrysaor Malware on Android [^AndroidDevBlog-1]"
    CVEExample:
    PossibleCountermeasures:
        "To prevent data collection using the device microphone, install a protective cover over the device which reliably blocks sound from being picked up."
            - Mobile Device User
        "To reduce the potential for such an exploit for which a security patch is available, ensure OS security updates are installed in a timely fashion."
            - Mobile Device User
            - Enterprise
---
