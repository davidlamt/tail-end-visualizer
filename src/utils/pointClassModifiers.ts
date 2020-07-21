import { ClassModifier } from '../enums';

const addPointClassModifiers = (
  classModifier: string,
  pointRefs: HTMLSpanElement[]
): void => {
  const baseClass = pointRefs[1].classList[0];

  for (let idx = 1; idx <= pointRefs.length; idx++) {
    if (pointRefs[idx]) {
      pointRefs[idx].classList.add(`${baseClass}${classModifier}`);
    }
  }
};

const resetPointClassModifiers = (pointRefs: HTMLSpanElement[]): void => {
  const baseClass = pointRefs[1].classList[0];

  for (let idx = 1; idx <= pointRefs.length; idx++) {
    if (pointRefs[idx]) {
      pointRefs[idx].classList.remove(
        `${baseClass}${ClassModifier.Complete}`,
        `${baseClass}${ClassModifier.LastSelected}`,
        `${baseClass}${ClassModifier.Selected}`
      );
    }
  }
};

export { addPointClassModifiers, resetPointClassModifiers };
export default { addPointClassModifiers, resetPointClassModifiers };
