import { Injectable, NotFoundException } from '@nestjs/common';

export interface CarType {
  brand: string;
  id: number;
}

@Injectable()
export class CarsService {
  private cars: CarType[] = [
    { brand: 'Ford', id: 1 },
    { brand: 'Chevy', id: 2 },
    { brand: 'Dodge', id: 3 },
  ];

  findAll(): CarType[] {
    return this.cars;
  }

  getCarById(id: number): CarType {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  createCar(body) {
    return this.cars.push({ ...body, id: this.cars.length + 1 });
  }

  editCar(id: number, body) {
    this.cars = this.cars.map((singleCar) => {
      return singleCar.id === id ? { ...body, id } : singleCar;
    });
    return this.cars;
  }

  deleteCar(id: number) {
    const car = this.getCarById(id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }
}
