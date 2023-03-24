import Freelancer from "../model/entity/freelancer";
import Mission from "../model/entity/mission";
import MissionApplication from "../model/entity/missionApplication";
import { Result } from "../model/Result";
import { haveCompatibleProfessions } from "./profession";

enum CreatingFreelanceApplicationForMissionError {
  MISSION_NOT_FOUND = "MISSION_NOT_FOUND",
  FREELANCER_NOT_FOUND = "FREELANCER_NOT_FOUND",
  MISSION_AND_FREELANCE_ARE_NOT_COMPATIBLE = "MISSION_AND_FREELANCE_ARE_NOT_COMPATIBLE",
}

export const creatingFreelanceApplicationForMission = ({
  freelancer,
  mission,
}: {
  freelancer: Freelancer;
  mission: Mission;
}): Result<MissionApplication, CreatingFreelanceApplicationForMissionError> => {
  if (!haveCompatibleProfessions(mission, freelancer).success) {
    return {
      success: false,
      error:
        CreatingFreelanceApplicationForMissionError.MISSION_AND_FREELANCE_ARE_NOT_COMPATIBLE,
    };
  }

  const missionApplication: MissionApplication = {
    id: "missionApplicationId",
    missionId: mission.id,
    freelancerId: freelancer.id,
    status: "pending",
  };

  return { success: true, value: missionApplication };
};
