//main module - like app.js
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';

//a decorator, adding metadata to the module we are coding
//module organize your app, declared with a class and annotated by a decorated module
@Module({
  imports: [UserModule, BookmarkModule, AuthModule],
})
export class AppModule {}
