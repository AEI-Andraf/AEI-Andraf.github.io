# romain-jaffuel.github.io

Personal portfolio — https://romain-jaffuel.github.io/

A static single page (no build step, no framework). Open `index.html` in a browser,
or serve the folder locally:

```bash
python -m http.server 8000
```

## Layout

```
index.html                 the whole page: home, resume, projects, contact
assets/
├── css/style.css          all styling
├── js/main.js             project modals (open/close, Escape, keyboard)
├── docs/                  CV and project reports (PDF)
├── img/
│   ├── background.png     page background
│   ├── logos/             schools, tools and organisations
│   └── projects/          project thumbnails and screenshots
└── video/                 project demo clips (MP4)
```

## Adding a project

1. Drop the thumbnail in `assets/img/projects/` (square images crop best).
2. Add a card at the top of the grid in the `#projects` section.
3. Add the matching `<div id="projetN" class="modal">` in the *Project modals* block,
   wiring `showProject('projetN')` / `closeProject('projetN')`.

Content licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
