import { useState } from "react";
import Card from "./components/Card";
import axios from 'axios';

function App() {
  const [inputAddress, setInputAddress] = useState("")
  const [outlets, setOutlets] = useState([])
  const handleChange = (e) => {
    console.log(inputAddress)
    setInputAddress(e.target.value)
  }
  const handleSearch = (e) => {
    console.log("search")
    axios.get(`http://localhost:3000/outlet/find?address=${inputAddress}`)
      .then((res) => {
        console.log(res)
        setOutlets(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  return (
    <div className="App">
      <div className="search">
        <input type="text" onChange={handleChange} placeholder="Enter Your Address"/>
          <div className="button-src">
            <button onClick={handleSearch}>Search</button>
          </div>
      </div>
      <div className="cards-list">
        { outlets.length>0?outlets.map((outlet)=>{
          return (<Card title={outlet.polygon.name} />)
        }): (<div>No results</div>)}
        

      </div>
    </div>
  );
}

export default App;
