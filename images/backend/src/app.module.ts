import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const dbConnString = process.env.NODE_ENV === 'dockercompose' ? 'mongodb://dcl-database/dcl' : 'mongodb://localhost/dcl';

@Module({
  imports: [
    MongooseModule.forRoot(dbConnString)
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
