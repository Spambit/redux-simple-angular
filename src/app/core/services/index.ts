import { LoginService } from "./google/login.service";
import { UserService } from "./google/user.service";
import { NetworkObserverService } from "./network-observer.service";
export const CORE_SERVICES = [LoginService, UserService, NetworkObserverService];
export * from "./interceptors";
