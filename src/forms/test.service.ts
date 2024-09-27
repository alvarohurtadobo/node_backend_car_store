import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './test.entity';
import { TestDto } from './test.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}

  findAll(): Promise<Test[]> {
    return this.testRepository.find();
  }

  findOne(id: number): Promise<Test> {
    return this.testRepository.findOne({ where: { id } });
  }

  create(user: TestDto): Promise<Test> {
    const newUser = this.testRepository.create(user);
    return this.testRepository.save(newUser);
  }

  update(id: number, user: TestDto): Promise<Test> {
    return this.testRepository.save({ id, ...user });
  }

  async remove(id: string): Promise<void> {
    await this.testRepository.delete(id);
  }
}
