import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import MyCourses from "../views/MyCourses.vue";

import Search from "../components/Search.vue";

import Courses from "../views/Courses.vue"
import Extra from "../views/Extra.vue"
import Math from "../views/Math.vue"


import English from "../English/English.vue"
import APCourses from "../APCourses/APCourses.vue"
import Sciences from "../Sciences/Sciences.vue"
import ComputerScience from "../Sciences/ComputerScience.vue"
import Business from "../Sciences/Business.vue"
import SocialStudies from "../Sciences/SocialStudies.vue"


import Language from "../Sciences/Language.vue"



import Art from "../views/Extra/Art.vue"
import Gaming from "../views/Extra/Gaming.vue"

import Car from "../views/Extra/Car.vue"
import Politics from "../views/Extra/Politics.vue"
import PC from "../views/Extra/PC.vue"

import Edit from "../views/Extra/Edit.vue"

import Defence from "../views/Extra/Defence.vue"
import Photo from "../views/Extra/Photo.vue"
import Yoga from "../views/Extra/Yoga.vue"
import instrument from "../views/Extra/instrument.vue"
import AID from "../views/Extra/AID.vue"
import Meditation from "../views/Extra/Meditation.vue"
import Public from "../views/Extra/Public.vue"
import investing from "../views/Extra/investing.vue"
import HomeR from "../views/Extra/HomeR.vue"
import Cooking from "../views/Extra/Cooking.vue"

import Taxes from "../views/Extra/Taxes.vue"

import Body from "../views/Extra/Body.vue"





import Algebra from "../Math/Algebra/Algebra.vue"
import Algebra2 from "../Math/Algebra/Algebra2/Algebra2.vue"
import Intro from "../Math/Algebra/Algebra2/Intro.vue"
import Overview from "../Math/Algebra/Algebra2/Overview.vue"

import { authGuard } from "../auth";
import Embed from "v-video-embed"


Vue.use(Router);
Vue.use(Embed);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: "/Mycourses",
      name: "MyCourses",
      component: MyCourses,
      beforeEnter: authGuard
    },
    {
      path: "/Courses",
      name: "Courses",
      component: Courses,
      beforeEnter: authGuard
    },
        {
      path: "/Extra",
      name: "Extra",
      component: Extra,
      beforeEnter: authGuard
    },
    {
      path: "/Math",
      name: "Math",
      component: Math,
      beforeEnter: authGuard
    },
    {
      path: "/Art",
      name: "Art",
      component: Art,
      beforeEnter: authGuard
    },
    {
      path: "/HomeR",
      name: "HomeR",
      component: HomeR,
      beforeEnter: authGuard
    },
    {
      path: "/Cooking",
      name: "Cooking",
      component: Cooking,
      beforeEnter: authGuard
    },
    {
      path: "/instrument",
      name: "instrument",
      component: instrument,
      beforeEnter: authGuard
    },
    {
      path: "/investing",
      name: "investing",
      component: investing,
      beforeEnter: authGuard
    },
    {
      path: "/English",
      name: "English",
      component: English,
      beforeEnter: authGuard
    },
    {
      path: "/Language",
      name: "Language",
      component: Language,
      beforeEnter: authGuard
    },
    {
      path: "/Gaming",
      name: "Gaming",
      component: Gaming,
      beforeEnter: authGuard
    },
    {
      path: "/Car",
      name: "Car",
      component: Car,
      beforeEnter: authGuard
    },
    {
      path: "/Politics",
      name: "Politics",
      component: Politics,
      beforeEnter: authGuard
    },
    {
      path: "/PC",
      name: "PC",
      component: PC,
      beforeEnter: authGuard
    },
 

    {
      path: "/Edit",
      name: "Edit",
      component: Edit,
      beforeEnter: authGuard
    },
 
  


    {
      path: "/Photo",
      name: "Photo",
      component: Photo,
      beforeEnter: authGuard
    },
    {
      path: "/ComputerScience",
      name: "ComputerScience",
      component: ComputerScience,
      beforeEnter: authGuard
    },
    {
      path: "/Defence",
      name: "Defence",
      component: Defence,
      beforeEnter: authGuard
    },
    {
      path: "/Yoga",
      name: "Yoga",
      component:Yoga,
      beforeEnter: authGuard
    },
    {
      path: "/AID",
      name: "AID",
      component: AID,
      beforeEnter: authGuard
    },
    {
      path: "/Meditation",
      name: "Meditation",
      component: Meditation,
      beforeEnter: authGuard
    },
    {
      path: "/Public",
      name: "Public",
      component: Public,
      beforeEnter: authGuard
    },
    {
      path: "/Taxes",
      name: "Taxes",
      component: Taxes,
      beforeEnter: authGuard
    },
    {
      path: "/Body",
      name: "Body",
      component: Body,
      beforeEnter: authGuard
    },
    
    {
      path: "/Art",
      name: "Art",
      component: Art,
      beforeEnter: authGuard
    },
    {
      path: "/Extra",
      name: "Extra",
      component: Extra,
      beforeEnter: authGuard
    },
    {
      path: "/SocialStudies",
      name: "SocialStudies",
      component: SocialStudies,
      beforeEnter: authGuard
    },
    {
      path: "/Business",
      name: "Business",
      component: Business,
      beforeEnter: authGuard
    },
   
   
 
    {
      path: "/APCourses",
      name: "APCourses",
      component: APCourses,
      beforeEnter: authGuard
    },

    {
      path: "/Sciences",
      name: "Sciences",
      component: Sciences,
      beforeEnter: authGuard
    },
    {
      path: "/ComputerScience",
      name: "ComputerScience",
      component: ComputerScience,
      beforeEnter: authGuard
    },

      {
      path: "/Search",
      name: "Search",
      component: Search,
      beforeEnter: authGuard
    },
    {
      path: "/Algebra",
      name: "Algebra",
      component: Algebra,
      beforeEnter: authGuard
    },
     {
      path: "/Algebra2",
      name: "Algebra2",
      component: Algebra2,
      beforeEnter: authGuard
    },
    {
      path: "/Intro",
      name: "Intro",
      component: Intro,
      beforeEnter: authGuard
    },

         {
      path: "/Overview",
      name: "Overview",
      component: Overview,
      beforeEnter: authGuard
    },

    
  ]
});

export default router;
