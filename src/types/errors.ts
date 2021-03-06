export interface GenericErrors<T> {
  [id: string]: T;
}

export const AuthErrors: GenericErrors<string> = {
  "auth/invalid-email": "Error credentials",
  "auth/wrong-password": "Error credentials",
  "auth/user-disabled": "user disable",
  "auth/user-not-found": "user no fund",
  "auth/email-already-in-use": "email exist",
  "auth/operation-not-allowed": "error operation",
  "auth/weak-password": "password is not strong enough",
};

export const FirestoreErrors: GenericErrors<string> = {
  cancelled: "The operation was cancelled",
  unknown: "Unknown error",
  "invalid-argument": "Client specified an invalid argument",
  "deadline-exceeded": "Deadline expired before operation could complete",
  "not-found": "document not found",
  "already-exists": "document already exists",
  "permission-denied": "Does not have permission ",
  "resource-exhausted": "Some resource has been exhausted",
  "failed-precondition": "Operation was rejected",
  aborted: "The operation was aborted",
  "out-of-range": "Operation was attempted past the valid range",
  unimplemented: "Operation is not implemented or not supported/enabled",
  internal: "Internal errors",
  unavailable: "The service is currently unavailable",
  "data-loss": "Unrecoverable data loss or corruption",
  unauthenticated: "Does not have valid authentication credentials",
};