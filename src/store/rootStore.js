import authStore from "./authStore";
import cardStore from "./cardStore";
import profileStore from "./profileStore";

class RootStore {
  auth = authStore
  profile = profileStore
  card = cardStore
}

export default RootStore