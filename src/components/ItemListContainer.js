import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Productos from './data'
import '../App.css'; 
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {categoria} = useParams ()
    const getData = () => {
        return new Promise(res =>{
            if (categoria){
            setTimeout(() => {res(Productos.filter(unProducto => unProducto.categoria === categoria))}, 500);
            }else {setTimeout(() => {res(Productos)}, 500);
        }
        })
    }

    useEffect(() => {
        getData().then(dataProductos => setProductos(dataProductos))
        return() =>{
            setProductos([])
        }
    }, [categoria]);



    return (
    <>
    {
        productos.length ? <ItemList productos={productos} />  : <h1>Cargando...</h1>
    }   
    </>
    );
    
    }
export default ItemListContainer;
