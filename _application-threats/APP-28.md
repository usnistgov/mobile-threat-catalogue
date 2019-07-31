---
layout: threat
ThreatCategory: Malicious or privacy-invasive application
ID: APP-28
Threat: App encrypts/encodes and ransoms files
ThreatDescription: A malicious app with permission to modify files or data stored in shared locations, such as external media or contacts could potentially overwrite an original file or data object with an encoded or encrypted one. The attacker could then demand some form of payment in exchange for returning randomed data to a usable state.
ThreatOrigin:
ExploitExample:
  - New Android Trojan xBot Phishes Credit Cards and Bank Accounts, Encrypts Devices for Ransom [^96]
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Deploy MAM or MDM solutions with policies that prohibit the side-loading of apps, which may bypass security checks on the app.
      - Deploy MAM or MDM solutions with policies that prohibit the installation of apps from 3rd party (unofficial) app stores.
      - Use application threat intelligence data about apps that maliciously encrypt user data.
      - Use app-vetting tools or services to identify apps that maliciously encrypt user data.
    Mobile Device User:
      - Use Android Verify Apps feature to identify potentially harmful apps.
---
