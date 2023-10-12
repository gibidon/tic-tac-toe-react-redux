import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { Game } from "./game"
import { store } from "./store"
console.log("store in index", store)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Game />
		</Provider>
	</React.StrictMode>
)
