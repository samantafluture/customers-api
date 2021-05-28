console.log("=== CLIENTES XHR ===");

(() => {

  /* === UI === */

  const ui = {
    table: document.querySelector("table tbody")
  };

  console.log(ui);

  /* === ACTIONS === */

  const getCustomers = () => {
    console.log("getting...");
    
    // 1 - "new" -> gero um objeto de request
    const  request = new XMLHttpRequest();
    
    // 2 - "open" -> abro a requisição
    // especifico: method, endpoit, assíncrono ou não
    request.open("GET", "https://run.mocky.io/v3/ea32efab-c290-4fcf-85d9-293fbb84b9cc", true);

    request.addEventListener("readystatechange", function () {
    console.log(request.readyState, request.DONE && request.response);
    if (request.readyState === request.DONE) {
      getCustomerSuccess(request.response);
    }
  });

    request.addEventListener("error", function() {
      console.warn("deu ruim", request.readyState);
    });

    // 3 - "send" -> mando a requisição para funcionar
    request.send();

  };

  const getCustomerSuccess = (response) => {
    const customers = JSON.parse(response);  // transforma a resposta em JSON fazendo parse e poder utilizar

    const lineTable = document.querySelector("#line-table").textContent; 
    const template = Handlebars.compile(lineTable); 
    ui.table.innerHTML = template({ customer: customers });

  };

  /* === INITIALIZE === */

  getCustomers();

})();