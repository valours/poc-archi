import Mission from "../entity/mission";

interface MissionRepository {
  load: (_: Mission["id"]) => Mission;
}

export default MissionRepository;
