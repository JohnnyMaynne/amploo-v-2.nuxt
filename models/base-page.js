import Model from "@/models/model";
import Base from "@/models/base";

export default class BasePage extends Model {
  resource() {
    return 'bases-page'
  }

  relations() {
    return {
      bases: Base
    }
  }
}
