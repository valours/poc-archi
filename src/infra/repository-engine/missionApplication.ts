import MissionApplication from "../../model/entity/missionApplication";
import MissionApplicationRepository from "../../model/repository/missionApplication";

const missionApplicationRepository: MissionApplicationRepository = {
  create: function (_: MissionApplication): void {
    throw new Error("Function not implemented.");
  },
};

export default missionApplicationRepository;
