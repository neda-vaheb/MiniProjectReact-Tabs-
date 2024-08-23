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

 <div className="tabContent">
        {activeTab === "tab1" && (
          <p>
          
            Lorem ipsum dolor sit amet. Rem dolore rerum ad optio maxime qui
            eius error qui dolorem repellendus ea enim nostrum et internos
            officiis. Eos distinctio nihil At galisum voluptatum rem voluptatem
            dicta non dolores facere cum omnis internos est porro optio.
          </p>
        )}
        {activeTab === "tab2" && (
          <p>
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
          <p>
            Nam quia dolor non laborum modi ut incidunt nemo in laudantium
            quidem. Aut esse nesciunt in nobis tenetur cum quos sunt non
            voluptatibus quasi id quia sequi et ducimus excepturi qui molestiae
            repudiandae.
          </p>
        )}
        {activeTab === "tab4" && (
          <p>
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
