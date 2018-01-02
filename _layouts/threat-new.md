---
layout: page
---

# {{page.Threat}}
[Contribute]({{ site.baseurl }}/contributing.html)

- __Threat Category:__ {{page.ThreatCategory}}
- __ID:__ {{page.ID}}
- __Threat Description:__ {{page.ThreatDescription}}
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
    {% assign CVEs = {{CVEExample}} | split: ' ' %}
    - 	[{{ CVEs[0] }}](https://cve.mitre.org/cgi-bin/cvename.cgi?name={{ CVEs[0] }}) {{ CVEs[1] }}
{% endfor %}
- __Possible Countermeasures:__
{% for PossibleCountermeasures in page.PossibleCountermeasures %}
    - __{{ PossibleCountermeasures[0] }}__
        {% for PossibleCountermeasures in PossibleCountermeasures[1] %}
        {% for mitigation in site.data.mitigations %}
        {% if mitigation.id ==  PossibleCountermeasures %}
        - {{ mitigation.description }}
        {% endif %}
        {% endfor %}
        {% endfor %}
{% endfor %}




{% include issues.html %}


__References__
{% include references.md %}
