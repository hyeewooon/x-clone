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

## 서버 액션

함수, 모듈 수준에서 'use server'로 정의 가능.
서버 액션은 서버와 클라이언트 컴포넌트에서 모두 호출이 가능.
`useActionState` 훅을 사용하여 서버 액션의 상태를 관리할 수 있다. 로딩 중, 오류 발생 등의 메세지를 표시할 수 있다.
서버 액션이 완료된 후 redirect를 통해 다른 경로로 리다이렉트할 수 있다.
`useFormStatus` 훅을 사용하여 폼 제출 상태 정보를 확인할 수 있다. 폼 제출하는 동안 로딩 표시, 제출된 데이터 표시 등에 사용할 수 있다.
`useFormStatus`는 오직 상위 <form>에 대한 상태 정보만 반환한다. 동일한 컴포넌트나 자식 컴포넌트에서 렌더링한 <form>의 상태 정보는 반환하지 않는다.
