import Freelancer, { FreelancerCredentials } from "../model/entity/freelancer";
import FreelancerRepository from "../model/repository/freelancer";
import MailerEngine, { MailSubject } from "../model/mailer-engine";
import { Result } from "../model/Result";
import * as signupDomain from "../domain/signup";

export const signupFreelancer = (
  payload: {
    freelancer: Freelancer;
    credentials: FreelancerCredentials;
  },
  providers: {
    freelancerRepository: Pick<FreelancerRepository, "create">;
    mailerEngine: Pick<MailerEngine, "sendMailToFreelancer">;
  }
): Result<undefined, "INVALID_PASSWORD" | "SIGNUP_IS_NOT_COMPLETED"> => {
  const { freelancer, credentials } = payload;
  const { freelancerRepository, mailerEngine } = providers;

  if (!signupDomain.isSignupCompleted(freelancer).success) {
    return { success: false, error: "SIGNUP_IS_NOT_COMPLETED" };
  }

  if (!signupDomain.isValidPassword(credentials.password).success) {
    return { success: false, error: "INVALID_PASSWORD" };
  }

  try {
    freelancerRepository.create(freelancer);

    mailerEngine.sendMailToFreelancer({
      subject: MailSubject.INSCRIPTION_RECEIVED,
      freelancer,
    });

    return { success: true, value: undefined };
  } catch (error) {
    return { success: false, error };
  }
};

export default signupFreelancer;
