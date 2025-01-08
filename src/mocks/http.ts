import express, { json } from "express";
import cors from "cors";
import { createMiddleware } from "@mswjs/http-middleware";

import { handlers } from "./handlers";

const app = express();
const port = 9090;

// cors 설정
app.use(
  cors({
    origin: "http://localhost:3000", // 허용할 출처
    optionsSuccessStatus: 200, // preflight request OPTIONS 요청에 대해 200 상태 코트로 응답
    credentials: true, // 쿠키나 인증 정보 허용
  })
);

// express.json(): req.body를 자동으로 JSON으로 파싱
// res.json(): res.body를 JSON 형식으로 응답
app.use(json());

// msw + express 통합 사용하기 위해 미들웨어 연결
// 브라우저 워커와 같은 핸들러 사용
app.use(createMiddleware(...handlers));

app.listen(port, () => console.log(`Mock server is running on port ${port}`));
