// PAGES:

import homePage from './pages/home-page.js'
import emailApp from './apps/email/pages/email-app.js';
import keepApp from './apps/keep/pages/keep-app.js';
import emailDetails from "./apps/email/pages/email-details.cmp.js";
;


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/email/:emailId',
        component: emailDetails
    },
    {
        path: '/keep',
        component: keepApp
    },
];

export const myRouter = new VueRouter({routes: myRoutes})
