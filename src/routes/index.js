import RegisterComponent from "../containers/Register";
import LoginComponent from "../containers/Login";
import ContactsComponent from "../containers/Contacts";
import CreateContactComponent from "../containers/CreateContact";

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent,
    title: "Register",
    needsAuth: false,
  },
  {
    path: "/auth/login",
    component: LoginComponent,
    title: "Login",
    needsAuth: false,
  },
  {
    path: "/",
    component: ContactsComponent,
    title: "Contacts",
    needsAuth: true,
  },
  {
    path: "/contacts/create",
    component: CreateContactComponent,
    title: "Create Contacts",
    needsAuth: false,
  },
];

export default routes;
