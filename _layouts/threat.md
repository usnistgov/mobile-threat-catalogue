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
<ul class="cve-examples">
{% for CVEExample in page.CVEExample %}
    {% assign CVEs = {{CVEExample}} | split: ' ' %}
        <li><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name={{ CVEs[0] }}">{{ CVEs[0] }}</a> {{ CVEs[1] }}</li>
{% endfor %}
</ul>
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
