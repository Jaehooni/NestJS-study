import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PetModule } from './pet/pet.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  providers: [
    {
      provide: 'CUSTOM_KEY',
      useValue: '1231231231'
    },
    {
      provide: AppService,
      useClass: AppService
    }
  ]
  imports: [CatsModule, PetModule],
})
export class AppModule {}
