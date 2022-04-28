import Model from "@/models/model";
import User from "@/models/user";

export default class Team extends Model {
  resource() {
    return 'teams'
  }

  relations() {
    return {
      users: User
    }
  }
}
