import React,  { useState } from 'react';
import '../App.css'; 
import ItemCounter from './ItemCounter'
import { Link } from 'react-router-dom';
export const ItemDetails = ({data, cantidad})=>{
    

    const [show, setShow] = useState(false);

    function agregarAlCarrito(data,cantidad){
        setShow(true)
        const productoCarrito ={id: data, cantidad: cantidad}
        console.log(productoCarrito)
    }
    

    return(

<div key={data.id} className='detailContent'>
            <div className='cardDetail'>
                    <img src={data.img} className='imagenDetail'alt="joyas"/>
                    <p className='parrafoDetail'>{data.nombre}</p>
                    <p className='parrafoDetail'>Precio: ${data.precio} CLP</p>
                    <p className='cantidadCard'>Stock: {data.maximo}</p>
                    <p className='parrafoDetail'>Descripcion: {data.descripcion}</p>
                    {show ? (<Link to="/cart" className="container btn btnDetail btn-primary" type="button">
                Ver Bolsa 
                </Link>
                
                ) : <ItemCounter maximo={data.maximo} id={data.id} cantidad={cantidad} onAdd={agregarAlCarrito} /> 
                }
                <Link to="/" className="container btn btnDetail btn-primary" type="button">
                Continuar Comprando
                    </Link></div>
            </div>
        
    )
}
export default ItemDetails;
