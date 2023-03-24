import { Freelancer } from "./entity/freelancer";

type MailSubject =
  | "INSCRIPTION_RECEIVED"
  | "APPLICATION_REFUSED"
  | "APPLICATION_ACCEPTED";

export default interface NotificationEngine {
  sendMailToFreelancer: (_: {
    subject: MailSubject;
    freelancer: Pick<Freelancer, "email" | "firstName" | "lastName">;
  }) => Promise<void>;
}
