# Styling mit JavaScript

Wir haben gesehen, dass man CSS-Stile mit Stylesheets anwenden kann, aber wir können auch CSS-Stile dynamisch auf unsere Seite mit JavaScript anwenden.

## Aufgaben

Wir haben ein HTML-Menü für dich in der [index.html](/index.html) Datei erstellt.

Verwende nur JavaScript und nutze die [main.js](/main.js) Datei, um das Menü zu stylen. Bearbeite keine der anderen Dateien.

> 👿 **Ändere nicht** das HTML

> 🍤 **Verwende keine** CSS-Stylesheets

### Aufgabe 1

- Ändere die `fontFamily` des `<body>` Elements zu `Arial`
- Zentriere das `<h1>` Element, indem du die `textAlign` Eigenschaft auf `center` setzt

### Aufgabe 2

Die Menüüberschriften haben die Klasse `.category`.

- Wähle alle Elemente mit der Klasse `.category` aus
- Ändere den Stil dieser Elemente, so dass sie die folgenden CSS-Eigenschaften haben;
  - fontStyle: `italic`
  - fontSize: `2rem`
  - borderBottom: `1px solid black`

### Aufgabe 3

- Wähle das Element mit der Klasse `.main` aus
- Ändere den Stil dieses Elements, so dass es die folgenden CSS-Eigenschaften hat;
  - display: `flex`
  - flexFlow: `row wrap`
  - justifyContent: `space-around`
  - boxSizing: `border-box`

### Aufgabe 4

- Wähle alle Elemente mit der Klasse `.food-item` aus
- Setze einen oberen Rand von `1rem`
- Setze den Listentyp auf `none`

### Aufgabe 5

- Wähle alle Elemente mit der Klasse `.menu-category` aus
- Ändere den Stil dieser Elemente, so dass sie die folgenden CSS-Eigenschaften haben;
  - minWidth: `300px`
  - height: `10rem`
  - textAlign: `center`
  - padding: `1rem`
  - borderRadius: `5px`

### Aufgabe 6

- Erstelle eine Funktion namens `colorGenerator`, die eine zufällige Zahl von 0 - 255 zurückgibt
- Du brauchst 3 dieser Werte (für rot, grün und blau), um eine Farbe zu erzeugen
- Wähle die ungeordneten Listen mit der Klasse `.menu-category` aus
- Gib jeder Liste eine andere Hintergrundfarbe mit der erstellten `colorGenerator` Funktion

> Hinweis: Du kannst die CSS-Eigenschaft `rgb()` verwenden, die 3 ganze Zahlen von 0 - 255 akzeptiert
>
> - Beispiel: `rgb(200, 100, 40)`

## Referenzbild

Wenn du die Seite aktualisierst, sollten neue Farben zufällig generiert werden

![Referenzbild](reference.png)

