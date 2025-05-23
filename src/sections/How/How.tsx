
import HowCard from "../../components/HowCard/HowCard";
import styles from "./How.module.css"
type howProps ={
h2 :string;
p :string;
cards: CardsProps[]

};

type CardsProps = {
    img: string;
    h4: string;
    p: string;
  };


function How(props:howProps) {
  return (
    <div className={styles.howSection}>


     <div className={styles.howContent}>
     <h2>{props.h2}</h2>
      <p>{props.p}</p>
     <div className={styles.dflex}>
     {props.cards.map((card,Index)=>(
          <HowCard key={Index} special={Index===1} {...card} />
          // <HowCard key={Index} cards={[{img: house1, h4:"", p:""},{img: house2, h4:"", p:""},{img: house3, h4:"", p:""}]}/>
      ))}
     </div>
     </div>
    </div>
  )
}

export default How
