import { Request, Response } from "express";
import * as application from "../application/signupFreelancer";
import mailerEngine from "../infra/mailer-engine";
import freelancerRepository from "../infra/repository-engine/freelancer";
import Freelancer, { FreelancerCredentials } from "../model/entity/freelancer";

export const signup = (
  req: Request<
    {},
    {},
    { freelancer: Freelancer; credentials: FreelancerCredentials }
  >,
  res: Response
) => {
  const { body: payload } = req;

  const providers: Parameters<typeof application.signupFreelancer>[1] = {
    freelancerRepository,
    mailerEngine,
  };

  const result = application.signupFreelancer(payload, providers);

  res.send(result);
};
