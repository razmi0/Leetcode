import {
  imageSmoother1,
  imageSmoother2,
  imageSmoother3,
  imageSmoother4,
  imageSmoother5,
  imageSmoother6,
} from "../problems/fundamental/imgSmoother.js";
import { perfSync } from "../utils/perf/perf.js";
import { cL } from "../index.js";

const img = [
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
];
const cap = 1000000;

cL(perfSync(imageSmoother1, [img], " while version", cap));

cL(perfSync(imageSmoother2, [img], " for version", cap));

cL(perfSync(imageSmoother3, [img], " do while version", cap));

cL(perfSync(imageSmoother4, [img], " refacto for version", cap));

cL(perfSync(imageSmoother5, [img], " refacto while version", cap));

cL(perfSync(imageSmoother6, [img], " refacto do while version", cap));
