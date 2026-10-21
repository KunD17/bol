# Bol — Hindi words and everyday phrases

Flashcards for the *2000 core Hindi words* list, plus everyday Hinglish phrases for visiting family in India. Front: the Hindi word in Devanagari with how to
say it, e.g. **व्यापार** *vyaapaar*. Back: the English meaning, `business`. The word type
(`(n) masc`, `(v)`, `(adj)` …) is shown top-left on each card.

The app is a PWA (web app) you install on your phone from the browser. It works offline.

## The cards

The **Words | Phrases** switch at the top picks the deck.

### Words

All 1844 words are in `docs/cards.json`, one card per word:

```json
["व्यापार", "vyaapaar", "business", "(n) masc", "Work & school"]
```

`[Hindi, pronunciation, English, word type, topic]`. The words are grouped into 10 topics
(*Food & drink*, *People, body & health*, *Travel & transport* …), following the source list. A word listed more than once with different
meanings is one card, with the meanings joined (`वेतन` → `salary; wage`). The list was read from
the screenshots in `2000 core Hindi words/` with OCR and checked by hand; to fix a word, edit
`cards.json` directly.

### Phrases

The phrases are in `docs/phrases.json`, one per line, in the same format with a topic instead of
the word type:

```json
["बस, और नहीं, थैंक यू।", "Bas, aur nahi, thank you.", "That's enough, no more, thank you.", "At the table"]
```

They are for a trip through India visiting family: meeting relatives, family words, the dinner
table, compliments, festivals, health, getting around and shopping, plus a *You'll hear* topic
with things relatives will say to you. They are everyday Hinglish, the mix of Hindi and English
people actually speak, written the way people text it. The speaker is a woman (*rahi*, *gayi*,
*loongi*), and the tone is casual rather than textbook-formal. To add a phrase, add a line.

### Word-list pronunciation

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

- **Words / Phrases** switches deck. The dropdown below picks a topic (*Food & drink*,
  *At the table* …) or *All topics*; each deck remembers its own choice.
- Tap the card to flip it. **← Back** / **Next →** move through the words.
- 🔊 says the word or phrase out loud.
- **Learnt ✓** hides the word for good (saved on the phone). **✓ Learnt** lists them, words and phrases
  separately, with **Undo** and **Restore all**.
- 🔀 shuffles.

## Copyright

© 2026 Kunal Deoskar. All rights reserved. See [LICENSE](LICENSE).

The word list comes from *2000 core Hindi words* and is not covered by this copyright.
