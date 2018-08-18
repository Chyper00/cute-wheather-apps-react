import React from "react";
import Autocomplete from 'react-google-autocomplete';




class Form extends React.Component {
    render(){
        return(
           <div className="col-md-4">
            <form onSubmit={this.props.getClima} >

            

              <div className="input-group">

              <Autocomplete
            onPlaceSelected={(place) => {
            console.log(place);
            }}
            types={['(regions)']}
            componentRestrictions={{country: "br"}}
            className="form-control" placeholder="Cidade ... "  name="city" />
                   

                    <div className="input-group-append" id="button-addon4">
                        <button className="btn btn-dark" >Ver o clima</button>
                    </div>

              </div>
     
                        
                
            </form>
           
            </div>
        );
    }
};

export default Form;