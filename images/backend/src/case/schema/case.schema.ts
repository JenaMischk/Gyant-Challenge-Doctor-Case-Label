import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CaseDocument = HydratedDocument<Case>;

@Schema()
export class Case {

  @Prop({
    required: true,
    index: true,
    unique: true
  })
  case: string;

  @Prop({ required: true })
  caseDescription: string;

  @Prop()
  reviewedBy: string;

}

export const CaseSchema = SchemaFactory.createForClass(Case);