import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import color  from '@mui/system';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCreate() {

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [imageError, setImageError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0 || image.length === 0) {
      setTitleError(true);
      setImageError(true);
    }

    if (title && image) {
      const confirmed = window.confirm("Are you sure you want to add this item ?");
      if(confirmed === true){
      fetch('http://localhost:3001/Products',
        {
          method: 'POST',
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ title, image })
        }).then(() => { navigate('/admin/Products') })
      } else {
        toast("Cancle");
      }
    }
  }


  const handleChange = (e) => {
    debugger
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'title') {
      if (!value) {
        setTitleError(true);
      } else {
        setTitle(value);
        setTitleError(false);
      }
    }

    if (name === 'image') {
      if (!value) {
        setImageError(true);
      } else {
        setImage(value);
        setImageError(false);
      }
    }
  }


  return (

    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label >Title</label>
        <input type="text" name="title" id="title" onChange={handleChange} />
        {titleError && title.length <= 0 ?
          <label style={{ color: "red" }} >Please Enter some value</label> : " "}
        <label >Image</label>
        <input type="text" name="image" placeholder='Upload Image' onChange={handleChange} />
        {imageError && image.length <= 0 ?
          <label style={{ color: "red" }} >Please Enter some value</label> : " "}
        <button type="submit"  >Add Product</button>
        <ToastContainer />
      </form>
    </Wrapper>
  )
}

export default ProductCreate
