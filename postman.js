//TODO: Epicode endpoint https://striveschool-api.herokuapp.com/api/agenda
//* Quick Guide:
//* GET call to root endpoint: Returns all DB items
//* POST call with body object like
//* { name: [stringl, description: [stringl, price: [number], time: [AAAA-MMDDTHH: II: SS. CCCZ] }
//* PUT call with record ID as slug and body with updated data.
//* DELETE call with record ID as slug (no payload needed)

//const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/agenda';


const BASE_URL = "https://striveschool-api.herokuapp.com/api/agenda";

// 🔹 Funzione per ottenere tutti i record (GET)
async function fetchRecords() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Errore nel recupero dei dati");

        const data = await response.json();
        const tableBody = document.getElementById("dataTable");
        tableBody.innerHTML = "";

        data.forEach(record => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="record-id">${record._id}</td>
                <td>${record.name}</td>
                <td>${record.description}</td>
                <td>${record.price}€</td>
                <td>
                    <button class="btn btn-info btn-sm" onclick="loadRecord('${record._id}', '${record.name}', '${record.description}', '${record.price}')">
                        <i class="fas fa-edit"></i> Modifica
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRecord('${record._id}')">
                        <i class="fas fa-trash-alt"></i> Elimina
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Errore:", error);
    }
}

// 🔹 Funzione per creare un nuovo record (POST)
async function createRecord() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    if (!name || !description || !price) {
        alert("Tutti i campi sono obbligatori!");
        return;
    }

    const newRecord = { 
        name, 
        description, 
        price: parseFloat(price), 
        time: new Date().toISOString() 
    };

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRecord)
        });

        if (!response.ok) throw new Error("Errore nella creazione del record");

        alert("Elemento aggiunto con successo!");
        resetForm();
        fetchRecords();
    } catch (error) {
        console.error("Errore:", error);
    }
}

// 🔹 Funzione per caricare i dati nei campi input per la modifica
function loadRecord(id, name, description, price) {
    document.getElementById("recordId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("description").value = description;
    document.getElementById("price").value = price;
    document.getElementById("updateButton").disabled = false;
}

// 🔹 Funzione per aggiornare un record (PUT)
async function updateRecord() {
    const id = document.getElementById("recordId").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    if (!id) {
        alert("Nessun elemento selezionato per l'aggiornamento!");
        return;
    }

    if (!name || !description || !price) {
        alert("Tutti i campi devono essere compilati!");
        return;
    }

    const updatedRecord = { 
        name, 
        description, 
        price: parseFloat(price), 
        time: new Date().toISOString()
    };

    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedRecord)
        });

        if (!response.ok) throw new Error("Errore nell'aggiornamento del record");

        alert("Elemento aggiornato con successo!");
        resetForm();
        fetchRecords();
    } catch (error) {
        console.error("Errore:", error);
    }
}

// 🔹 Funzione per eliminare un record (DELETE)
async function deleteRecord(id) {
    const conferma = confirm("Sei sicuro di voler eliminare questo elemento?");
    if (!conferma) return;

    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Errore nell'eliminazione del record");

        alert("Elemento eliminato con successo!");
        fetchRecords();
    } catch (error) {
        console.error("Errore:", error);
    }
}

// 🔹 Funzione per resettare il form dopo un'operazione
function resetForm() {
    document.getElementById("recordId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("updateButton").disabled = true;
}

// 🚀 Carica i dati all'avvio
window.onload = fetchRecords;




