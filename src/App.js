import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Clima from "./components/Clima";

const API_KEY = "17eda3bf5e032a90a90e18c8a3f93f62";



class App extends React.Component{

  state = {
    city : undefined,
    temperature: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    erro : undefined

  }


  getClima = async (e) =>{    

    e.preventDefault();    

    const cidade = e.target.elements.city.value;
 
    const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},Br&appid=${API_KEY}`);
    const api_call2= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade},Br&appid=${API_KEY}`);
    const data = await api_call.json();
    const data2 = await api_call2.json();
    const datas = [];
    var j = 1;
    var today = new Date();

    console.log(today.getDate());
    

     
    
  


    console.log(datas);
    

   
    
    if (cidade) {

      this.setState({
        city:data.name,
        temperature: data.main.temp,
        country:data.sys.country,
        humidity:data.main.humidity,
        description: data.weather[0].description,
        descriptionIcon: data.weather[0].icon,
        dia: today.getDate(),
        mes: today.getMonth(),
        erro:''
        
      });

      //console.log(data);

    

    }else{


      this.setState({
        
        erro :  '*'
        
      });


    

    }
  
    

    
    
  }
  render(){
    return(
      

  <div className="container-fluid">
<br/>

  <Form getClima={this.getClima} getcountry={this.getcountry}/> 
<br/>

   <div className="col-md-4">
      <div className="card text-white bg-primary mb-3" >
        <div className="card-header"><h1><Clima city={this.state.city}/> </h1>{this.state.dia} / {this.state.mes}</div>
        <div className="card-body">
          <h5 className="card-title"><center><Clima temperature={this.state.temperature} /> </center></h5>
          
          <p className="card-text"><center><Clima description={this.state.description}/></center></p>
        </div>
<hr/>
        <div className="card-text">
          <ul className="list-inline">
            <li className="list-inline-item">DOM </li>
            <li className="list-inline-item">SEG </li>
            <li className="list-inline-item">TER </li>
            <li className="list-inline-item">QUA </li>
            <li className="list-inline-item">QUI </li>
            <li className="list-inline-item">SEX </li>
            <li className="list-inline-item">SAB </li>
          </ul>

        </div>
      </div>
    </div>



   



  </div>

    

      
      

       
   

    );
  }
};

export default App;