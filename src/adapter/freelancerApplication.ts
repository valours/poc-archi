import { Request, Response } from "express";
import * as application from "../application/applyingForMission";
import freelancerRepository from "../infra/repository-engine/freelancer";
import missionRepository from "../infra/repository-engine/mission";
import missionApplicationRepository from "../infra/repository-engine/missionApplication";

export const applyToMission = (req: Request<{}, {}, {}>, res: Response) => {
  const payload = {
    missionId: "missionId",
    freelancerId: "freelancerId",
  } as Parameters<typeof application.applyingForMissionAsInternalFreelancer>[0];

  const providers: Parameters<
    typeof application.applyingForMissionAsInternalFreelancer
  >[1] = {
    freelancerRepository,
    missionRepository,
    missionApplicationRepository,
  };

  const result = application.applyingForMissionAsInternalFreelancer(
    payload,
    providers
  );

  res.send(result);
};
