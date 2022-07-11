import http from "./httpServices";

export function signUpService(data) {
  return http.post("/user/register", data);
}
