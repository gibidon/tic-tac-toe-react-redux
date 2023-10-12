import { WIN_PATTERNS } from "../constants/win-patterns"
import { store } from "../store"

export const checkWin = (field, player) => {
	if (
		WIN_PATTERNS.some((winPattern) =>
			winPattern.every((cellIndex) => field[cellIndex] === player)
		)
	) {
		store.dispatch({ type: "SET_WINNER", payload: player })
		store.dispatch({ type: "SET_STATUS", payload: "WIN" })
		return true
	}
}
