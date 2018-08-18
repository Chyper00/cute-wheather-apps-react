
import React from "react";



class Clima extends React.Component{

    render(){
        return(


    
<p>
            { this.props.city && <h1 > {this.props.city} </h1>}

            { this.props.description === 'clear sky' && <h1 ><img src="https://i.imgur.com/HRPHjFn.png"/></h1>} 
            { this.props.description === 'few clouds' && <h1 ><img src="https://i.imgur.com/yUAT1Tw.png"/> </h1>} 
            { this.props.description === 'scattered clouds' && <h1 ><img src="https://i.imgur.com/yUAT1Tw.png"/> </h1>} 
            { this.props.description === 'broken clouds' && <h1 ><img src="https://i.imgur.com/8iqkwGI.png"/></h1>} 
            { this.props.description === 'shower rain' && <h1 > <img src="https://i.imgur.com/UhUBWOe.png"/></h1>} 
            { this.props.description === 'rain' && <h1 > <img src="https://i.imgur.com/UhUBWOe.png"/></h1>} 
            { this.props.description === 'light rain' && <h1 > <img src="https://i.imgur.com/UhUBWOe.png"/></h1>} 
            { this.props.description === 'thunderstorm' && <h1 ><img src="https://i.imgur.com/rD29xXV.png"/></h1>} 
            { this.props.description === 'snow' && <h1 > Nevando <img src="https://i.imgur.com/8iqkwGI.png"/></h1>}
            { this.props.description === 'fog' && <h1 > Neblina <img src="https://i.imgur.com/8iqkwGI.png"/></h1>} 
            { this.props.description === 'mist' && <h1 > Neblina  <img src="https://i.imgur.com/8iqkwGI.png"/></h1>} 

            { this.props.temperature  && <h1 >{Math.round(this.props.temperature - 273.15)}°C  </h1>   }
           
            { this.props.humidity && <h1 > {this.props.humidity} </h1>} 
</p>    

           
			
                    
              

                         
        );
    }
};


export default Clima;

