import {
	createApp

} from "vue";

// import RouterApp from "./apps/RouterApp.vue";
// import router from "./routes/router.js";

// import SlotApp from "./apps/SlotApp.vue";

import VuexApp from "./apps/VuexApp.vue";
import store from "./vuex/store.js";


let app = createApp(VuexApp);

app.use(store);

// app.use(router);

app.mount("#app");