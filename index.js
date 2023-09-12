const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//Consigna a)  Las pizzas que tengan un id impar.

console.log("Las pizzas con ID impar");
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`La ${pizza.nombre} tiene ID ${pizza.id}`);
  }
});

//b) Responder: ¿Hay alguna pizza que valga menos de $600?
const precioPizza = 600; // guardo en variable el precio

const pizzaMenos600 = pizzas.find((pizza) => pizza.precio < precioPizza);
if (pizzaMenos600) {
  console.log(`Si, hay pizzas por menos de ${precioPizza}`);
  pizzas.forEach((pizza) => {
    if (pizza.precio < precioPizza) {
      console.log(`La ${pizza.nombre} cuesta $${pizza.precio}`);
    }
  });
} else {
  console.log(`No hay pizzas por menos de ${precioPizza}`);
}

//c) El nombre de cada pizza con su respectivo precio.
console.log("El nombre de cada pizza con su respectivo precio");
pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre}, cuesta $${pizza.precio}`);
});

//const PizzaPrecio = pizzas.map((pizza) =>
//  console.log(`-${pizza.nombre} - Precio: $${pizza.precio}`)
//);

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta
// recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas
//tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
console.log("Los ingredientes de cada pizza");
pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre}, tiene ${pizza.ingredientes}`);
});

//console.log("La pizza y sus ingredientes:");
//const PizzaIngredientes = pizzas.map((pizza) =>
//  console.log(`-${pizza.nombre} - Ingredientes: ${pizza.ingredientes}`)
//);
