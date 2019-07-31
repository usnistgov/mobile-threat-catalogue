---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-35
Threat: App retrieves sensitive data from the clipboard
ThreatDescription: Any app that has been granted, or that has implicit OS-level permission to access the clipboard, may collect data left in the clipboard by other activity. A primary example would be using the device clipboard to copy-and-paste a password from an encrypted file to a form field.
ThreatOrigin: Attacks on Android Clipboard [^238]
ExploitExample:
  - 'Update: XcodeGhost Attacker Can Phish Passwords and Open URLs Through Infected Apps [^239]'
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Deploy MAM solutions that can restrict access to the device clipboard and similar OS-provided services to a whitelist of trusted apps.
      - Deploy MAM or container solutions that can restrict communication between trusted and untrusted apps using the device clipboard, copy-and-paste, and similar OS-provided services.
      - Use application threat intelligence services to identify apps reported to abuse access to the device clipboard or similar OS-provided services to obtain sensitive information.
      - Use app-vetting tools or services to identify applications that appear to abuse access to the device clipboard or similar OS-provided services to obtain sensitive information.
    Mobile Device User:
      - Use Android Verify Apps feature to identify potentially harmful apps.
---
