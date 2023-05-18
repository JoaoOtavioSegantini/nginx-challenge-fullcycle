export const addRootPage = (props) => {
  let data =
    ` 
  <link rel="stylesheet" href="./index.css" />
  <nav class="navbar-container">
    <div class="navbar-content">
        <span class="navbar-logout-button-text">
          Full Cycle Rocks!
        </span>
    </div>
  </nav>
  <div class="main-images">
    <img src="./img/fc-image.svg" />
    <img src="./img/fc.svg" />
  </div>
<table id="table_id" class="display">
<caption>Lista de nomes cadastrada no banco de dados</caption>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
        </tr>
    </thead>
    <tbody>
    ${props.results.map(
      (p) => `  
    <tr key={${p.id}}>
        <td>${p.id}</td>
        <td>${p.name}</td>
    </tr>`
    )}
      
    </tbody>
</table>
    `;

  return data.replaceAll(",", "");
};
