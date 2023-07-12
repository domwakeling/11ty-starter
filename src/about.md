---
title: About
description: An About page for 11ty starter, written in Markdown
layout: layouts/layout.webc
---

{% normalRow %}
# About
This about page is written in a Markdown file rather than WebC or Nunjucks.

To retain access to the container- and row-components, they are re-implemented
as [paired shortcodes](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes) &mdash; so you need
to wrap your markdown in Nunjucks shortcodes, for instance <code>{{ "{% normalRow %}" }}</code>
and <code>{{ "{% endnormalRow %}" }}</code> gives the same as a <code>normalRow</code> WebC component.
{% endnormalRow %}

{% contrastBannerContainer %}
<h2 class="as-h3">Markdown conversion</h2>
{% endcontrastBannerContainer %}

{% normalRow %}
Due to "some slightly" funky behaviour in 11ty's markdown conversion (it occasionally adds `<p>` tags
for no obviously discernable reason), those shortcodes are actually converting the markdown into
HTML (rather than wrapping markdown in HTML tags and leaving the conversion to a later step). The
markdown-to-HTML conversion is stripping out leading spaces in front of tags at the start of a row
(which was identified as being *one* of the issues causing extra tags).

That means that if (for instance) you're putting a link into your markdown and have it as the first
character in a row (even halfway through a paragraph), there'll be no leading space. And in that
instance your output would[look like this](#) rather than [like this](#).
{% endnormalRow %}

{% contrastBannerContainer %}
<h2 class="as-h3">Other tags</h2>
{% endcontrastBannerContainer %}

{% normalRow %}
If you want to use WebC tags directly (either because you prefer to, or want to use a tag that hasn't
been replicated as a shortcode) then you can do so by wrapping them in <code>{{ '{% renderTemplate 
"webc" %}'}}</code> and <code>{{ "{% endrenderTemplate}" }}</code> shortcodes.
{% endnormalRow %}