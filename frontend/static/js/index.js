import Dashboard from "./views/Dashboard.js";
import About from "./views/about.js";
import Account from "./views/account.js";
import Community from "./views/community.js";
import Module_info from "./views/module-info.js";
import Module_pay from "./views/module-pay.js";
import Module_play from "./views/module-play.js";
import Module_results_lost from "./views/module-results-lost.js";
import Module_results_win from "./views/module-results-win.js";
import Module_submitted from "./views/module-submitted.js";
import Module_wait from "./views/module-wait.js";
import Modules from "./views/modules.js";
import Notifications from "./views/notifications.js";
import Payment_method from "./views/payment-method.js";
import Personal_details from "./views/personal-details.js";
import Rewards from "./views/rewards.js";
import Settings from "./views/Settings.js";
import Sign_in from "./views/sign-in.js";
import Sign_up from "./views/sign-up.js";
import Landing from "./views/landing.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Landing },
        { path: "/dashboard", view: Dashboard },
        { path: "/about", view: About },
        { path: "/account", view: Account },
        { path: "/community", view: Community },
        { path: "/module-info", view: Module_info },
        { path: "/module-pay", view: Module_pay },
        { path: "/module-play", view: Module_play },
        { path: "/module-results-lost", view: Module_results_lost },
        { path: "/module-results-win", view: Module_results_win },
        { path: "/module-submitted", view: Module_submitted },
        { path: "/module-wait", view: Module_wait },
        { path: "/modules", view: Modules },
        { path: "/notifications", view: Notifications },
        { path: "/payment-method", view: Payment_method },
        { path: "/personal-details", view: Personal_details },
        { path: "/rewards", view: Rewards },
        { path: "/settings", view: Settings },
        { path: "/sign-in", view: Sign_in },
        { path: "/sign-up", view: Sign_up }, 
        { path: "/data"},
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    /*
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }
    */
    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
