
import styles from "./HowCard.module.css"
type CardsProps = {
    img: string;
    h4: string;
    p: string;
    special:boolean
  };

// type CardsProps ={
   
// }
// ;
function HowCard(props:CardsProps) {
  return (
    <div className={` ${props.special?styles.special :styles.howCard}`}>
       
      <img src={props.img} alt="" />
      <h4>{props.h4}</h4>
      <p>{props.p}</p>
    </div>
  )
}

export default HowCard
