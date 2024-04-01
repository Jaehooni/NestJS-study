import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('CUSTOM_KEY')
    private readonly customkey,
  ) {}

  @Inject()
  private readonly AppService: AppService;

  @Get()
  getHello(): string {
    const customValue = this.customkey;
    console.log(customValue);
    return this.appService.getHello();
    return this.AppService.getHello();
  }
}
