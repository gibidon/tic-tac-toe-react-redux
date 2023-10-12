import { Field, Information } from "./components"
import { useDispatch, useSelector } from "react-redux"
import { RESET_GAME } from "./actions"
import styles from "./game.module.scss"
import { selectField } from "./selectors/select-field"

export const Game = () => {
	// let [gameData, setGameData] = useState([])
	// gameData = store.getState().game

	// const { field, player, winner, status } = gameData
	const field = useSelector(selectField)
	const dispatch = useDispatch()

	return (
		<div className={styles.container}>
			{/* <Information status={status} winner={winner} player={player} /> */}
			{/* <Field field={field} player={player} winner={winner} status={status} /> */}
			{/* <Field field={field} /> */}
			<Field />
			<button className={styles.resetBtn} onClick={() => dispatch(RESET_GAME)}>
				Start over
			</button>
		</div>
	)
}
