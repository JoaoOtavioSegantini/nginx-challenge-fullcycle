export const addRootPage = (props, styles) => {
  let data =
    ` 
  <nav className="navbar-container">
    <div className="navbar-content">
        <span className="navbar-logout-button-text">
          Full Cycle Rocks!
        </span>
    </div>
  </nav>
    <img src="./img/fc-image.svg" />
    <img src="./img/fc.svg" />
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
    ` + styles;

  return data.replaceAll(",", "");
};
