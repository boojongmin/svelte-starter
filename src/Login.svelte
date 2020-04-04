<script>
  import { user } from './store';

  function login() {
    $user.isLogin = true;
  }
</script>

<div class="container m-auto p-8">
  <div class="max-w-md mx-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          아이디
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="아이디"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          비밀번호
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full
          py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
          focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red-500 text-xs italic">비밀번호를 입력해주세요.</p>
      </div>
      <div class="flex items-center justify-between">
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500
          hover:text-blue-800"
          href="#"
        >
          비밀번호 찾기?
        </a>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
          rounded focus:outline-none focus:shadow-outline"
          type="button"
          on:click="{login}"
        >
          로그인
        </button>
      </div>
    </form>

    <div class="p-4 items-center">
      <button
        class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4
        mb-2 rounded focus:outline-none focus:shadow-outline w-full"
        type="button"
        on:click="{login}"
      >
        카카오 로그인
      </button>
      <button
        class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4
        rounded focus:outline-none focus:shadow-outline w-full"
        type="button"
        on:click="{login}"
      >
        구글 로그인
      </button>
    </div>

    <p class="text-center text-gray-500 text-xs">
      &copy;2020 BlaBla Corp. All rights reserved.
    </p>
  </div>
</div>
