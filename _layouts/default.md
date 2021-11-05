<!DOCTYPE html>
<html lang="en-us" class="nist-footer-bottom">
    {% include head.html %}
    <body class="theme-base-0d">
        {% include header.html %}
        {% include sidebar.html %}
        <div class="content container" id="page">
            {{ content | markdownify }}
        </div>
  </body>
</html>
