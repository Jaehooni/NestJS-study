import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  Req,
  Request,
  Res,
  HttpCode,
  Response,
  Redirect,
  Header,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  //@HttpCode(204)
  //@Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  //@Redirect('https://nestjs.com', 301)
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  // Path parameter을 받는 다른 방법: id에 직접 접근
  //   @Get(':id')
  //   findOne(@Param('id') id: string): string {
  //     return `This action returns a #${id} cat`;
  //   }

  @Get('musical')
  findMusical() {
    return 'This action returns musical CATs';
  }
}

// @Controller({ host: 'admin.example.com' })
// export class AdminController {
//   @Get()
//   index(): string {
//     return 'Admin page';
//   }
// }
