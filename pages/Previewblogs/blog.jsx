import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlog } from '../../styles/redux/BlogSlice';
import store from '../../styles/redux/store';
import Head from 'next/head';

const blog= () => {
  let [blogData,setBlogData] = useState({});
  let loading = useSelector(state => state.blogs.loading);
  let dispatch = useDispatch();
  let router = useRouter();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await dispatch(getSingleBlog(router.query.blog));
        setBlogData(data.payload);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    // Call getData only if router.query.blog exists
    if (router.query.blog) {
      getData();
    }

  }, [dispatch, router.query.blog]);

  if (loading) {
    {
      return loading && <div role="status" className='flex w-44 mx-auto h-screen my-9'>
      <svg aria-hidden="true" className="w-12 h-12 m-auto text-4xl text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
    }
  }
  

  
  return (
    <>
        {Object.keys(blogData).length !== 0 && blogData.findBlog && ( <section className="text-gray-600 body-font">
          <Head>
                    <title>
                      Read Blog - {blogData.findBlog. title}
                    </title>
          </Head>

   <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
     <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={blogData.findBlog. imageUrl}/>
     <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> {blogData.findBlog. title}</h1>
       <p className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{__html: blogData.findBlog.description}}/> 
       {/* <div className="flex w-full justify-center items-end">
         <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
           <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
           <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
         </div>
         <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
       </div> */}
       <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Blog Posted By CodeSea on  <span className="text-blue-600">
         {blogData.findBlog. title}
         </span>.</p>
       {/* <div className="flex">
         <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
             <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
           </svg>
           <span className="ml-4 flex items-start flex-col leading-none">
             <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
             <span className="title-font font-medium">Google Play</span>
           </span>
         </button>
         <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
             <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
             <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
           </svg>
           <span className="ml-4 flex items-start flex-col leading-none">
             <span className="text-xs text-gray-600 mb-1">Download on the</span>
             <span className="title-font font-medium">App Store</span>
           </span>
         </button>
       </div> */}
     </div>
   </div>
 </section>
    )
   }
    </>
   
  )
  
}

// export async function getServerSideProps(context) {
  
//   let {payload} = await store.dispatch(getSingleBlog(context.query.blog));
//   return {
//     props: {
//       payload,
//     },
//   };
// }


export default blog