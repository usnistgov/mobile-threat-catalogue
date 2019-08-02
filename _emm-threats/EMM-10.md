---
layout: threat
ThreatCategory: Enterprise Mobility
ID: EMM-10
Threat: Insecure internally developed enterprise app installed onto enrolled devices via MAM policy
ThreatOrigin: Mobile Top Ten 2016 [^9]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Enterprise:
      - Prior to deployment, ensure internally developed apps are evaluated with rigor, such as by using app-vetting services to establish confidence they present minimal risk to the enterprise and device users.
      - Consider the use of container solutions, such as Android for Work, that can prevent launching of managed apps when the device user is not authenticated to the work-centric container, thus minimizing the risk those apps present to the user outside of a work context.
    Mobile Device User:
      - For device users with concerns about the security implications of a mandatory enterprise app during personal use of the device, restrict its permissions or if possible, temporarily disable it when operating the device in a personal context.
title: EMM-10
---
