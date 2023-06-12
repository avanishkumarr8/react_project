import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import ProductEdit from "./admin/ProductEdit";
 

function Products() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const del = (id) => {
        
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE'
        });
        const confirmed = window.confirm("Are you sure you wish to delete this item?");

        if(confirmed) {
        setProducts(products.filter(items => items.id !== id));
        toast("Product has been deleted Successfully");
        }
        else {
            console.log('Deletion canceled'); 
        }
    }

    const alertBox = (id) => {
        const confirmed = window.confirm("Are you Sure You want to Edit this Product");
           if(confirmed === true){
            
            // <Route path='/admin/Product/:id/Edit' Component={ProductEdit} /> 
            // navigate(`/admin/Products/${items.id}/Edit`)
            navigate(`/admin/Product/${id}/Edit`);
           }
           else{
            
           navigate('/admin/Products')
        }

    }

    return (
        <Wrapper>
            <Link to="/admin/ProductCreate" className='btn'>Add Products</Link>
            <table>
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(items => {
                        return (
                            <tr key={items.id}>
                                <td>{items.id}</td>
                                <td width={700}>{items.title}</td>
                                <td><img src={items.image} alt={items.title} width="100" /></td>
                                <td>
                                    {/* <Link to={`/admin/Product/${items.id}/Edit`} className='btn' >Edit</Link> */}
                                    <button className='btn' onClick={()=>alertBox(items.id)} >Edit</button>

                                    <button onClick={() =>{
                                        del(items.id);
                                        }}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    )}


                </tbody>
                <ToastContainer />
            </table>
        </Wrapper>
    )
}

export default Products
