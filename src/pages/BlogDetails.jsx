import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { BlogItem, blogs } from "./Blogs";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import SubHeading from "../components/SubHeading";
import { blogsdetails } from "../blogs";
// import { blogs } from "../../data/blogs";
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsdetails.find((item) => item.id === Number(id));
  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  const latestBlogs =
    blogsdetails.filter((item) => item.id !== Number(id)) || [];
  console.log(blog, "asdfasdjlkf");
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="Blog Details" />
      {/* <div dangerouslySetInnerHTML={{ __html: blog.blog }}>
      </div> */}{" "}
      <div>{blog.blog}</div>
      {latestBlogs.length > 0 && (
        <div className="pt-[3rem]">
          <SubHeading heading="Recent Blogs" />
          <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            {blogsdetails
              .filter((item) => item.id !== blog.id)
              .slice(0, 3)
              .map((item) => (
                <BlogItem key={item.id} blog={item} />
              ))}
          </div>
        </div>
      )}
      <WebsiteFooter />
    </>
  );
};

export default BlogDetails;
