---
layout: default
title: resources
permalink: /resources/
nav: true
nav_order: 3
description: Notes, guides, and materials I have collected and shared.
# Paste your published Notion site URL below (it must end in .notion.site to embed).
# Leave blank to show the "coming soon" placeholder instead.
notion_url:
---

<h1><b>Resources</b></h1>

{% if page.description %}
  <p>{{ page.description }}</p>
{% endif %}

{% if page.notion_url %}
  <iframe
    src="{{ page.notion_url }}"
    title="{{ page.title }}"
    style="width: 100%; height: 80vh; border: 1px solid var(--global-divider-color); border-radius: 6px;"
    loading="lazy"
    allowfullscreen
  ></iframe>
  <p style="margin-top: 12px;">
    <a href="{{ page.notion_url }}" target="_blank" rel="noopener">Open in Notion &#8599;</a>
  </p>
{% else %}
  <p><em>Coming soon.</em></p>
{% endif %}
