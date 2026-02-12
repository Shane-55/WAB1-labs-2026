import appInfo from "./app-store"
import employee from "./employee1.json"

getAppInfo() {
    return this.store.findAll(this.collection);
  },