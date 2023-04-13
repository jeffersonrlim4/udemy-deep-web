import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do Framework Nest.js',
      description: 'Cursinho top que comprei na udemy',
      tags: ['Programação', 'Backend', 'Nest.js', 'Typescript', 'Javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));
    if (course) {
      return course;
    } else {
      throw new HttpException(
        `Curso ${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  create(createCourseDto: Course) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: string, updateCourseDto: Course) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (indexCourse > 0) {
      this.courses[indexCourse] = updateCourseDto;
    } else {
      return false;
    }
    return updateCourseDto;
  }

  delete(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (indexCourse > 0) {
      this.courses.splice(indexCourse, 1);
    } else {
      return false;
    }

    return true;
  }
}
