import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TestService } from './test.service';
import { TestDto } from './test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.testService.findOne(id);
  }

  @Post()
  create(@Body() user: TestDto) {
    return this.testService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: TestDto) {
    return this.testService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(id);
  }
}
