import styles from "./cell.module.scss"
import { store } from "../../../../store"
import { checkEmptyCell, checkWin } from "../../../../utils"
import { PLAYER, PLAYER_SIGN } from "../../../../constants"
import { fillCell } from "../../../../actions"
import { useDispatch } from "react-redux"

export const Cell = ({ content, index }) => {
	const dispatch = useDispatch()

	const { field, status, player } = store.getState().game

	return (
		<button
			className={styles.cell}
			onClick={() => {
				// if (status === "WIN" || status === "DRAW" || content !== PLAYER.NOBODY) {
				// 	return
				// }
				// handleCLick(index)
				dispatch(fillCell(index))
				const newField = [...field]
				newField[index] = player

				if (checkWin(newField, player)) {
					return
				}
				if (!checkEmptyCell(newField)) {
					store.dispatch({ type: "SET_STATUS", payload: "DRAW" })
				}
			}}
		>
			{PLAYER_SIGN[content]}
		</button>
	)
}
