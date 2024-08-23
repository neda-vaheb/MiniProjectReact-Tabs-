import { useState } from "react";

function Taps() {
    const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab")||'tab1');

  return (
    <div className="tabsContainer">
        <div className="buttons">
            <button>Tab 1</button>
            <button>Tab 2</button>
            <button>Tab 3</button>
            <button>Tab 4</button>

        </div>
        <div >

        </div>
      
    </div>
  )
}

export default Taps
