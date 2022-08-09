import { generateClasses } from '@formkit/themes'

export default {
  config: {
    classes: generateClasses({
      text: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm',
        input: 'w-full h-[40px] px-3 border rounded text-base text-gray-700 placeholder-gray-400 formkit-invalid:border-red-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      textarea: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm',
        input: 'w-full h-[100px] px-3 py-2 border rounded text-base text-gray-700 placeholder-gray-400 formkit-invalid:border-red-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      url: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm',
        input: 'w-full h-[40px] px-3 border rounded text-base text-gray-700 placeholder-gray-400 formkit-invalid:border-red-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      email: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm',
        input: 'w-full h-[40px] px-3 border rounded text-base text-gray-700 placeholder-gray-400 formkit-invalid:border-red-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      number: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm',
        input: 'w-full h-[40px] px-3 border rounded text-base text-gray-700 placeholder-gray-400 formkit-invalid:border-red-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      select: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm',
        input: 'w-full h-[40px] px-3 border rounded text-base text-gray-700 placeholder-gray-400 formkit-invalid:border-red-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      password: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm',
        input: 'w-full h-[40px] px-3 border rounded text-base text-gray-700 placeholder-gray-400 formkit-invalid:border-red-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      date: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm',
        input: 'w-full h-[40px] px-3 border rounded text-base text-gray-700 placeholder-gray-400 formkit-invalid:border-red-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      button: {
        outer: 'bg-blue-500 rounded flex items-center justify-center h-[40px]',
        input: 'text-white'
      },
      submit: {
        wrapper: "w-full h-full",
        outer: 'bg-blue-500 rounded flex items-center justify-center h-[40px]',
        input: 'text-white w-full h-full'
      },
      checkbox: {
        wrapper: "flex flex-row gap-2 items-start",
        input: "w-[26px] h-[26px]"
      }
    })
  }
}
