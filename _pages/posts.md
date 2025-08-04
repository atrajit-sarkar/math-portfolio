---
layout: page
title: Posts
subtitle: Mathematical Insights & Thoughts
permalink: /posts/
---

## Latest Posts

<div class="posts-grid">
{% for post in site.posts %}
  <article class="post-card">
    <div class="post-header">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.categories.size > 0 %}
          <span class="post-categories">
            {% for category in post.categories %}
              <span class="category">{{ category }}</span>
            {% endfor %}
          </span>
        {% endif %}
      </div>
    </div>
    
    <div class="post-excerpt">
      {{ post.excerpt | strip_html | truncatewords: 30 }}
    </div>
    
    <div class="post-footer">
      <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
      {% if post.tags.size > 0 %}
        <div class="post-tags">
          {% for tag in post.tags limit: 3 %}
            <span class="tag">#{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  </article>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="no-posts">
  <h3>No posts yet</h3>
  <p>I'm working on some mathematical insights and thoughts. Check back soon for interesting posts about Number Theory, Analysis, and Algebra!</p>
</div>
{% endif %}

---

### About This Blog

This is where I share my thoughts on mathematics, research insights, problem-solving techniques, and academic journey. Topics include:

- **Number Theory**: Explorations in prime numbers, Diophantine equations, and more
- **Analysis**: Insights from Real and Complex Analysis
- **Academic Life**: PhD journey, research tips, and mathematical discoveries
- **Problem Solving**: Interesting mathematical problems and their solutions
