## Parallel Routes

레이아웃 내에 main페이지와 login모달을 동시에 렌더링
@modal 폴더 내 page 추가, layout 파일에 modal을 Prop으로 넘겨줌

## Intercepting Routes

/i/flow/login url 변경 시, 라우트를 가로채 /i/flow/login/page.tsx 대신에 /(.)i/flow/login/page.tsx 경로의 파일을 로드한다.
단 새로고침 시에는 라우트를 가로채지 않고 /i/flow/login/page.tsx 원래 경로의 파일을 로드한다.

Parallel Routes와 함께 사용하여 모달을 병렬적으로 렌더링하는 것도 가능

- /i/flow/login 진입 시, main 페이지와 modal을 함께 렌더링
- 새로고침 시에도 모달 유지 -> url을 통해 모달 공유 가능
- 단 새로고침 시에는 기존 /i/flow/login/page.tsx을 렌더함으로 main 페이지가 표시되지 않음.
