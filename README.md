# Crystal Quest: Listen & Leap

A 3D listening-practice game for CEFR A2–B1 / MUET learners. Students explore three
fantasy worlds, restore Listening Crystals by answering MUET-style questions on
**real recorded English** (VOA Learning English), and unlock bridges to the portal.

## Play it

Upload the whole folder to a GitHub repository and turn on **GitHub Pages**
(Settings → Pages → Deploy from branch → `main` / root). Then open:

```
https://<your-username>.github.io/<repo-name>/
```

> Always open the game from the GitHub Pages link. If `index.html` is opened directly
> as a file on a tablet or PC, browsers block the 3D models and painted art and the
> game falls back to simple shapes.

## Folder structure

| Path | What it is |
|---|---|
| `index.html` | Page layout (menus, HUD, listening panel, results screen) |
| `css/style.css` | Custom game styles |
| `css/tailwind.css` | Compiled Tailwind utility classes (no CDN needed) |
| `js/data.js` | **Content you can edit**: heroes, worlds, recordings and questions |
| `js/game.js` | Game engine (Three.js 3D world, physics, audio, scoring, report) |
| `js/lib/` | Three.js r128 and GLTFLoader (stored locally) |
| `art/` | Painted heroes, enemies, items, world cards and backdrops (`.webp`) |
| `models/` | Kenney Nature Kit 3D models (`.glb`) used for scenery |
| `audio/` | Backup copies of the VOA recordings (see below) |
| `.github/workflows/fetch-voa-audio.yml` | Downloads the VOA MP3s into `audio/` |

## Audio

Each recording streams from VOA first. If the school network blocks VOA, the game
plays the backup copy from `audio/`. To fill that folder, push this repo once:
the **Fetch VOA audio** workflow downloads the 8 MP3s automatically (or run it from
the Actions tab). If it fails with a permission error, set
Settings → Actions → General → Workflow permissions → **Read and write**.

## Editing questions

Open `js/data.js`. Each recording in `challenges` has 3–4 questions:

```js
{
  skill: 'Specific Detail',
  q: 'Where did Anna put the flour?',
  choices: ['In the cabinets', 'Under the sink', 'Inside the refrigerator'],
  correct: 2,            // index of the right answer (0, 1 or 2)
  hint: 'Shown after the first wrong try',
  evidence: 'Transcript line shown after answering'
}
```

Choices are shuffled in the game, so write them in any order.

## Swapping art

Replace any file in `art/` with a sharper image **of the same name** (transparent
`.webp`, same file name). No code changes are needed. Hero poses: `<hero>_idle`, `_run`, `_jump`, `_fall`, `_listen`,
`_answer`, `_celebrate`, `_back` (and `_damage` for Aiden and Rex).
World backdrops: `backdrop_w1.webp` … `backdrop_w3.webp` (wide panorama, no ground).

## How it plays

- Two plays per recording (like MUET); tick 🐢 *Slower* for 0.85× speed.
  Teachers can turn on **Practice mode** (unlimited plays) in Settings.
- 3-option questions, 2 tries each: 100 pts first try, 50 pts second try.
- The transcript evidence appears only after answering.
- Students enter their name and class on the menu. At the end of each world the
  results screen shows first-try accuracy per listening skill, with
  **Copy results** (paste into Google Sheets) and **Download CSV**.

## Credits

- Recordings and transcript extracts: **VOA Learning English**
  (learningenglish.voanews.com), public domain. Series: *Let's Learn English*
  Levels 1 & 2, *Education Tips*.
- 3D scenery: **Kenney Nature Kit** (www.kenney.nl), CC0. See `models/LICENSE-Kenney.txt`.
- 3D engine: **Three.js** r128 (MIT).
- Hero, enemy, item and world art: created for this project.
- Concept, questions and design: Crystal Quest project, Politeknik Port Dickson.
