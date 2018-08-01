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
  transition("disappear <=> appear", animate("200ms ease-out"))
]);

const overlay = trigger("overlay", [
  state(
    "in",
    style({
      opacity: 0.5
    })
  ),
  state(
    "out",
    style({
      opacity: 0
    })
  ),
  transition("in <=> out", animate("200ms"))
]);

export const Animations = {
  slideLeftAnimation: slideLeft,
  OverlayAnimation: overlay
};
