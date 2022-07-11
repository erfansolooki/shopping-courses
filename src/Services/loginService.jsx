import http from "./httpServices";

export function loginServices(data) {
  return http.post("/user/login", data);
}
