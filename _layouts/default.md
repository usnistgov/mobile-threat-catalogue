<!DOCTYPE html>
<html lang="en-us">

    {% include head.html %}

    <body class="theme-base-0d">

        {% include sidebar.html %}

        <div class="content container">
            {{ content | markdownify }}
            {% include nist-footer.html %}
        </div>

  </body>
</html>
