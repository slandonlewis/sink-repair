import { fetchPlumbers, fetchRequests, fetchCompletions } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

// state change
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

/* renders HTML from SinkRepair module AFTER 
fetchRequests() and fetchPlumbers() is completed */
const render = () => {
    fetchRequests()
    .then(() => fetchPlumbers())
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()