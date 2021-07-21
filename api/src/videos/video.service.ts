import { Injectable } from "@nestjs/common";
import { CreateVideoDto } from "./dto/create-video-dto";

@Injectable()
export class VideoService {
  async getAll() {
    return { id: 1, url: "google.com" };
  }

  getOne(id: number) {}

  create(newVideo: CreateVideoDto) {}

  delete(id: number) {}
}
