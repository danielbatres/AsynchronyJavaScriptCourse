import fetch from 'node-fetch';
const API ="https://api.escuelajs.co/api/v1";

const fetchData = urlApi => fetch(urlApi);

// fecthData(`${API}/products`)
// .then(response => response.json())
// .then(products => console.log(products))
// .then(() => console.log("Hola"))
// .catch(error => console.log(error))
// .finally(() => console.log("Finally"));

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products);
    fetchData(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(product => {
    console.log(product.title);
    fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => console.log(category.name))
.catch(error => console.log(error))
.finally(() => console.log("Finally"));