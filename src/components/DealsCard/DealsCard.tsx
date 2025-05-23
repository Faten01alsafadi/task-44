
import styles from './DealsCard.module.css'
type  DealsCard={
    img:string;

    span1:string;
    span2:string;

  
}
function DealsCard(props:DealsCard) {
  return (
    <div className={styles.card}>
   
    <img src={props.img} alt="" />
        
          
   
        </div>
  )
}

export default DealsCard
