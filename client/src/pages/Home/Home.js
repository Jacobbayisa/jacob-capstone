import React, {Component} from 'react';
import axios from 'axios';
import UploadRental from "../../components/UploadRental/UploadRental";
import img1 from "../../public/upload/img1.jpg";
import './Home.scss';

const url = 'http://localhost:8080/rental';

class Main extends Component{
    state = {
        rentalArr:null
    }

    componentDidMount(){
        axios.get(url)
            .then(response => {
                this.setState({
                    rentalArr: response.data.rentals
                });
                console.log(this.state.rentalArr[0].beds);
            })
    }
   
    render(){
        if(this.state.rentalArr){
            return(
                <div className="home">
                    {
                        this.state.rentalArr.map((rental,index) =>{
                            
                            return (
                                <UploadRental 
                                    img={require(`../../public/upload/${rental.image}`)}
                                    type={rental.type}
                                    adress={rental.adress}
                                    beds={rental.beds}
                                    bathrooms ={rental.bathrooms}
                                    furnished ={rental.furnished}
                                    description={rental.description}
                                    price ={rental.price}
                                    contact={rental.contact}
                                />
                            )
                        })
                     }
                </div>
            )
        } else
            return(<h1>Loading..</h1>)
        }
        
    
}

export default Main;