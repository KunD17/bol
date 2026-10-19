# Bol — 2000 core Hindi words

Flashcards for the *2000 core Hindi words* list. Front: the Hindi word in Devanagari with how to
say it, e.g. **व्यापार** *vyaapaar*. Back: the English meaning, `business`. The word type
(`(n) masc`, `(v)`, `(adj)` …) is shown top-left on each card.

The app is a PWA (web app) you install on your phone from the browser. It works offline.

## The cards

All 1885 words are in `docs/cards.json`, one card per word:

```json
["व्यापार", "vyaapaar", "business", "(n) masc"]
```

`[Hindi, pronunciation, English, word type]`. A word listed more than once with different
meanings is one card, with the meanings joined (`वेतन` → `salary; wage`). The list was read from
the screenshots in `2000 core Hindi words/` with OCR and checked by hand; to fix a word, edit
`cards.json` directly.

### Pronunciation

The pronunciation line uses the list's own spelling: a capital letter marks the dental or
other "soft" sound (`T` = त, `D` = द, `N` = न, `S` = स, `L` = ल), lower case the retroflex or
"hard" one (`t` = ट, `d` = ड, `n` = ण), and doubled vowels are long (`aa` = आ, `ii` = ई,
`uu` = ऊ). 🔊 on the card reads the word aloud with the phone's Hindi voice.

## Try it on your computer

```sh
python3 -m http.server -d docs 8000   # open http://localhost:8000
```

## Put it on your phone

1. Commit and push to GitHub.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/docs`** → Save
   (the repo must be public on a free account).
3. On your phone, open `https://kund17.github.io/bol/`.
   - **Android (Chrome):** tap **⬇ Install Bol as an app**, or menu (⋮) → **Install app**.
   - **iPhone (Safari):** Share ⬆︎ → **Add to Home Screen**.

The app saves itself on the phone on the first visit and then works fully offline. After you push
changes, open it once while online; the update appears the time after that.

## Using the app

- Tap the card to flip it. **← Back** / **Next →** move through the words.
- 🔊 says the word out loud.
- **Learnt ✓** hides the word for good (saved on the phone). **✓ Learnt words** lists them, with
  **Undo** and **Restore all**.
- 🔀 shuffles.

## Copyright

© 2026 Kunal Deoskar. All rights reserved. See [LICENSE](LICENSE).

The word list comes from *2000 core Hindi words* and is not covered by this copyright.
