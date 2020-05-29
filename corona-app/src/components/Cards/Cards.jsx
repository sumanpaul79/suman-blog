import React from "react"
import {Card,CardContent,Typography,Grid} from "@material-ui/core"
import styles from "./Cards.module.css"
import CountUp from "react-countup"
import cx from "classnames"

function Cards({data:{confirmed, recovered,deaths,lastUpdate}}){
if(!confirmed){
  return 'Loading....'
}
  return(
    <div className={styles.container}>
    <Grid container spacing={3} justify={"center"}>
    <Grid item component={Card} className={cx(styles.card,styles.infected)}>
    <CardContent>
    <Typography color="textSecondary" gutterBottom>Infected </Typography>
    <Typography variant="h5">
    <CountUp start={0} end={confirmed.value} duration={3.0} separator="," />
     </Typography>
    <Typography color= "textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
    <Typography variant="body2"> Number of Active Case </Typography>
    </CardContent>
    </Grid>
    <Grid item component={Card}className={cx(styles.card,styles.recovery)}>
    <CardContent>
    <Typography color="textSecondary" gutterBottom>Recovery </Typography>
    <Typography variant="h5">
    <CountUp start={0} end={recovered.value} duration={3.0} separator="," />
     </Typography>
    <Typography color= "textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
    <Typography variant="body2"> Number of Recovery </Typography>
    </CardContent>
    </Grid>
    <Grid item component={Card}className={cx(styles.card,styles.death)}>
    <CardContent>
    <Typography color="textSecondary" gutterBottom>Death </Typography>
    <Typography variant="h5">
     <CountUp start={0} end={deaths.value} duration={3.0} separator="," />
     </Typography>
    <Typography color= "textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
    <Typography variant="body2"> Number of Death </Typography>
    </CardContent>
    </Grid>
    </Grid>
</div>

  )
}
export default Cards
