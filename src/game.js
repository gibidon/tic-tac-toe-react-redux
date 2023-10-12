import { Field, Information } from "./components"
import { useDispatch, useSelector } from "react-redux"
import { RESET_GAME } from "./actions"
import styles from "./game.module.scss"
import { selectField } from "./selectors"

export const Game = () => {
	const field = useSelector(selectField)

	const dispatch = useDispatch()

	return (
		<div className={styles.container}>
			<Information />
			<Field />
			<button className={styles.resetBtn} onClick={() => dispatch(RESET_GAME)}>
				Start over
			</button>
		</div>
	)
}
