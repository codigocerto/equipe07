import { Level, Technologies } from '@prisma/client';

export class TechnologiesEntity implements Technologies {
  id: string;
  name: string;
  level: Level;
}
