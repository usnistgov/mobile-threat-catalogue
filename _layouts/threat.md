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
{% for PossibleCountermeasure in page.PossibleCountermeasures %}
    {% if PossibleCountermeasure[1] %}
    - __{{ PossibleCountermeasure[1] | array_to_sentence_string }}__: {{ PossibleCountermeasure[0] }}
    {% else %}
    - {{ PossibleCountermeasure }}
    {% endif %}
{% endfor %}

- __References__

{% include references.md %}



<div id="github-issues" >This entry was flagged for review in issue <span id="issue-number" threatID="{{page.ID}}"></span> click to join the discussion.</div>
<script>
var github = 'https://api.github.com/repos/usnistgov/mobile-threat-catalogue/issues';
var span = document.getElementById('issue-number');
var threatID = span.getAttribute("threatID")

request = new XMLHttpRequest();
request.open('GET', github, true);

request.onload = function() {
    data = JSON.parse(request.responseText);
    for (var i = 0; i < data.length; i++) {

        if (data[i].title.includes(threatID) || data[i].body.includes(threatID)) {

            span.innerHTML = "<a href=\""+data[i].html_url+"\">#" + data[i].number +",</a>";
        }
    }

};


request.send();
</script>
