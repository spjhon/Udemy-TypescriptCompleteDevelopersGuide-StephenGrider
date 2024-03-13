import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//Entonces para prevenir esos errores vamos a aplicar algo de typescript para protejer 
// la forma en que se utiliza el flujo de datos

//Esta es una INTERFACE, lo que hace es para definir la estructura de un objeto
interface Todo {
  id: number;
  title: string;
  completed: boolean
}

axios.get(url).then((response) => {
  const todo = response.data as Todo; //aqui se le agrega el as para asignar esa interface a la constante
  //de forma que lo que llegue a esa constante y en caso de que no se cumpla pues que de el aviso antes
  //de ejecutar el codigo, en este caso esta dando aviso que las key no son las mismas
  //otra ventaja es que no solo es con las key sino su typo de contenido

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

//en esta funcion se muestra otro ejemplo de como typescript ayuda a definir por ejemplo los correctos
//parametros de la funcion diciendo que sus valores pueden ser any y eso es malo

logTodo(ID, title, finished); //Typescript mira inclusive el orden de los argumentos
});

const logTodo = (id: number, title: string, completed: boolean) => { //con el :number se le esta diciendo que type entra en cada parametro
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`);
}
//en este archivo se puede apreciar que hay errores que no se ven sino hasta que se ejecuta el programa
//
