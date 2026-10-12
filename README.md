
# NodePWD

NodePWD ist ein Node Proejkt der Passwort generiert. Man kann Passwortlänge angeben und man hat die möglich Zahlen und Sonderzeichen in das Passwort hinzuzufügen.

## Installation

```bash
npm install nodepwd
```

## Verwendung

Modul importieren

```javascript
const generatePassword = require("nodepwd");
```

### Passwort generieren

```javascript
console.log(generatePassword(10, true, false));
```

## Parameter

`generatePassword(length, numbers, special)` verwendet drei Parameter

