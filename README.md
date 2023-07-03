# Calcolatore SHA256 per Documentazione PDND
## Descrizione
Questo software permette di calcolare in modo facile e veloce l'hash SHA256 di un qualsiasi oggetto JSON. Il suo principale scopo è quello di calcolare e verificare l'unicità della documentazione OpenAPI caricata sul portale Interoperabilità del PDND.

Il software **ordina alfabeticamente** tutte le coppie chiave-valore presenti nel documento JSON e consente di calcolare l'hash ignorando o meno le lettere maiuscole/minuscole all'interno del documento.

## Esempio
Il servizio è utilizzabile per fare qualche prova a questo link: https://abarchiviazione01.z6.web.core.windows.net/

## Come compilare ed eseguire il software
Per compilare il progetto basta aprire un terminale all'interno della cartella radice e digitare:
```
npm install
npm run build
npm run dev
```
e navigare all'indirizzo *localhost* generato dal terminale.
## Librerie utilizzate
| Nome | GitHub Repository | NPM Repository |
|--|--|--|
| crypto-js | https://github.com/brix/crypto-js | https://www.npmjs.com/package/crypto-js |
| json-stable-stringify | https://github.com/ljharb/json-stable-stringify | https://www.npmjs.com/package/json-stable-stringify |
