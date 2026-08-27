import { AmazeTemplate } from "./AmazeTemplate";
import { DzireTemplate } from "./DzireTemplate";
import { ErtigaTemplate } from "./ErtigaTemplate";
import { EtiosTemplate } from "./EtiosTemplate";
import { InnovaTemplate } from "./InnovaTemplate";
import { TempoTemplate } from "./TempoTemplate";

export const cabTemplates = {
  dzire: DzireTemplate,
  ertiga: ErtigaTemplate,
  "innova-crysta": InnovaTemplate,
  amaze: AmazeTemplate,
  etios: EtiosTemplate,

  // Tempo Traveller
  "luxury-tempo-traveller": TempoTemplate,
  "12-seater-tempo-traveller": TempoTemplate,
  "16-seater-tempo-traveller": TempoTemplate,
  "20-seater-tempo-traveller": TempoTemplate,
  "24-seater-tempo-traveller": TempoTemplate,
} as const;

export type CabTemplateKey = keyof typeof cabTemplates;