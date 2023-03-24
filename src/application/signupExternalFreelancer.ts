import Freelancer, { ExternalFreelancer } from "../model/entity/freelancer";
import MailerEngine, { MailSubject } from "../model/mailer-engine";
import FreelancerRepository from "../model/repository/freelancer";
import { Result } from "../model/Result";

export const signupExternalFreelancer = (
  payload: {
    externalFreelancer: ExternalFreelancer;
  },
  providers: {
    freelancerRepository: Pick<FreelancerRepository, "create">;
    mailerEngine: Pick<MailerEngine, "sendMailToFreelancer">;
  }
): Result<Freelancer, "INVALID_PASSWORD"> => {
  const { externalFreelancer } = payload;
  const { freelancerRepository, mailerEngine } = providers;

  try {
    const freelancer: Parameters<typeof freelancerRepository.create>[0] = {
      id: "freelancerToSaveId",
      ...externalFreelancer,
    };

    freelancerRepository.create(freelancer);

    mailerEngine.sendMailToFreelancer({
      subject: MailSubject.INSCRIPTION_TO_COMPLETE,
      freelancer,
    });

    return { success: true, value: freelancer };
  } catch (error) {
    return { success: false, error };
  }
};

export default signupExternalFreelancer;
