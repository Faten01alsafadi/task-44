import TrendingCard from "../../components/TrendingCard/TrendingCard";
import styles from "./Trending.module.css"
type TrendingProps={
    h2:string;
    p:string;
    cards:CardsProps[];
   }
   type CardsProps={
    img:string;
    h4:string;
    span:string;
    p:string;
   }
function Trending(props:TrendingProps) {
  
  return (
    <div className={styles.trending}>
      <div className={styles.content}>
          <h2>{props.h2}</h2>
          <p>{props.p}</p>
         <div className={styles.cards}>
         {props.cards.map((card,Index)=>(
            <TrendingCard key={Index} {...card}/>
          ))}
         </div>
      </div>
    </div>
  )
}

export default Trending
