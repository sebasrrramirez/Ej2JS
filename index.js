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
console.log("Las pizzas con un ID impar son:");
const pizzasIdImpar = pizzas
  .filter((pizza) => pizza.id % 2 === 1)
  .map((pizza) => console.log(`-${pizza.nombre} - Id: ${pizza.id}`));

//b) Responder: ¿Hay alguna pizza que valga menos de $600?
const pizzasMenor600 = pizzas.filter((pizza) => pizza.precio <= 600);

console.log("Las pizzas que valen menos de $600 son:");
pizzasMenor600.forEach((pizza) => {
  console.log(`- ${pizza.nombre}- Precio: $${pizza.precio}`);
});

//c) El nombre de cada pizza con su respectivo precio.
console.log("El nombre de cada pizza con su respectivo precio");
const PizzaPrecio = pizzas.map((pizza) =>
  console.log(`-${pizza.nombre} - Precio: $${pizza.precio}`)
);

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta
// recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas
//tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
console.log("La pizza y sus ingredientes:");
const PizzaIngredientes = pizzas.map((pizza) =>
  console.log(`-${pizza.nombre} - Ingredientes: ${pizza.ingredientes}`)
);
