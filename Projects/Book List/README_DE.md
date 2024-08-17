# Die Bücherliste

Erstelle eine dynamisch generierte Buch-Website! Anstatt die Bücher direkt in das HTML einzufügen, generieren wir das HTML dynamisch basierend auf einem Array von JavaScript-Objekten und fügen unsere CSS-Klassen mit der **classList API** hinzu.

## Aufgabe

Die Datei [js/main.js](js/main.js) enthält die Variable `books` - ein Array von JavaScript-Objekten - jedes Objekt repräsentiert ein Buch.

- Erstelle eine responsive Einzelseiten-Website, die die Bücher in der Variable `books` auflistet. Schreibe etwas JavaScript, um durch das Array zu iterieren und das HTML für deine Buchliste zu generieren.

- Du kannst deinen JavaScript-Code direkt in [js/main.js](js/main.js) schreiben.

- Du **musst** kein HTML oder CSS für diese Aufgabe schreiben (sie wurden bereits für dich vorbereitet).

- Siehe die Referenzbilder unten, um eine Vorstellung vom Endergebnis zu bekommen.

## Anforderungen

- Verwende JavaScript, um das `<ul>` HTML-Element mit der Klasse `book-list` auszuwählen.
- Für jedes Buch musst du ein `<li>`-Element erstellen und es an das `<ul>` anhängen.
- Jedes `<li>`-Element sollte drei untergeordnete Elemente haben, um die Buchdaten zu halten;
  - `<img />` mit der Klasse `book-img` für das Bild
  - `<h2>` mit der Klasse `book-title` für den Titel
  - `<p>` mit der Klasse `book-author` für den Autor
- Die Liste der Bücher muss sortiert werden, indem die Namen der Autoren von A➡Z verglichen werden.

## Hinweise

- 💫 Hier kommt die Array-Methode [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) wirklich zum Einsatz. Sie sollte im Zentrum deiner Anwendung stehen. Verwende sie, um durch das Bucharray zu iterieren und das HTML für deine Buchliste zu generieren.

- Du kannst die Array-Methode [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) verwenden, um ein Array zu sortieren.

## Referenzbild

![Referenz](./reference.png)
