import { AmazeTemplate } from "./AmazeTemplate";
import { DzireTemplate } from "./DzireTemplate";
import { ErtigaTemplate } from "./ErtigaTemplate";
import { EtiosTemplate } from "./EtiosTemplate";
import { InnovaTemplate } from "./InnovaTemplate";
import { SedanTemplate } from "./SedanTemplate";
import { TempoTemplate } from "./TempoTemplate";
import { WagonRTemplate } from "./WagonRTemplate";
import { UrbaniaTemplate } from "./UrbaniaTemplate";
import { SUVTemplate } from "./SUVTemplate";

export const cabTemplates = {
  dzire: DzireTemplate,
  ertiga: ErtigaTemplate,
  "innova-crysta": InnovaTemplate,
  amaze: AmazeTemplate,
  etios: EtiosTemplate,
  "sedan-taxi": SedanTemplate,
  sedan: SedanTemplate,
  wagonr: WagonRTemplate,
  suv: SUVTemplate,
  "suv-taxi": SUVTemplate,
  urbania: UrbaniaTemplate,
  "urbania-rental": UrbaniaTemplate,

  // Tempo Traveller
  "tempo-traveller": TempoTemplate,
  "luxury-tempo-traveller": TempoTemplate,
  "12-seater-tempo-traveller": TempoTemplate,
  "16-seater-tempo-traveller": TempoTemplate,
  "20-seater-tempo-traveller": TempoTemplate,
  "24-seater-tempo-traveller": TempoTemplate,
} as const;

export type CabTemplateKey = keyof typeof cabTemplates;