# 🌐 Progetto CRUD API con Postman e Sito Web

## 🔄 Descrizione del Progetto
Questo progetto dimostra l'uso di **API REST CRUD** per la gestione di dati remoti. Abbiamo inizialmente testato le API utilizzando **Postman**, per poi sviluppare un **sito web interattivo** che permette agli utenti di eseguire operazioni **Create, Read, Update, Delete (CRUD)** su un database remoto.

<p align="center">
    <img src="img/cover.jpg" alt="Cover" width="100%" />
</p>

## 🔧 Tecnologie Utilizzate
- **Postman** per testare le API.
- **JavaScript (Fetch API)** per interagire con il database.
- **HTML & CSS (Bootstrap 4.5)** per la struttura e lo stile.
- **API RESTful**

## 🌎 Endpoint API
Abbiamo utilizzato il seguente endpoint per gestire i dati:

```plaintext
https://striveschool-api.herokuapp.com/api/agenda
```

### 🔍 **Guida Rapida all'Uso dell'API**

1. **GET** - Recupera tutti gli elementi del database:
   ```plaintext
   GET https://striveschool-api.herokuapp.com/api/agenda
   ```

2. **POST** - Aggiunge un nuovo elemento (Esempio di payload JSON):
   ```json
   {
       "name": "T-Shirt",
       "description": "Maglietta in cotone",
       "price": 19.99,
       "time": "2025-01-23T22:07:59.261Z"
   }
   ```
   ```plaintext
   POST https://striveschool-api.herokuapp.com/api/agenda
   ```

3. **PUT** - Aggiorna un elemento esistente (sostituendo ID con il record corretto):
   ```plaintext
   PUT https://striveschool-api.herokuapp.com/api/agenda/{id}
   ```
   **Body JSON:**
   ```json
   {
       "name": "T-Shirt Modificata",
       "description": "Maglietta in cotone premium",
       "price": 24.99,
       "time": "2025-02-10T18:30:00.000Z"
   }
   ```

4. **DELETE** - Cancella un elemento esistente:
   ```plaintext
   DELETE https://striveschool-api.herokuapp.com/api/agenda/{id}
   ```

## 🌟 Funzionalità del Sito Web
- **Visualizzazione degli elementi** presenti nel database.
- **Aggiunta di nuovi elementi** attraverso un form intuitivo.
- **Modifica diretta** degli elementi esistenti con aggiornamento immediato.
- **Eliminazione di elementi** con conferma.
- **Design responsive** per un'ottima esperienza utente su desktop, tablet e mobile.

## 📖 Installazione e Utilizzo
1. **Clona il repository:**
   ```sh
   git clone https://github.com/tuo-repository/CRUD-API-Project.git
   ```
2. **Apri il file `index.html` nel browser.**
3. **Interagisci con il database usando il sito web.**
4. **Testa le API direttamente con Postman o un altro strumento di test API.**

## 🚀 Obiettivi del Progetto
- Apprendere e applicare **CRUD API con JavaScript**.
- Comprendere il funzionamento di **Postman per testare API REST**.
- Creare una **UI moderna e responsive**.
- Interagire con **un database remoto in tempo reale**.

## 📢 Contributi
Contributi e suggerimenti sono i benvenuti! Apri una **issue** o fai una **pull request**.

## 📚 Licenza
Questo progetto è distribuito sotto **MIT License** - Sentiti libero di modificarlo e migliorarlo!

