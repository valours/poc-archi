import Freelancer from "../entity/freelancer";

interface FreelancerRepository {
  create: (_: Freelancer) => void;
  load: (_: Freelancer["id"]) => Freelancer;
}

export default FreelancerRepository;
