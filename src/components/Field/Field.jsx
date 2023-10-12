import { selectField } from "../../selectors/select-field"
import { useSelector } from "react-redux"

import styles from "./field.module.scss"
import { Cell } from "./components/Cell/cell"

export const Field = () => {
	const field = useSelector(selectField)

	const fieldElems = field.map((cell, index) => (
		<Cell key={index} index={index} content={cell} />
	))

	return <div className={styles.field}>{fieldElems}</div>
}
