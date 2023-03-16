import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService, CarType } from './cars.service';

@Controller('cars')
export class CarsController {
  // use the carsService to get the cars
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars(): CarType[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  // ParceIntPipe converts the id to a number
  getCarById(@Param('id', ParseIntPipe) id: number): CarType {
    return this.carsService.getCarById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    // return body;
    return this.carsService.createCar(body);
  }

  @Patch(':id')
  editCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.carsService.editCar(id, body);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.deleteCar(id);
  }
}
