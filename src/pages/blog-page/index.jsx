import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import React, { useEffect, useState } from "react";
import Head from "next/head";

function GetBlogData() {
  const [data, setData] = useState([]);
  function getLocalStorageData() {
    // localStorage.removeItem('blogs')
    return JSON.parse(localStorage.getItem("blogs"));
  }

  function parseDate(date) {
    const date_arr = date.split("-");
    return date_arr[1] + "-" + date_arr[2].substring(0, 2) + "-" + date_arr[0];
  }

  useEffect(() => {
    const getBlogDataFromWP = async () => {
      const res = await fetch(
        "https://dev-fortis-avia.pantheonsite.io/wp-json/wp/v2/posts?_embed"
      );
      const resJson = await res.json();
      setData(resJson);
      localStorage.setItem("blogs", JSON.stringify(resJson));
    };

    getLocalStorageData()
      ? setData(getLocalStorageData())
      : getBlogDataFromWP();

    // if(getBlogDataFromWP()) {
    //   setData(getBlogDataFromWP())
    // } else {
    //   setData(getLocalStorageData())
    // }
  }, []);

  return (
    <>
      <Navbar
        pageStat={false}
        onBlogPage={true}
        blogActive={true}
        contactActive={false}
      />
      <Head>
        <title>Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="h-fit w-screen pt-[200px] px-[10%] pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] bg-gray-100">
        {data?.map((datus) => (
          <BlogCard
            key={datus.id}
            imageSRC={datus._embedded["wp:featuredmedia"]["0"].source_url}
            postDate={parseDate(datus.date)}
            blogTitle={datus.title.rendered}
            blogContent={datus.content.rendered}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
export default GetBlogData;
