import styles from "./TrendingCard.module.css"
type  TrendingCard={
    img:string;
    h4:string;
    span:string;
    p:string;
  
}

function TrendingCard(props:TrendingCard) {
  return (
    <div className={styles.card}>
<div className={styles.cardContent}>
<img src={props.img} alt="" />
      <h4>{props.h4}</h4>
      <span>{props.span}</span>
      <p>{props.p}</p>
</div>
    </div>
  )
}

export default TrendingCard
