import Freelancer, { FreelancerCredentials } from "../model/entity/freelancer";
import { Result } from "../model/Result";

enum PasswordValidationErrors {
  PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
  PASSWORD_IS_NOT_A_PASSWORD = "PASSWORD_IS_NOT_A_PASSWORD",
}

export const isValidPassword = (
  password: FreelancerCredentials["password"]
): Result<FreelancerCredentials["password"], PasswordValidationErrors> => {
  if (password.length < 8) {
    return {
      success: false,
      error: PasswordValidationErrors.PASSWORD_TOO_SHORT,
    };
  }

  if (password === "password") {
    return {
      success: false,
      error: PasswordValidationErrors.PASSWORD_IS_NOT_A_PASSWORD,
    };
  }

  return { success: true, value: password };
};

enum SignupCompletionErrors {
  EMAIL_IS_MISSING = "EMAIL_IS_MISSING",
  FIRST_NAME_IS_MISSING = "FIRST_NAME_IS_MISSING",
  LAST_NAME_IS_MISSING = "LAST_NAME_IS_MISSING",
}

export const isSignupCompleted = (
  freelancer: Freelancer
): Result<Freelancer, Array<SignupCompletionErrors>> => {
  const errors: Array<SignupCompletionErrors> = [];

  if (!freelancer.email) {
    errors.push(SignupCompletionErrors.EMAIL_IS_MISSING);
  }
  if (!freelancer.firstName) {
    errors.push(SignupCompletionErrors.FIRST_NAME_IS_MISSING);
  }

  if (!freelancer.lastName) {
    errors.push(SignupCompletionErrors.LAST_NAME_IS_MISSING);
  }

  if (errors.length > 0) {
    return { success: false, error: errors };
  }

  return { success: true, value: freelancer };
};
