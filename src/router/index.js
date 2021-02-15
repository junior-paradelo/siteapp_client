import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Seeker from "../components/Seeker.vue";
import Register from "../components/Register.vue";
import LastSites from "../components/LastSites.vue";
import Mapa from "../components/Map.vue";
import SiteDetails from "../components/SiteDetails.vue";
import UserProfile from "../components/UserProfile.vue";
import NewSiteForm from "../components/NewSiteForm.vue";
import AdminPanel from "../components/AdminPanel.vue";
import ErrorPage from "../components/ErrorPage.vue";
import EditSiteForm from "../components/EditSiteForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/seeker",
    name: "Seeker",
    component: Seeker,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/last",
    name: "LastSites",
    component: LastSites,
  },
  {
    path: "/map",
    name: "Map",
    component: Mapa,
  },
  {
    path: "/details/:id",
    name: "SiteDetails",
    component: SiteDetails,
  },
  {
    path: "/userProfile",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/newSite",
    name: "NewSiteForm",
    component: NewSiteForm,
  },
  {
    path: "/edit/:id",
    name: "EditSiteForm",
    component: EditSiteForm,
  },
  {
    path: "/adminPanel",
    name: "AdminPanel",
    component: AdminPanel,
  },
  {
    path: "*",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
