import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConditionDocument = HydratedDocument<Condition>;

@Schema()
export class Condition {

  @Prop({
    required: true,
    index: true,
    unique: true
  })
  condition: string;

  @Prop({ required: true })
  conditionDescription: string;

}

export const ConditionSchema = SchemaFactory.createForClass(Condition);