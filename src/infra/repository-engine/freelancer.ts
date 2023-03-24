import Freelancer from "../../model/entity/freelancer";
import FreelancerRepository from "../../model/repository/freelancer";

const freelancerRepository: FreelancerRepository = {
  create: function (_: Freelancer): void {
    throw new Error("Function not implemented.");
  },
  load: function (_: Freelancer["id"]): Freelancer {
    throw new Error("Function not implemented.");
  },
};

export default freelancerRepository;
