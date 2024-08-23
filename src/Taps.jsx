import { useState } from "react";

function Taps() {
    const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab")||'tab1');

    const tapHandler = (tab) => {
        setActiveTab(tab);
        localStorage.setItem("activeTab", tab);
      };

  return (
    <div className="tabsContainer">
        <div className="buttons">
            <button onClick={()=>tapHandler('tab1')}>Tab 1</button>
            <button onClick={()=>tapHandler('tab2')}>Tab 2</button>
            <button onClick={()=>tapHandler('tab3')}>Tab 3</button>
            <button onClick={()=>tapHandler('tab4')}>Tab 4</button>

        </div>
        <div >

        </div>
      
    </div>
  )
}

export default Taps
