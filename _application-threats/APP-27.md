---
    layout: threat
    ThreatCategory: Vulnerable Applications
    ID: APP-27
    Threat: "Maintaining persistence of malicious code or unauthorized privileged access across device resets by using escalated privileges to write to system partitions, Trusted Execution Environment, bootloader, or other lower-level component that is typically not erased during a device reset"
    ThreatOrigin:
    ExploitExample:
        - "Brain Test re-emerges: 13 apps found in Google Play [^102]"
    CVEExample:
    PossibleCountermeasures:
        - "Prohibit sideloading of apps and prohibit use of unauthorized app stores"
        - "Use Android Verify Apps feature to identify harmful apps"
        - "Perform application vetting to identify inclusion of exploit code or inappropriate behaviors by apps including privilege escalation attempts"
        - "Use application threat intelligence data about potential risks associated with apps installed on devices"
        - "Perform device integrity checking within enterprise applications, such as use of Android's SafetyNet device integrity attestation API"
        - "Ensure that enterprise mobile devices include and utilize secure boot capabilities that verify the integrity of the device"
---
