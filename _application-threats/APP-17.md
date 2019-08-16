---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-17
Threat: App silently intercepts SMS messages
ThreatDescription: Prior to Android 4.4, apps granted permissions to SMS messaging functionality had the ability to listen for and receive incoming SMS messages. If the app was registered as the highest priority listener for messages, it could silently (without notice to the user) intercept, read, and dispose of messages intended for other apps. One serious abuse of this was the interception of one-time passwords (OTP) used for two-factor authentication (2FA) sent over SMS. Newer versions of Android do not permit apps with permission to access SMS messaging to receive or dispose of SMS messages directly. Unlike Android, the iOS security model does not permit apps with access to SMS messaging. Malicious apps may still realize this threat following exploitation of OS vulnerabilities that bypass access control on private SMS messaging APIs or achieve arbitrary code execution.
ThreatOrigin: 'Dissecting Android Malware: Characterization and Evolution [^85]'
ExploitExample:
  - New Android Trojan xBot Phishes Credit Cards and Bank Accounts, Encrypts Devices for Ransom [^96]
  - How Anywhere Computing Just Killed Your Phone-Based Two-Factor Authentication [^97]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Perform application vetting to identify inappropriate behaviors by apps including interception of SMS messages.
      - Avoid the use of applications that rely on SMS messages for 2-factor authentication.
      - When stronger 2-factor authentication methods are available, such as FIDO U2F tokens, educate enterprise users to avoid the use of SMS messages for configuring 2-factor authentication for enterprise applications.
      - Use application threat intelligence data to identify apps that increase risks associated with SMS message interception.
    Mobile Device User:
      - Use Android Verify Apps feature to identify apps that may intercept SMS messages.
      - Avoid the use of applications that rely on SMS messages for 2-factor authentication.
    Mobile App Developer:
      - Avoid the use of SMS messages for 2-factor authentication.
title: APP-17
rawID: 17
---
