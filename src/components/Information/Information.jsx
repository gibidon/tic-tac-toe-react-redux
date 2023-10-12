import styles from "./information.module.scss"
import { PLAYER_NAME } from "../../constants"

export const Information = ({ status, winner, player }) => {
	return (
		<div className={styles.information}>
			<p>Status: {status}</p>
			{status !== "DRAW" && <p>Now making move: {PLAYER_NAME[player]}</p>}
			{winner !== null && <div>Winner: {PLAYER_NAME[winner]}</div>}
		</div>
	)
}
