import React, {useState} from 'react';
import './UploadRental.scss';
import axios from 'axios';

const url = "http://localhost:8080/rental";


const Upload = ()=>{
    const [checkboxValue,setCheckboxValue] = useState("no");
    const [selectedImage,setSelectedImage] = useState(null);


    const checkHandler = () =>{
        let checkbox = document.querySelector('.upload__checkbox');
        if(checkbox.checked){
          setCheckboxValue('yes');
        } else{
          setCheckboxValue('no');
        } 
      }

    const onChangeHandler = (event) =>{
        setSelectedImage(event.target.files[0]);
        console.log(selectedImage);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const type = event.target.type.value;
        const beds = event.target.beds.value.trim();
        const bathrooms = event.target.bathrooms.value.trim();
        const furnished = event.target.checkbox.value;
        const adress = event.target.adress.value.trim();
        const price = event.target.price.value.trim();
        const description = event.target.description.value.trim();

        const data = new FormData();
        data.append('file',selectedImage);
        data.append('type',type);
        data.append('beds',beds);
        data.append('bathrooms',bathrooms);
        data.append('furnished',furnished);
        data.append('adress',adress);
        data.append('price',price);
        data.append('description',description);

        axios.post(url,data,{})
            .then(res =>{
                console.log(res);

            })
            .catch(err => {
                console.log("error");
            });
    }
    return (
        <div className ="upload">
            <form className ="upload__form" method="POST" onSubmit ={submitHandler}>
                <div className="upload__input-cont">
                    <label htmlFor="type-of-house" className="upload__labels">Type of House</label>
                    <select name="type">
                        <option value="House">House</option>
                        <option value ="Apartment">Apartment </option>
                        <option value ="Basement">Basement </option>
                        <option value ="Studio"> Studio </option>
                    </select>
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="beds" className="upload__labels">No of beds</label>
                    <input name="beds" type="number"/>
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="baths" className="upload__labels">No of bathrooms</label>
                    <input name="bathrooms" type="number"/>
                </div>
                <div className="upload__input-cont">
                    <label className="upload__furnished-label">Is Furnished? </label>
                    <label className="upload__switch">
                        <input  type="checkbox" onClick={checkHandler} name="checkbox" value= {checkboxValue} className="upload__checkbox"/>
                        <span className="upload__slider" required></span>
                    </label>
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="adress" className="upload__labels" required>Adress</label>
                    <input name="adress" type="text"/> 
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="email" className="upload__labels" required>Email</label>
                    <input name="email" type="email"/> 
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="price" className="upload__labels" required>Price</label>
                    <input name="price" type="number" /> 
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="image" className="upload__labels">Upload Image</label>
                    <input name="image" type="file" onChange ={onChangeHandler} className="upload__image" required/> 
                </div>
                <div className= "upload__textarea-cont">
                    <label htmlFor="description" className="upload__labels">Description</label>
                    <textarea name="description" cols ="35" rows ="3"  /> 
                </div>
                <div className="upload__submit-cont">
                    <button type ="submit" className="upload__submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Upload;