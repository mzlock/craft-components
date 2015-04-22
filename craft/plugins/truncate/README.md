Truncate
========

A simple Craft CMS plugin/Twig filter.

Usage
=====
```php
{{ entry.body | truncate('words', '150', '...', true) }}
```

Params
======

- Unit: words or chars. Defaults to chars.
- Limit: Defaults to 150.
- Ending: Defaults to an empty string.
- StripHTML: Removes all HTML tags. Defaults to false

Note
====

The native Twig filters split, join, and slice can be used to achieve a similar result:

- [slice](http://twig.sensiolabs.org/doc/filters/slice.html)
- [join](http://twig.sensiolabs.org/doc/filters/join.html)
- [split](http://twig.sensiolabs.org/doc/filters/split.html)

```php
{% set words = "these are words"|split(" ")|slice(1, 2)|join(" ") %}
{{ words }}
```
