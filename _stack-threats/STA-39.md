--- 
CVEExample: ~
ExploitExample: 
  - "Exploiting Smart-Phone USB Connectivity for Fun and Profit [^143]"
ID: STA-39
PossibleCountermeasures: 
  ? "Configure the computer to not automatically execute content stored on mounted USB devices."
  : 
    - "Computer User"
  ? "Configure the mobile device to not automatically make attached SD media available to a USB-connected computer."
  : 
    - "Mobile Device User"
  ? "Remove any attached SD card from the mobile device prior to connecting to a computer."
  : 
    - "Mobile Device User"
  ? "Use an anti-malware app to scan the attached SD card for malicious files prior to connecting to a computer."
  : 
    - "Mobile Device User"
Threat: "Malicious app on device uses SD card to deliver malicious files to USB-connected computer."
ThreatCategory: "SD Card"
ThreatDescription: "If the configuration of the mobile device and computer allow, an attached SD card will automatically be mounted by a USB-connected computer as a mass storage device. If the SD card contains executable files designed to automatically execute (e.g. autoexec.bat), they will automatically execute. A malicious mobile app can exploit this weakness by writing malicious executables to an attached SD card."
ThreatOrigin: "Exploiting Smart-Phone USB Connectivity for Fun and Profit [^143]"
layout: threat
