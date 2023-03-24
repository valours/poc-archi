import Mission from "../../model/entity/mission";
import MissionRepository from "../../model/repository/mission";

const missionRepository: MissionRepository = {
  load: function (_: Mission["id"]): Mission {
    throw new Error("Function not implemented.");
  },
};

export default missionRepository;
