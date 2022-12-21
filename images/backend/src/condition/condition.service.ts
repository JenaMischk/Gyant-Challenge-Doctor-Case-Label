import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
import { Condition, ConditionDocument } from './schema/condition.schema';

@Injectable()
export class ConditionService {

  constructor(@InjectModel(Condition.name) private conditionModel: Model<ConditionDocument>) {}

  create(createConditionDto: CreateConditionDto) {
    return 'This action adds a new condition';
  }

  findAll() {
    return this.conditionModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} condition`;
  }

  update(id: number, updateConditionDto: UpdateConditionDto) {
    return `This action updates a #${id} condition`;
  }

  remove(id: number) {
    return `This action removes a #${id} condition`;
  }
}
