import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { Case, CaseDocument } from './schema/case.schema';


@Injectable()
export class CaseService {

  constructor(@InjectModel(Case.name) private caseModel: Model<CaseDocument>) {}

  create(createCaseDto: CreateCaseDto) {
    return 'This action adds a new case';
  }

  findAll() {
    return this.caseModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} case`;
  }

  update(id: number, updateCaseDto: UpdateCaseDto) {
    return `This action updates a #${id} case`;
  }

  remove(id: number) {
    return `This action removes a #${id} case`;
  }
}
