import { Profession } from "./profession";

export interface FreelancerCredentials {
  email: string;
  password: string;
}

export default interface Freelancer {
  id: string;
  firstName: string;
  lastName: string;
  profession: Profession;
  email: string;
  businessManagerReferentId?: BusinessManager["id"];
}

export type ExternalFreelancer = Pick<
  Freelancer,
  "firstName" | "lastName" | "email" | "profession"
>;
