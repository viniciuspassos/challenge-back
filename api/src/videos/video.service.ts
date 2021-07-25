import { Injectable } from "@nestjs/common";
import { CreateVideoDto } from "./dto/create-video-dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Videos } from "./models/video";
import { Repository } from "typeorm";

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Videos)
    private videosRepository: Repository<Videos>
  ) {}
  async getAll(): Promise<Videos[]> {
    const videos = await this.videosRepository.find();
    console.log(
      await this.videosRepository
        .createQueryBuilder()
        .select()
        .printSql()
        .getMany()
    );

    console.log(videos);
    return videos;
  }

  getOne(id: number) {}

  create(newVideo: CreateVideoDto) {}

  delete(id: number) {}
}
