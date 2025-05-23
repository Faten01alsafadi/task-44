// import DealsCard from "../../components/DealsCard/DealsCard";
// import styles from "./Deals.module.css"
// type DealsProps={
//     h2:string;
//     p:string;
//     cards:CardsProps[];
//     items:ItemProps[];
//    }
//    type CardsProps={
//     img:string;
    
//     span1:string;
//     span2:string;
 
//    }
//    type ItemProps={
// h4:string;
 
//    }

// function Deals(props:DealsProps) {
//   return (
//     <div className={styles.deals}>
//     <div className={styles.content}>
//         <h2>{props.h2}</h2>
//         <p>{props.p}</p>
//         <div>
//         {props.items.map((item,Index)=>(
//          <h4 key={Index}>{item.h4}</h4>
//         ))}
//         </div>
//        <div className={styles.cards}>
//        {props.cards.map((card,Index)=>(
//           <DealsCard key={Index} {...card}/>
//         ))}
//        </div>
//     </div>
//   </div>
//   )
// }

// export default Deals


import { useState } from "react";
import DealsCard from "../../components/DealsCard/DealsCard";
import styles from "./Deals.module.css";

type DealsProps = {
  h2: string;
  p: string;
  cards: CardsProps[];
  items: ItemProps[];
};

type CardsProps = {
  img: string;
  span1: string;
  span2: string;
  category: string;
};

type ItemProps = {
  h4: string;
  category: string;
};

function Deals(props: DealsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCards =
    selectedCategory === "all"
      ? props.cards
      : props.cards.filter((card) => card.category === selectedCategory);

  return (
    <div className={styles.deals}>
      <div className={styles.content}>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>

        <div className={styles.filters}>
          <h4
            onClick={() => setSelectedCategory("all")}
            className={selectedCategory === "all" ? styles.active : ""}
          >
           Residential Property
          </h4>
          {props.items.map((item, index) => (
            <h4
              key={index}
              onClick={() => setSelectedCategory(item.category)}
              className={selectedCategory === item.category ? styles.active : ""}
            >
              {item.h4}
            </h4>
          ))}
        </div>

        <div className={styles.cards}>
          {filteredCards.map((card, index) => (
            <DealsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deals;
