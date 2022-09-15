import {
	createApp
} from "vue";

// import RouterApp from "./apps/RouterApp.vue";
// import router from "./routes/router.js";

import SlotApp from "./apps/SlotApp.vue";

let app = createApp(SlotApp);

//app.use(router);

app.mount("#app");