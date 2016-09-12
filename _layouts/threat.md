---
layout: page
---
# {{page.Threat}}
[Contribute]({{ site.baseurl }}/contributing.html)

- __Threat Category:__ {{page.ThreatCategory}}
- __ID:__ {{page.ID}}
- __Threat Origin:__
{% for ThreatOrigin in page.ThreatOrigin %}
    - {{ ThreatOrigin }}
{% endfor %}
- __Exploit Examples:__
{% for ExploitExample in page.ExploitExample %}
    - {{ ExploitExample }}
{% endfor %}
- __CVE Examples:__
{% for CVEExample in page.CVEExample %}
    - 	[{{ CVEExample }}](https://cve.mitre.org/cgi-bin/cvename.cgi?name={{ CVEExample }})
{% endfor %}
- __Possible Countermeasures:__
{% for PossibleCountermeasures in page.PossibleCountermeasures %}
    - {{ PossibleCountermeasures }}
{% endfor %}

- __References__

{% include references.md %}
