import { LandingComponent } from "~/app/core/components/landing/landing.component";
import { Routes } from "@angular/router";
export const ROUTES: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full" }
];
