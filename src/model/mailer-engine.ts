import Freelancer from "./entity/freelancer";

export enum MailSubject {
  INSCRIPTION_RECEIVED = "INSCRIPTION_RECEIVED",
  INSCRIPTION_TO_COMPLETE = "INSCRIPTION_TO_COMPLETE",
  APPLICATION_REFUSED = "APPLICATION_REFUSED",
  APPLICATION_ACCEPTED = "APPLICATION_ACCEPTED",
}

export default interface MailerEngine {
  sendMailToFreelancer: (_: {
    subject: MailSubject;
    freelancer: Pick<Freelancer, "email" | "firstName" | "lastName">;
  }) => any;
}
