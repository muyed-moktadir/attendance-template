
import Attendance from "../pages/Home/Attendance";
import Home from "../pages/Home/Home";
import LoginForm from "../pages/Home/LoginForm";
import LoginPage1 from "../pages/Home/LoginPage1";

 // TODO:changing Routes
 export const publicRoute=[
    {path:"/", name:"Home", Component: Home},
    {path:"/signUp", name:"Login", Component: LoginPage1},
    {path:"/login", name:"signUp", Component: LoginForm},
    {path:"/attendance", name:"attendance", Component: Attendance},

  ]