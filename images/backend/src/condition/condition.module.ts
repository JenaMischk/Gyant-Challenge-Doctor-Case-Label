import { Module } from '@nestjs/common';
import { ConditionService } from './condition.service';
import { ConditionController } from './condition.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Condition } from './entities/condition.entity';
import { ConditionSchema } from './schema/condition.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Condition.name, schema: ConditionSchema }])],
  controllers: [ConditionController],
  providers: [ConditionService]
})
export class ConditionModule {}
