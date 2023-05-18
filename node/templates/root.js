export const addRootPage = (props, styles) => {
  let data =
    `<div><h1>Full Cycle Rocks!</h1> <ul>Lista de nomes cadastrada no banco de dados${props.results.map(
      (p, i) => `<li key={${i}}>${p.name}</li>`
    )}</ul></div>` + styles;

  return data.replaceAll(",", "");
};
