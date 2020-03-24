import React, {Component} from 'react';
import axios from 'axios';
import img1 from '../../public/1584815042565-house.jpg';
import './Main.scss';

const url = 'http://localhost:8080/rental';

class Main extends Component{
    state = {
        rentalArr:null
    }

    componentDidMount(){
        axios.get(url)
            .then(response => {
                this.setState({
                    rentalArr: response.data
                });
                console.log(this.state.rentalArr);
            })
    }
    componentDidUpdate(){
        // axios.get(url)
        //     .then(response => {
        //         this.setState({
        //             rentalArr: response.data
        //         });
        //     })
    }
    render(){
        return(
            <div className="Main">
                <img src ={img1} alt="house_pic"/>
                <div className="main__card"></div>
                <div className="main__card"></div>
                <div className="main__card"></div>
                <div className="main__card"></div>
                <div className="main__card"></div>
                <div className="main__card"></div>
                <div className="main__card"></div>
    
            </div>
        )
    }
    
}

export default Main;