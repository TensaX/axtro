<script>
    import { auth } from "$lib/firebase";
        import {
            createUserWithEmailAndPassword,
            updateProfile,
            getIdToken,
        } from "firebase/auth";
        import { request } from "$lib/fetch.js"

        var phoneNo, otp
    </script>
    
<div class="relative container z-0 mx-auto w-full md:w-4/5 xl:w-2/5 pb-4 rounded-2xl mt-12">
    <div
      class="relative border border-b-0 border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500"
    >
      <label for="name" class="block text-xs font-medium text-gray-700"
        >Enter Your Phone Number :</label
      >
      <input
        type="number"
        name="name"
        id="name"
        class="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm w-full"
        placeholder="Your Phone Number"
        bind:value={phoneNo}
      />
    </div><div
    class="relative  border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500"
  >
    <label for="name" class="block text-xs font-medium text-gray-700"
      >Enter OTP : </label
    >
    <input
      type="text"
      name="name"
      id="name"
      class="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm w-full"
      placeholder="OTP Recieved On Your Phone Number"
      bind:value={otp}
    />
  </div>

</div>


        <style>
            input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          /* Firefox */
          input[type=number] {
            -moz-appearance: textfield;
          }
          </style>