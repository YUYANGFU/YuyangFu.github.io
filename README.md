# Yuyang Fu's personal website

A static personal website for Summer 2027 AI/ML and software engineering internship recruiting, published with GitHub Pages at https://yuyangfu.github.io/.

The site uses the existing Bootstrap theme, Markdown content, and YAML configuration. No package installation or build step is needed.

## Content

The page order is About → Education → Industry Experience → Publications → Research Experience → Awards.

- `contents/home.md`: introduction and internship interests.
- `contents/education.md`: education, with Georgia Tech MS CS first.
- `contents/experience.md`: Alibaba Cloud internship projects.
- `contents/publications.md`: AI papers, followed by earlier research and patents.
- `contents/research.md`: AgentCPM-Explore, AMULET, and the personal RAG/MCP project.
- `contents/awards.md`: awards.
- `contents/config.yml`: site title, name, and copyright.

`index.html` defines the navigation and section containers. `static/js/scripts.js` loads the content. `static/css/main.css` extends the original theme with responsive styling.

## Preview

Serve this directory over HTTP so the browser can load the Markdown and YAML files:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ and check desktop and mobile layouts, section links, and the GitHub link before publishing.

## Contact

The introduction includes one personal GitHub link and the plain-text email `fuyuyang20043 [at] gmail.com`. The email is not a `mailto:` link, and the website does not host or link to a resume PDF. Local resume files are maintained separately from the site.

## Credits

Based on the [Sen Li academic website template](https://github.com/senli1073/senli1073.github.io). The original template's MIT license is retained in `LICENSE`.
