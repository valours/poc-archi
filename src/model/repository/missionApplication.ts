import MissionApplication from "../entity/missionApplication";

export default interface MissionApplicationRepository {
  create: (_: MissionApplication) => void;
}
