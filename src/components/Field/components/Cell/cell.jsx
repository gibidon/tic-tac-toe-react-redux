import styles from "./cell.module.scss"
import { PLAYER, PLAYER_SIGN } from "../../../../constants"
import { fillCell } from "../../../../actions"
import { useDispatch, useSelector } from "react-redux"
import { selectField, selectPlayer, selectStatus } from "../../../../selectors"
import { checkWin, checkEmptyCell } from "../../../../utils"

export const Cell = ({ content, index }) => {
	const dispatch = useDispatch()
	const status = useSelector(selectStatus)
	const player = useSelector(selectPlayer)
	const field = useSelector(selectField)

	return (
		<button
			className={styles.cell}
			onClick={() => {
				if (status === "WIN" || status === "DRAW" || content !== PLAYER.NOBODY) {
					return
				}
				dispatch(fillCell(index))
				const newField = [...field]
				newField[index] = player

				if (checkWin(newField, player)) {
					dispatch({ type: "SET_WINNER", payload: player })
					dispatch({ type: "SET_STATUS", payload: "WIN" })
					return
				} else if (!checkEmptyCell(newField)) {
					dispatch({ type: "SET_STATUS", payload: "DRAW" })
				}
			}}
		>
			{PLAYER_SIGN[content]}
		</button>
	)
}
