import { useState } from "react";

function Taps() {
    const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab")||'tab1');
    
  return (
    <div>
      
    </div>
  )
}

export default Taps
