import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DataSource } from 'typeorm';
import { Tip } from '../tips/entities/tips.entity';
import { Level } from '../levels/entities/levels.entity';
import { Genre } from '../genres/entities/genres.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  // Obtener la instancia de DataSource
  const dataSource = app.get(DataSource);

  const levels = [
    { name: 'básico' },
    { name: 'medio' },
    { name: 'avanzado' },
  ];

  const genres = [
    { name: 'filosofía' },
    { name: 'ciencia' },
    { name: 'tecnología' },
  ];

  const tips = [
    { title: 'Explora la Sabiduría de los Antiguos', description: 'Sumérgete en los escritos de Sócrates y Platón para una mejor comprensión de la filosofía clásica.', level: 'básico', genre: 'filosofía' },
    { title: 'El Método Científico en Acción', description: 'Aprende a aplicar el método científico para resolver problemas cotidianos y mejorar tus experimentos.', level: 'medio', genre: 'ciencia' },
    { title: 'Inova con la IA', description: 'Descubre cómo la inteligencia artificial está cambiando el mundo y cómo puedes integrar esta tecnología en tus proyectos.', level: 'avanzado', genre: 'tecnología' },
    { title: 'La Filosofía en la Vida Diaria', description: 'Integra principios filosóficos en tu vida diaria para una mayor introspección y bienestar.', level: 'básico', genre: 'filosofía' },
    { title: 'El Poder de la Observación Científica', description: 'Desarrolla habilidades para observar y analizar datos de manera efectiva para obtener resultados más precisos.', level: 'medio', genre: 'ciencia' },
    { title: 'Blockchain para Principiantes', description: 'Entiende los fundamentos del blockchain y cómo está revolucionando la seguridad en el intercambio de datos.', level: 'avanzado', genre: 'tecnología' },
    { title: 'Desentrañando los Misterios del Existencialismo', description: 'Explora conceptos clave del existencialismo y cómo estos pueden influir en tus decisiones y visión del mundo.', level: 'básico', genre: 'filosofía' },
    { title: 'La Ciencia Detrás del Cambio Climático', description: 'Conoce los datos y estudios científicos que explican el cambio climático y sus efectos en el planeta.', level: 'medio', genre: 'ciencia' },
    { title: 'Realidad Aumentada en el Día a Día', description: 'Aprende cómo la realidad aumentada puede ser utilizada en la educación, el entretenimiento y más.', level: 'avanzado', genre: 'tecnología' },
    { title: 'Ética en la Filosofía Moderna', description: 'Reflexiona sobre los dilemas éticos contemporáneos y cómo la filosofía moderna aborda estos problemas.', level: 'básico', genre: 'filosofía' },
    { title: 'Genética y Medicina: Una Conexión Clave', description: 'Descubre cómo la genética está revolucionando el campo de la medicina y el tratamiento de enfermedades.', level: 'medio', genre: 'ciencia' },
    { title: 'Computación Cuántica: El Futuro de la Tecnología', description: 'Explora los principios de la computación cuántica y cómo podría transformar la tecnología tal como la conocemos.', level: 'avanzado', genre: 'tecnología' },
    { title: 'Filósofos del Renacimiento y Su Impacto', description: 'Examina cómo los filósofos del Renacimiento influyeron en el pensamiento moderno y las ciencias.', level: 'básico', genre: 'filosofía' },
    { title: 'Las Leyes de la Termodinámica Simplificadas', description: 'Comprende las leyes de la termodinámica con ejemplos simples y aplicables a la vida diaria.', level: 'medio', genre: 'ciencia' },
    { title: 'Desarrollo de Aplicaciones con IA', description: 'Aprende a desarrollar aplicaciones inteligentes utilizando técnicas de inteligencia artificial y machine learning.', level: 'avanzado', genre: 'tecnología' },
    { title: 'Filosofía y Psicología: Un Vínculo Fascinante', description: 'Explora cómo la filosofía y la psicología se entrelazan para explicar el comportamiento humano.', level: 'básico', genre: 'filosofía' },
    { title: 'El Impacto de la Ciencia en la Sociedad', description: 'Reflexiona sobre cómo los descubrimientos científicos han cambiado la sociedad a lo largo de la historia.', level: 'medio', genre: 'ciencia' },
    { title: 'Internet de las Cosas: Aplicaciones en la Vida Cotidiana', description: 'Descubre cómo el Internet de las Cosas está transformando el hogar inteligente y otras áreas de tu vida.', level: 'avanzado', genre: 'tecnología' },
    { title: 'Introducción al Estudio de la Lógica Filosófica', description: 'Adéntrate en el estudio de la lógica y cómo puede mejorar tu capacidad de argumentación y razonamiento.', level: 'básico', genre: 'filosofía' },
    { title: 'La Ciencia del Comportamiento Humano', description: 'Analiza los estudios científicos que explican el comportamiento humano y sus motivaciones.', level: 'medio', genre: 'ciencia' },
    { title: 'Automatización con Python', description: 'Aprende a utilizar Python para automatizar tareas repetitivas y mejorar tu productividad.', level: 'avanzado', genre: 'tecnología' },
    { title: 'Conceptos Clave del Estoicismo', description: 'Descubre los principios del estoicismo y cómo pueden ayudarte a mantener la calma en situaciones difíciles.', level: 'básico', genre: 'filosofía' },
    { title: 'Tendencias Actuales en Investigación Científica', description: 'Mantente al tanto de las últimas tendencias y avances en el campo de la investigación científica.', level: 'medio', genre: 'ciencia' },
    { title: 'Programación en la Era de la Cuántica', description: 'Explora cómo se está adaptando la programación para aprovechar las capacidades de la computación cuántica.', level: 'avanzado', genre: 'tecnología' },
  ];
  
  

  // Guardar niveles y géneros
  await dataSource.getRepository(Level).save(levels);
  await dataSource.getRepository(Genre).save(genres);
  
  for (const tip of tips) {
    const level = await dataSource.getRepository(Level).findOne({ where: { name: tip.level } });
    const genre = await dataSource.getRepository(Genre).findOne({ where: { name: tip.genre } });
    
    await dataSource.getRepository(Tip).save({
      title: tip.title,
      description: tip.description,
      level,
      genre,
    });
  }

  await app.close();
}

bootstrap().catch(error => console.error(error));
