import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CaseModule } from './case/case.module';
import { ConditionModule } from './condition/condition.module';

const dbPort = process.env.NODE_DATABASE_PORT ? process.env.NODE_DATABASE_PORT : 27017;
const dbConnString = process.env.NODE_ENV === 'dockercompose' ? `mongodb://dcl-database:${dbPort}/dcl` : `mongodb://localhost:${dbPort}/dcl`;

console.log(dbConnString);

@Module({
  imports: [
    MongooseModule.forRoot(dbConnString),
    UserModule,
    CaseModule,
    ConditionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
