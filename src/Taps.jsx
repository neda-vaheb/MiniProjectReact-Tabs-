import { useState } from "react";
import "./Tabs.css"
function Taps() {
    const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab")||'tab1');

    const tapHandler = (tab) => {
        setActiveTab(tab);
        localStorage.setItem("activeTab", tab);
      };

  return (
    <div className="tabsContainer">
    <div className="buttons">
      <button
        style={{
          color: activeTab === "tab1" ? "#fabfc8" : "black",
        }}
        onClick={() => tapHandler("tab1")}
      >
        Tab1
      </button>
      <button
        style={{
          color: activeTab === "tab2" ? "#f2b7f7" : "black",
        }}
        onClick={() => tapHandler("tab2")}
      >
        Tap2
      </button>
      <button
        style={{
          color: activeTab === "tab3" ? "#cab0f5" : "black",
        }}
        onClick={() => tapHandler("tab3")}
      >
        Tap3
      </button>
      <button
        style={{
          color: activeTab === "tab4" ? "#a1c9fa" : "black",
        }}
        onClick={() => tapHandler("tab4")}
      >
        Tap4
      </button>
    </div>
    <div className="tabContent">
      {activeTab === "tab1" && (
        <p
          style={{
            backgroundColor: activeTab === "tab1" ? "#f5bfc790" : "white",
          }}
        >
          Lorem ipsum dolor sit amet. Rem dolore rerum ad optio maxime qui
          eius error qui dolorem repellendus ea enim nostrum et internos
          officiis. Eos distinctio nihil At galisum voluptatum rem voluptatem
          dicta non dolores facere cum omnis internos est porro optio.
        </p>
      )}
      {activeTab === "tab2" && (
        <p
          style={{
            backgroundColor: activeTab === "tab2" ? "#f1bff588" : "white",
          }}
        >
          Lorem ipsum dolor sit amet. Ab sunt alias ut cupiditate similique 33
          consequatur similique eos explicabo sunt. Et veniam eius At esse
          soluta aut accusantium dolores. Et maiores dignissimos qui impedit
          quibusdam sit sint ipsa sit illum deleniti et obcaecati doloribus
          eos voluptates quaerat ea repellat sequi. Et esse reiciendis cum
          voluptatum aspernatur 33 voluptas suscipit 33 earum aliquam est
          molestiae facere. Ea quia alias et aperiam temporibus aut
          dignissimos corrupti non facere beatae ex quas beatae sed architecto
          voluptatem aut fugit quasi. Sed illo nemo sed illo totam eos
          distinctio magni qui ipsam deleniti. Sit neque quia ex iste dicta
          sit harum voluptatem aut error tempora qui unde dolore et iste vitae
          in reiciendis quia.{" "}
        </p>
      )}
      {activeTab === "tab3" && (
        <p
          style={{
            backgroundColor: activeTab === "tab3" ? "#d4bff586" : "white",
          }}
        >
          Nam quia dolor non laborum modi ut incidunt nemo in laudantium
          quidem. Aut esse nesciunt in nobis tenetur cum quos sunt non
          voluptatibus quasi id quia sequi et ducimus excepturi qui molestiae
          repudiandae.
        </p>
      )}
      {activeTab === "tab4" && (
        <p    style={{
          backgroundColor: activeTab === "tab4" ? "#bfd8f585" : "white",
        }}>
          Sed eligendi nisi sed consequatur placeat et repellat iure sed fuga
          dicta? Et dolores aperiam qui modi perspiciatis qui autem laudantium
          est quaerat enim. Non distinctio nemo aut exercitationem molestias
          sed quas dicta aut quis consequatur. Nam quia dolor non laborum modi
          ut incidunt nemo in laudantium quidem. Aut esse nesciunt in nobis
          tenetur cum quos sunt non voluptatibus quasi id quia sequi et
          ducimus excepturi qui molestiae repudiandae.
        </p>
      )}
    </div>
  </div>
  )
}

export default Taps
