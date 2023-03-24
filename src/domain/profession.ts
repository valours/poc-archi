import { Profession } from "../model/entity/profession";
import { Result } from "../model/Result";

export const haveCompatibleProfessions = <
  FirstItem extends { profession: Profession },
  SecondItem extends { profession: Profession }
>(
  firstItem: FirstItem,
  secondItem: SecondItem
): Result<Profession, "NON_COMPATIBLE_PROFESSION"> => {
  if (firstItem.profession === secondItem.profession) {
    return { success: true, value: firstItem.profession };
  }
  return { success: false, error: "NON_COMPATIBLE_PROFESSION" };
};
