import { LoginService } from "./google/login.service";
import { UserService } from "./google/user.service";
export const CORE_SERVICES = [LoginService, UserService];
export * from "./interceptors";
