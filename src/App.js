import React, { useState } from 'react'
import './App.css';
import './styles/webPageStyles.css'
import './styles/mobilePageStyles.css'
import { useMediaQuery } from "react-responsive";
import MobilePage from './responsive/mobilePage';
import WebPage from './responsive/webPage';
import Header from './componets/Header';


function App() {
  const [cartActive, setCartActive] = useState(false);
  const [quantitySelectedItem, setQuantitySelectedItem] = useState(1);

  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });

  return (
    <div className="App">
      <Header
        cartActive={cartActive}
        setCartActive={setCartActive}
        isMobile={isMobile}
      />
      {/* If its mobile i send it to the mobile component else it will stay in the web page */}
      {isMobile ?
        <MobilePage
          cartActive={cartActive}
          setCartActive={setCartActive}
          quantitySelectedItem={quantitySelectedItem}
          setQuantitySelectedItem={setQuantitySelectedItem}
        />
        :
        <WebPage
          cartActive={cartActive}
          setCartActive={setCartActive}
          quantitySelectedItem={quantitySelectedItem}
          setQuantitySelectedItem={setQuantitySelectedItem}
        />}
    </div>
  );
}

export default App;
