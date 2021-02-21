import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Seeker from "../components/site/Seeker.vue";
import Register from "../components/user/Register.vue";
import LastSites from "../components/site/LastSites.vue";
import Mapa from "../components/common/Map.vue";
import SiteDetails from "../components/site/SiteDetails.vue";
import UserProfile from "../components/user/UserProfile.vue";
import NewSiteForm from "../components/site/NewSiteForm.vue";
import AdminPanel from "../components/user/AdminPanel.vue";
import ErrorPage from "../components/common/ErrorPage.vue";
import EditSiteForm from "../components/site/EditSiteForm.vue";
import Categories from "../components/site/Categories.vue";

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
    path: "/categories",
    name: "Categories",
    component: Categories,
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
