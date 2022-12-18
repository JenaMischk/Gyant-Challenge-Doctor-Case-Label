import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CaseModule } from './case/case.module';
import { ConditionModule } from './condition/condition.module';

const dbConnString = process.env.NODE_ENV === 'dockercompose' ? 'mongodb://dcl-database/dcl' : 'mongodb://localhost/dcl';

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
