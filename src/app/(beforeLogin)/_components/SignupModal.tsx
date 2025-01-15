"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

import submit from "../_actions/signup";

export default function SignupModal() {
  const [state, formAction] = useActionState(submit, {
    errors: null,
  });

  const router = useRouter();

  function goBack() {
    router.back();
  }

  console.log(state);

  return (
    <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-black/5 text-gray-900">
      <div className="w-[600px] h-[600px] rounded-xl bg-white relative">
        <div>
          <button onClick={goBack} type="button">{`<-`}</button>
        </div>

        <form action={formAction}>
          <div>
            <div>
              <label htmlFor="id" className="mr-4">
                ID
              </label>

              <input
                id="id"
                name="id"
                required
                type="text"
                className="outline-none border-none bg-gray-100"
              />
            </div>
          </div>

          <div>
            <SubmitButton />
            <div className="text-red-300">
              {state?.errors && state.errors.id?.[0]}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function SubmitButton() {
  // ✅ `pending`은 SubmitButton 컴포넌트를 감싸는 폼에서 파생됩니다
  const { pending } = useFormStatus();

  console.log("pending", pending);

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-300 disabled:bg-gray-200"
    >
      submit
    </button>
  );
}
