import { AmazeTemplate } from "./AmazeTemplate";
import { DzireTemplate } from "./DzireTemplate";
import { ErtigaTemplate } from "./ErtigaTemplate";
import { InnovaTemplate } from "./InnovaTemplate";

export const cabTemplates = {
  dzire: DzireTemplate,
  ertiga: ErtigaTemplate,
  innova: InnovaTemplate,
  amaze: AmazeTemplate,
} as const;

export type CabTemplateKey = keyof typeof cabTemplates;