import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { VideosModule } from "./videos/videos.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Videos } from "./videos/models/video";
import { Category } from "./category/models/category";
import { CategoryModule } from "./category/category.module";

@Module({
  imports: [
    VideosModule,
    CategoryModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env["DB_HOST"],
      port: 5432,
      username: process.env["DB_USERNAME"],
      password: process.env["DB_PASSWORD"],
      database: process.env["DB_DATABASE"],
      entities: [Videos, Category],
      logging: false,
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
