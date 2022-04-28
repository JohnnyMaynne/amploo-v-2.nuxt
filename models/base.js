import Model from "@/models/model";
import BasePage from "@/models/base-page";

export default class Base extends Model {
  resource() {
    return 'bases'
  }

  relations() {
    return {
      pages: BasePage,
    }
  }
}
