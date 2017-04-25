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
    {% assign CVEs = {{CVEExample}} | split: ' ' %}
    - 	[{{ CVEs[0] }}](https://cve.mitre.org/cgi-bin/cvename.cgi?name={{ CVEs[0] }}) {{ CVEs[1] }}
{% endfor %}
- __Possible Countermeasures:__
{% for PossibleCountermeasure in page.PossibleCountermeasures %}
    {% if PossibleCountermeasure[1] %}
    - __{{ PossibleCountermeasure[1] | array_to_sentence_string }}__: {{ PossibleCountermeasure[0] }}
    {% else %}
    - {{ PossibleCountermeasure }}
    {% endif %}
{% endfor %}


{% include issues.html %}


__References__
{% include references.md %}
