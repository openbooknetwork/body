# Open Body Book

Stories for step-through models of the human body, published at https://openbodybook.org. A free educational
project. The pages are built with [kitap](https://github.com/openbooknetwork/kitap) and the models are drawn by
[beden](https://github.com/openbooknetwork/beden). Each folder under `content/` is one story and builds to its
own page.

## Work on it

```
npm install
npm run dev
npm run build -- --strict
```

## Layout

- `site.yaml` names the main page, the engine and the order of the stories.
- `content/<story>/` holds one story: pages, texts per language, a folder per structure under
  `shared/structures/`, a folder per model under `shared/models/` and a folder per image under `shared/images/`.
  `content/shared/images/` holds the images several stories show.
- `content/<story>/i18n/<lang>.yaml` and `i18n/<lang>.yaml` hold the translations; English is inline.

## A page

The book's fields sit at the top of `page.yaml`, beden's under `beden:`. A page names a model, a camera, the
layers to show, the structures to highlight and a clip position:

```yaml
title: "Systole"
beden:
  model: heart
  camera: anterior
  layers: [myocardium, valves]
  parts: { highlight: [left-ventricle], ghost: [atria] }
  clip: { name: beat, from: 0.3, to: 0.6 }
```
