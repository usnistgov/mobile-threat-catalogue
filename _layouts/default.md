<!DOCTYPE html>
<html lang="en-us">
    {% include head.html %}
    <body class="theme-base-0d">
        {% include header.html %}
        {% include sidebar.html %}
        <div class="content container" id="page">
            {{ content | markdownify }}
            {% include nist-footer.html %}
        </div>
        {% include footer.html %}
  </body>
</html>
