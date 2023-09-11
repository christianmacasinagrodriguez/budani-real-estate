import React from "react";

function ContactForm() {
  return (
    <form className="flex w-fit h-fit flex-col gap-2 shadow-[0_4px_40px_0_rgba(0,0,0,.15)] p-5">
      <fieldset className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-2 w-fit pb-4">
        <fieldse className='flex flex-col w-fit pb-2'>
            <label className="font-medium">First name*</label>
            <input className="bg-gray-100 border border-[#dbd6ef] rounded-md p-4 font-medium hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none w-full" type="text" required/>
        </fieldse>
        <fieldset className='flex flex-col w-fit pb-2'>
            <label className="font-medium">Last name</label>
            <input  className="bg-gray-100 border border-[#dbd6ef] rounded-md p-4 font-medium hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none w-full" type="text" />
        </fieldset>   
      </fieldset>
      <label className="font-medium">Email*</label>
      <input  className="w-full bg-gray-100 border border-[#dbd6ef] rounded-md p-4 font-medium mb-4 hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none" type="email" required />
      <label className="font-medium">What can we help you with?</label>
      <textarea className="w-full bg-gray-100 border border-[#dbd6ef] rounded-md p-4 mb-4 font-medium hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none" />
      <button className="w-fit flex flex-start bg-[#6663E9] px-6 py-2 text-white font-bold rounded-md">Submit</button>
    </form>
  );
}

export default ContactForm;
