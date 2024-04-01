import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class PetModule {}
