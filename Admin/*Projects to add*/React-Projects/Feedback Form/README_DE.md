# Übung zum Anmeldeformular

Sieh dir den Beispiel-Screenshot unten an und implementiere ihn so gut wie möglich mit React. Versuche, den Stil so gut wie möglich zu treffen.

Wenn du auf die Senden-Taste klickst, musst du das Formular ausblenden und eine Dankesnachricht anzeigen, zum Beispiel "Vielen Dank für dein Feedback!".

## Beispiele

[Live-Demo](https://digitalcareerinstitute.github.io/SPA-Component-FeedbackForm/)

![](example-form-filled.png)

![](example-thank-you.png)

## Anforderungen

- Bearbeite nicht App.css.

- Erstelle eine Zustandsvariable `data` (vom Typ Object) in App
    - Damit werden die Eingaben verfolgt

- Erstelle eine Zustandsvariable `submitted` (vom Typ Boolean) in App
    - Damit wird verfolgt, ob das Formular abgeschickt wurde

- Erstelle eine `onChange` Funktion in `App`, um alle Zustandsaktualisierungen der Eingabe zu verarbeiten

- Erstelle ein `<form>` für die Eingaben
    - Verwende ein `onSubmit`, um das Absenden der Daten zu verarbeiten
    - Es ist nicht notwendig, die Daten tatsächlich irgendwohin zu senden

- Erstelle eine `Input.jsx` Komponente
    - Rendere alle drei Eingaben von App mit `Input`
    - Beachte, dass die Nachricht ein `textarea` ist
    - Input benötigt name, type, value und onChange als props
    - Erstelle `Input.css`, um das Styling von label, input und textarea zu behalten
