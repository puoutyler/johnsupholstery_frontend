import App from "./App";
import Contact from "./Contact";
import Services from "./About"

export const routes = [
    {
        path:"/contact-us",
        component: Contact,
        name: "Contact Us"
    },
    {
        path:"/services",
        component: Services,
        name: "Services"
    },
    {
        path:"/",
        component: App,
        name: "Home"
    }
]
