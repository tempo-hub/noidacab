import { AmazeTemplate } from "./AmazeTemplate";
import { DzireTemplate } from "./DzireTemplate";
import { ErtigaTemplate } from "./ErtigaTemplate";
import { EtiosTemplate } from "./EtiosTemplate";
import { InnovaTemplate } from "./InnovaTemplate";

export const cabTemplates = {
  dzire: DzireTemplate,
  ertiga: ErtigaTemplate,
  "innova-crysta": InnovaTemplate,
  amaze: AmazeTemplate,
  etios: EtiosTemplate,
} as const;

export type CabTemplateKey = keyof typeof cabTemplates;