import React, {useState} from 'react';
import './upload.scss';


const Upload = ()=>{
    const [checkboxValue,setCheckboxValue] = useState(false);

    const checkHandler = () =>{
        let checkbox = document.querySelector('.upload__checkbox');
        if(checkbox.checked){
          setCheckboxValue(true);
        } else{
          setCheckboxValue(false);
        } 
      }
    return (
        <div className ="upload">
            <form className ="upload__form">
                <div className="upload__input-cont">
                    <label htmlFor="type-of-house" className="upload__labels">Type of House</label>
                    <select name="type-of-house">
                        <option value="house">House</option>
                        <option value ="apartment">Apartment </option>
                        <option value ="basement">Basement </option>
                        <option value ="studio"> Studio </option>
                    </select>
                </div>
                <div className="upload__input-cont">
                    <label className="upload__furnished-label">Is Furnished? </label>
                    <label className="upload__switch">
                        <input  type="checkbox" onClick={checkHandler} name="checkbox" value= {checkboxValue} className="upload__checkbox"/>
                        <span className="upload__slider" required></span>
                    </label>
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="Zipcode" className="upload__labels">ZipCode</label>
                    <input name="zipcode" type=""/> 
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="beds" className="upload__labels">No of beds</label>
                    <input name="beds" type="number"/>
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="baths" className="upload__labels">Number of bathrooms</label>
                    <input name="" type="number"/>
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="date" className="upload__labels">Date of Availablity</label>
                    <input name="date" type="date"/> 
                </div>
                <div className= "upload__input-cont">
                    <label htmlFor="price" className="upload__labels">Price</label>
                    <input name="price" type="number" /> 
                </div>
                <div className="upload__submit-cont">
                    <button type ="submit" className="upload__submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Upload;