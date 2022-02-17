// import React from 'react';
// // Atribuindo a uma Variável
// function App() {
//     return <h1>Primeiro Componente Sergio</h1> 
// }
// export default App;

// // Função anonima e exportando direto.
// const App = function (){
//     return <h2>Primeiro Componente Sergio2</h2>
// }
// export default App;

// // Usando arrow function

// export default function () => {
//     return <h3>Primeiro Componente Sergio3</h3>
// }

// // Usando arrow function com o return implicito
// export default () => <h4> Primeiro Componente 4 </h4>


// Dentro src, criar a pasta components.
// Dentro de components criar um arquivo chamado Primeiro.js.
// Fazer os imports necessários:
import React from 'react';

// Criar a função que irá retornar o JSX:
export default () => <h2>Primeiro</h2>


// No arquivo App.js, fazer a importação do componente que acabamos de criar:
import Primeiro form './components/Primeiro';

// Invocar o componente Primeiro dentro da função do componente App:
export default function App(){
    return(
        <Primeiro></Primeiro>
    );
} 

//Caso o componente não possui conteúdo a ser inserido, podemos usar dessa maneira:
export default function App(){
    return (
        <primeiro />
    );
}

// Vamos criar um arquivo chamado Multi.js. Dentro dele vamos criar 3 funções
// para serem exportadas:

import React from 'react';

export default function () {

    return <h2>Comp Padrão</h2>
}

export function Component1(){
    return<h2>Component 1</h2>
}

export function Component2(){
    return <h2>Componente 2</h2>
}

