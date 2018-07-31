import {
  trigger,
  style,
  state,
  transition,
  animate
} from "@angular/animations";

const slideLeft = trigger("slideLeft", [
  state(
    "appear",
    style({
      transform: "translateX(0)"
    })
  ),
  state(
    "disappear",
    style({
      transform: "translateX(-100%)"
    })
  ),
  transition("disappear <=> appear", animate("400ms ease-in"))
]);

export const Animations = { slideLeftAnimation: slideLeft };
