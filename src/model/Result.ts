interface ResultWithValueOnSuccess<Value = undefined> {
  success: true;
  value: Value;
}

interface ResultWithErrorOnFailure<Error = undefined> {
  success: false;
  error: Error;
}

export type Result<Value = undefined, Error = undefined> =
  | ResultWithValueOnSuccess<Value>
  | ResultWithErrorOnFailure<Error>;
