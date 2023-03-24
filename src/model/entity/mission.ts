import { Profession } from "./profession";
import BusinessManager from "./businessManager";

export default interface Mission {
  id: string;
  title: string;
  description: string;
  businessManagerId: BusinessManager["id"];
  profession: Profession;
}
