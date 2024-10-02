# Umleitung bei 404

In dieser Übung simulieren wir einen weiteren Anwendungsfall für die Umleitung des Benutzers, indem wir die `<Navigate />` Komponente von react-router-dom verwenden.

## Aufgaben

> 🧸 Sieh dir die vorhandenen Dateien an und mach dich mit dem Code vertraut, bevor du beginnst!

### Aufgabe 1

Im Ordner [components](./src/components/);

- Erstelle eine neue Komponente, `404.jsx`
- Die Seite muss folgende Informationen enthalten:
  - Eine Überschrift mit dem Text `"404"`
  - Einen Absatz mit dem Text `"Sorry, diese Seite existiert nicht! Du wirst zur Startseite umgeleitet..."`
- Verwende `useEffect`, `setTimeout` und die Komponente `useNavigate` von react-router-dom, um die Seite nach 3 Sekunden auf die `Home` Seite umzuleiten

### Aufgabe 2

Aktualisiere das Routing in der Datei [App.jsx](./src/App.jsx), sodass;

- Wenn der Benutzer versucht, auf eine Seite zuzugreifen, die nicht existiert, wird er auf die `404` Seite umgeleitet
- Du musst eine Route mit einem [catchall](https://reactrouter.com/en/main/route/route#splats) einrichten
- Du musst die `<Navigate />` Komponente von react-router-dom verwenden
