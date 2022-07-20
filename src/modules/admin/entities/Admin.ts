import { Base } from "../../Base";

class Admin extends Base {
  name: string;
  email: string;
  password: string;
  permission_level: number;
}

export { Admin };
