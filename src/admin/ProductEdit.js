import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';




function ProductEdit() {
debugger
    const { id } = useParams();
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
         
        fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json()).then(res => {
                setTitle(res.title);
                setImage(res.image); 
            })
    }, [id]);

    const submit = (e) => {
        e.preventDefault();
        if(window.confirm('Are you sure , you want to edit this item ?')){
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ title, image })
        }).then(() => { navigate('/admin/Products') })
        toast("Product has been edited Successfully");
    }
    else {
        
    }
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <label>Title</label>
                <input type="text" name="title" defaultValue={title} onChange={e => setTitle(e.target.value)} />
                <label>Image</label>

                <input type="text" name="image" defaultValue={image} onChange={e => setImage(e.target.value)} />
                <button type="submit" >Save</button>
            </form>
        </Wrapper>
    )
}

export default ProductEdit
