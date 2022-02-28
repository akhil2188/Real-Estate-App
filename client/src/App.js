import React, {useState, useEffect} from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useSticky from './hooks/useSticky';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Sales from "./components/Sales/Sales";
import Rental from "./components/Rental/Rental";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";


const App = () => {

  const account_name = "sothebys_international_realty";
  const token = 'Qs7MGQchX2DUZ9BX8wYpjjgM';
  let url = `https://staging.perchwell.com/api/feeds/${account_name}`;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchAPIData();
  }, []);

  const fetchAPIData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Accept", "application/json, */*");
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode: 'cors'
    };
    
    const response = await fetch('http://localhost:3000/getData', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // if (!response.ok) {
    //   const message = `An error has occured: ${response.status}`;
    //   throw new Error(message);
    // }
    const jsonData = await response.json();
    setUserData(jsonData.data);
    console.log(jsonData);

  };

  fetchAPIData().catch(error => {
    console.log(error.message); 
  });

console.log(userData);

  return (
    <div className="App">
      <Router>
        <Navbar sticky={useSticky} />
        <Routes>
          <Route path="/" element={<Sales />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  )

}


export default App;











// import React from "react";

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
