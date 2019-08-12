<!DOCTYPE html>
<html lang="en-us">

    <body class="theme-base-0d">

        {% include head.html %}

        {% include sidebar.html %}

        <div class="content container" id="page">
            {{ content | markdownify }}
            {% include nist-footer.html %}
        </div>

        {% include footer.html %}

  </body>
</html>
