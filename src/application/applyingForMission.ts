import { creatingFreelanceApplicationForMission } from "../domain/managementOfApplicantsForMission";
import Freelancer, { ExternalFreelancer } from "../model/entity/freelancer";
import Mission from "../model/entity/mission";
import MailerEngine from "../model/mailer-engine";
import FreelancerRepository from "../model/repository/freelancer";
import MissionRepository from "../model/repository/mission";
import MissionApplicationRepository from "../model/repository/missionApplication";
import { signupExternalFreelancer } from "./signupExternalFreelancer";

export const applyingForMissionAsInternalFreelancer = (
  payload: {
    missionId: Mission["id"];
    freelancerId: Freelancer["id"];
  },
  providers: {
    freelancerRepository: Pick<FreelancerRepository, "load">;
    missionRepository: Pick<MissionRepository, "load">;
    missionApplicationRepository: Pick<MissionApplicationRepository, "create">;
  }
) => {
  const { missionId, freelancerId } = payload;
  const {
    missionApplicationRepository,
    missionRepository,
    freelancerRepository,
  } = providers;

  const mission = missionRepository.load(missionId);

  if (!mission) {
    return {
      success: false,
    };
  }

  const freelancer = freelancerRepository.load(freelancerId);

  if (!freelancer) {
    return {
      success: false,
    };
  }

  const result = creatingFreelanceApplicationForMission({
    mission,
    freelancer,
  });

  if (result.success) {
    missionApplicationRepository.create(result.value);
  }
};

export const applyingForMissionAsExternalFreelancer = (
  payload: {
    missionId: Mission["id"];
    externalFreelancer: ExternalFreelancer;
  },
  providers: {
    missionRepository: Pick<MissionRepository, "load">;
    freelancerRepository: Pick<FreelancerRepository, "create">;
    mailerEngine: Pick<MailerEngine, "sendMailToFreelancer">;
  }
) => {
  const { missionId, externalFreelancer } = payload;
  const { missionRepository, freelancerRepository, mailerEngine } = providers;

  const mission = missionRepository.load(missionId);

  if (!mission) {
    return {
      success: false,
    };
  }

  signupExternalFreelancer(
    { externalFreelancer },
    {
      freelancerRepository,
      mailerEngine,
    }
  );
};
