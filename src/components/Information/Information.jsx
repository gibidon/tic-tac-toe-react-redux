import styles from "./information.module.scss"
import { PLAYER_NAME } from "../../constants"
import { useSelector } from "react-redux"
import { selectWinner, selectPlayer, selectStatus } from "../../selectors"

export const Information = () => {
	const player = useSelector(selectPlayer)
	const winner = useSelector(selectWinner)
	const status = useSelector(selectStatus)

	return (
		<div className={styles.information}>
			<div className={styles.statusInfo}>
				Status: {status}
				{status !== "DRAW" && status !== "WIN" && (
					<p>Now making move: {PLAYER_NAME[player]}</p>
				)}
			</div>
			<div className={styles.playerInfo}>
				{winner !== null && <div>Winner: {PLAYER_NAME[winner]}</div>}
			</div>
		</div>
	)
}
