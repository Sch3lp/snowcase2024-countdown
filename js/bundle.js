---
dir_path: scripts/
scripts:
  - countdown.min.js
---
{% for script in scripts %}
    {% assign script_path = dir_path | append: script %}
    {% include_relative script_path %}
{% endfor %}