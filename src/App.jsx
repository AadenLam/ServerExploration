import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [data, setData] = useState("");
    const URL = "https://serverforserverexploration.onrender.com";
    useEffect(() => {
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setData(data.data);
            })
    },[])
    useEffect(() => {
        fetch(URL,{method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({data: "hello"})})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
    },[])
    useEffect(() => {
        fetch(URL, {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify({data: "hiya", index: 0})})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            })
    })
    useEffect(() => {
        fetch(URL, {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({index: 1})})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            })
    })

  return (
      <h1>{data}</h1>
  )
}

export default App
