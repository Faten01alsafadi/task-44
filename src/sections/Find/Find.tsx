import styles from "./Find.module.css"
type FindProps={
h2:string;
p:string;
}
function Find(props:FindProps) {
  return (
    <div className={styles.find}>
        <div className={styles.overlay}></div>
      <div className={styles.content}>
      <h2>{props.h2}</h2>
      <p>{props.p}</p></div>
    </div>
  )
}

export default Find
