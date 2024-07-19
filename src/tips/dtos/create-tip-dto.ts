export class CreateTipDto {
    title: string;
    description: string;
    type: string;  // Filosofía, Ciencia, Tecnología
    levelId: number;  // Relacionado con Nivel (Básico, Medio, Avanzado)
    genreIds: number[];  // Relacionado con Géneros
  }
  