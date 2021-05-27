console.log("=== CLIENTES ===");

(() => {

/* === UI === */

const ui = {
    table: document.querySelector("table tbody")
};

/* === ACTIONS === */

const getCustomers = async () => {
    const endpoint = "https://run.mocky.io/v3/ea32efab-c290-4fcf-85d9-293fbb84b9cc";

    const config = {
        method: "GET",
        headers: new Headers({
            "Content-type": "application/json"
        })
    };

    try {
        const response = await fetch(endpoint, config);
        const customers = await response.json();
        getCustomerSuccess(customers);
    } catch (error) {
        getCustomerError(error);
    }
};

const getCustomerSuccess = (customers) => {
  console.table(customers);

  // === IMPLEMENTAÇÃO #2

  // usando template engine (Handlebars)
  
  const lineTable = document.querySelector("#line-table").textContent; // seleciona o html pelo id e textContent -> retorna informação em formato de texto
  const template = Handlebars.compile(lineTable); // compila e devolve uma função; ou seja, é executável

  ui.table.innerHTML = template({ customer: customers }); // coloca os dados na tela, faz o merge

  
  // === IMPLEMENTAÇÃO #1

  // retorno implícito
  // só tem 1 parâmetro pode tirar ()
  // pode tb tirar o return e {}

  // ui.table.innerHTML =
  //   customers
  //       .filter(customer => customer.id <= 25) // trago novo array com os elementos filtrados (filter)
  //       .map(customer => {
  //         const { name, email, phone, country } = customer; // customer é um objeto; estou extraindo as propriedades que preciso
  //         return `<tr> 
  //                   <td>${name}</td>
  //                   <td>${email}</td>
  //                   <td>${phone}</td>
  //                   <td>${country}</td>
  //                 </tr>`;
  //       // retorno o html preenchido com os atributos
  //       // devolve os dados transformados (map)
  //       // formo um nov array com estes dados transformados
  //   }).join("")
  };

const getCustomerError = (error) => {
    console.table(error);
};

/* === INITIALIZE === */

getCustomers();

})();