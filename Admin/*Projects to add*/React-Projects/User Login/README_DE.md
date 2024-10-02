# Login mit Eingabefokus

In dieser Übung geht es um die Verwendung von `useRef` und das Lesen von Code in einem bestehenden Projekt.

Der Code dieses Projekts ist zum größten Teil fertig, deine Aufgaben beziehen sich auf das Hinzufügen fehlender Funktionen. Es gibt mehrere Möglichkeiten, die Anforderungen zu erfüllen, aber in diesem Fall verwende mindestens `useRef`. Du kannst auch andere Hooks verwenden.

## Aufgabe

## Anforderungen

- Lies den Code und teste die Anwendung
- Dein Ziel ist es, die Benutzererfahrung zu verbessern
- Wenn die Anmeldedaten falsch sind, wird ein Fehler angezeigt
- Deine Aufgaben:
    - Bearbeite nur `Login.jsx`
    - Verbessere die Benutzererfahrung nach dem Klicken auf den Login-Button
    - Wenn der Fehler mit dem Benutzernamen zusammenhängt, `fokusiere` das Benutzernamen-Eingabefeld
    - Wenn der Fehler mit dem Passwort zusammenhängt, `fokusiere` das Passwort-Eingabefeld

- Die oben genannten Verbesserungen sollten auch funktionieren, wenn der Benutzer nur die Tastatur verwendet
    - Erinnerung: Du kannst mit `Tab` zwischen fokussierten Elementen wechseln
    - Du kannst `Enter` drücken, wenn der Login-Button fokussiert ist, um ihn zu aktivieren

- **Optionale Bonusaufgabe** Füge eine Umschalt-Checkbox (toggle) hinzu, die es dem Benutzer ermöglicht, sein Passwort in Klartext zu sehen. Fokusiere das Passwortfeld, wenn jemand auf den Button klickt.

## Hinweise

- Um zu fokussieren, benötigst du das DOM-Element und rufst `element.focus()` auf
- https://developer.mozilla.org/de/docs/Web/API/HTMLElement/focus
