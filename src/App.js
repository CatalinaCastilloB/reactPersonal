import React from 'react';
import ItemComponent from './Component/ItemComponent';
import TablaComponent from './Component/TablaComponent';


const items=[
    {
        nombre: "lista",
        key:0
    }, 
    {
        nombre: "cosa",
        key:1
    }, 
    {
        nombre: "cuica",
        key:2
    }, 
    {
        nombre: "peluche",
        key:3
    },
    {
        nombre: "isshu",
        key:4
    }, 
    {
        nombre: "miyu",
        key:5
    }, 
    {
        nombre: "casona",
        key:6
    }, 
    {
        nombre: "lista",
        key:7
    }
    
]
/** las llaves {} son llamados a javascrip, no son placeholders
 * 
 * 
 * buena practica, todas los cambios deben comenzar con handdle...
 */
const App = () => {
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <h1>Lista</h1>
                    <ol>
                        {items.map(n => <ItemComponent nombre={n.nombre} key={n.key}/>)}
                    </ol>
                </div>
                <div className='col'>
                    <h1>formulario</h1>
                    <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"></input>
                    <br></br>
                    <button type="button" class="btn btn-primary">boton</button>
                </div>
            </div>
        </div>
    )

};

export default App;