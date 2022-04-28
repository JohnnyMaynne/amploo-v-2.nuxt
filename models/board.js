import Model from "@/models/model";
import User from "@/models/user";

export default class Board extends Model {
  resource() {
    return 'boards'
  }

  relations() {
    return {
      user: User
    }
  }
}
