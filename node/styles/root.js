export const rootStyles = `
<style> 

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {

    background-color: #6D6649;
    height: 85vw;
}

li { 
    margin-top: 0.6rem; 
    margin-bottom: 0.3rem; 
    margin-left: 1rem; 
    font-weight: normal;
   }

li:nth-child(1) {
    margin-top: 1.5rem; 

   }

ul {
    font-weight: bold;
    font-size: 1.2rem;
   }

thead {
    background-color: #F7D79D;
    padding: 0.8rem;
}

th, td {
    border: 1px solid black;
    padding: 8px;

  }

  tr, td {
    background-color: #fff;
  }

  td {
    padding: 0.8rem;
  }

  table {
    border-collapse: collapse;
    text-align: left;
    width: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    margin-bottom: 20px;
  }

  thead th:nth-child(1) {
    width: 8%;
  }

  thead th {
    width: 25%;
    padding: 15px;
  }

  caption {
    font-weight: bold;
    font-size: 24px;
    text-align: left;
    color: #fff;
    margin-bottom: 16px;

  }

  nav  {
    width: 100%;
    background-color:  #FFCC01;
    padding: 1.2rem;
    height: 10rem;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  
  span {
    display: block;
    font-weight: bold;
    font-size: 35px;
    line-height: 19.07px;
    letter-spacing: -1.5%;
    color: #fff;
  }

  
   img:nth-child(3) {
    position: absolute;
    width: 18.8rem;
    height: 68px;
    background-repeat: no-repeat;
    top: 32%;
    left: 45%;
}
  

img:nth-child(2) {
    position: absolute;
    top: 30%;
    left: 40%;
    width: 5rem;
    height: 82px;
    background-repeat: no-repeat;
}

</style>
`;
