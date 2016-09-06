---
layout: page
---
# {{page.Threat}}

- __Threat Category:__ {{page.ThreatCategory}}
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
    - {{ CVEExample }}
{% endfor %}
- __Tactic Categories:__
{% for TacticCategory in page.TacticCategory %}
    - {{ TacticCategory }}
{% endfor %}
- __Possible Countermeasures:__
{% for PossibleCountermeasures in page.PossibleCountermeasures %}
    - {{ PossibleCountermeasures }}
{% endfor %}

{% include references.md %}
