import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

const User = [
  { id: "elonmusk", nickname: "Elon Musk", image: faker.image.avatar() },
  { id: "hw", nickname: "ksjksjfd", image: faker.image.avatar() },
  { id: "skfjdkj", nickname: "안녕", image: faker.image.avatar() },
];

export const handlers = [
  http.post("/api/login", () => {
    console.log("로그인");
    return HttpResponse.json(User[0]);
  }),

  http.get("/api/users", () => {
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
];
