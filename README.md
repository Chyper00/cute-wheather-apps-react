<h1>Simple Wheather ReactJs Aplication </h1>
<img src="https://i.imgur.com/HRPHjFn.png">
<br/>

<a href="https://reactappsclima.herokuapp.com/"> DEMO </a>

 <h2> How to use </h2>
 <br/>
 Get Api for Google Maps 
 <b>index.html</b>
 <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=[YOUR-API-KEY]&libraries=geometry,places"></script>
 <br/>
 
 Get Openweathermap api 
 <b>app.js</b>
 const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},Br&appid=${API_KEY}`);
 
 
 <h2> Referencies </h2>
 
<li > <a href="https://reactjs.org/"> ReactJs </a></li>  
<li > <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/"> Bootstrap 4 </a></li>  
<li > <a href="https://nodejs.org/en/"> NodeJs </a></li>  
<li > <a href="https://openweathermap.org/api"> Open Weather API </a></li>
<li > <a href="https://www.etsy.com/shop/LookLookPrettyPaper?ref=l2-shopheader-name">Icones </a></li>  
<li > <a href="https://github.com/ErrorPro/react-google-autocomplete/ " > React Google Maps </a> </li>
