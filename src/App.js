import React, { useState, useEffect } from 'react'
import axios from 'axios';
  
function App() {
  
    const [loading, setLoading] = useState(false);
    const [patents, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
  
            setLoading(true);
  
            const response = await axios.get(
            "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast");
            
            console.log (response.data.items[0].forecasts);
            setPosts(response.data.items[0].forecasts);
  
            setLoading(false);
        }
  
        loadPost();
    }, []);
  
    return (
        <>
            <div className="App">
                {/* {loading ? (
                    <h4>Loading...</h4>) :
                    (patents.map((item) =>{
                      return<li>{item}</li>;
                    }) */}
            </div>
        </>
    );
}
  
export default App;