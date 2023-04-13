import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('list')
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  // @HttpCode(HttpStatus.CREATED)
  createCourse(@Body() body: Course) {
    return this.coursesService.create(body);
  }

  @Patch(':id')
  updateCourse(@Param('id') id: string, @Body() body: Course) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
