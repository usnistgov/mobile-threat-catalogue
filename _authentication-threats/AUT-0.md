---
    layout: threat
    ThreatCategory: Authentication
    ID: AUT-0
    Threat: "Theft (Use of authorized credentials)"
    ThreatOrigin: "Mobile Threat Protection: A Holistic Approach to Securing Mobile Data and Devices [^61]"
    ExploitExample:
        - "CBS App & Mobility Website [^116]"
        - "The Fork [^117]"
        - "Star Q8 [^118]"
        - "Corriere Della Sera App [^119]"
        - "LaTribune [^120]"
        - "Card Crypt [^121]"
        - "Starbucks Caught Storing Mobile Passwords in Clear Text [^122]"
    CVEExample:
    PossibleCountermeasures:
        - "Use anomaly detection based on user activity to detect abnormal actions (e.g. authentication from new domains, unusual times, or to rarely-accessed services) and require additional authentication steps before granting access"
        - "Employ multi-factor authentication"
        - "Use centralized identity and access management tools that permit simultaneous revocation of stolen authentication credentials across all access control mechanisms and terminate active sessions based on those credentials."
        - "Enforce a policy that limits the maximum age of credentials, require the use of strong credential-generation mechanisms that produce credentials with high randomness and cryptographic strength to resist prediction and brute-force attacks against them. users from creating new credentials which are similar to recently used ones (re-use policy)"
        - "Enforce an access policy that restricts the resources a user can access based on location parameters (e.g. domain, IP address, MAC address, geolocation) of the authentication request.   Incorporate the principle of least privilege to limit lateral movement."
        - "Employ authentication mechanisms that utilizes randomly generated one-time passwords or tokens for access from untrusted locations. If stolen, (at worst) this would only grant an attacker temporary access. This should be combined with stronger authentication mechanisms being required for a user to change authentication credentials or obtain additional one-time passwords."
---
