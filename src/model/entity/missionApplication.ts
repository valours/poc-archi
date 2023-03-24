type MissionApplicationStatus = "pending" | "accepted" | "refused";

export default interface MissionApplication {
  id: string;
  freelancerId: string;
  missionId: string;
  status: MissionApplicationStatus;
}
