import {
	createApp
} from "vue";

// import
// ScssApp
// from "./apps/ScssApp.vue";

// import RouterApp from "./apps/RouterApp.vue";
// import router from "./routes/router.js";

import RootComp from "./apps/RootComp.vue";


let app = createApp(RootComp);
//app.use(router);

app.mount("#app");