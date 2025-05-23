
import styles from "./HomeSection.module.css"
type HomeProps ={
    h1 :string;
    h2 :string;
   cards:Cards[];
   p1:string;
   p2:string;
}
type Cards = {
    h4: string;
    p: string;
    img: string;
  };
function HomeSection(props:HomeProps) {
  return (
    <div className={styles.homeSection}>
      <div className={styles.homeContent}>
        <div className={styles.textContent}>
        <h1>{props.h1} </h1>
        <h1>{props.h2}</h1>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        </div>
        <div className={styles.homeBar}>
        {props.cards.map((card,index)=>(
  <div className={styles.dflex} key={index}>
  <div className={styles.circle}><img src={card.img} alt="" /></div>
  <div >
      <h4>{card.h4}</h4>
      <p>{card.p}</p>
  </div>
</div>
)
)}



        </div>
</div>
    </div>
    )
}

export default HomeSection
