import { EffectsModule } from "@ngrx/effects";

import { AuthEffects } from "./auth.effects";
export const EffectModuleWithProvider = EffectsModule.forRoot([AuthEffects]);
