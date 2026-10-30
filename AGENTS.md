# Agents

Working notes for coding agents in this repository. `README.md` covers the project for people.

## Story size

A story is one organ or one system. A page earns its place when the model changes on it: a layer is peeled, a
structure is lit, the camera turns, or the clip runs to a new phase. Five to twelve pages is the usual size.

## Checking a story

1. `./node_modules/.bin/kitap check <story> [page ids]` reads the pages, texts, images, structures and models and
   prints every problem it finds.
2. `./node_modules/.bin/kitap dev --story <story> --out .cache/<story>-site --port <port>` builds that story alone.

## Structures in the text

A page's text links each structure its model highlights the first time it names it, in every language:
`[sol karıncık](@left-ventricle)`. The id is one of the structures the page's `beden.parts` lists.

## Translations

`./node_modules/.bin/kitap i18n tr --story <story>` adds an empty key for every new English string. A
structure's strings sit in its folder's `i18n/tr.yaml`, an image folder's caption in that folder's `i18n/tr.yaml`.
