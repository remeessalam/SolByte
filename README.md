# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

 <div className="bg-primary/5 relative text-primary_text">
        <div className="wrapper py-[5rem] relative z-10">
          <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-secondary/10 rounded-xl mb-[3rem]">
            <img
              data-aos="fade-up"
              src={blog.image}
              alt=""
              className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
            />
            <div className="flex flex-col gap-2">
              <div
                data-aos="fade-up"
                className="flex justify-between items-center font-light mt-[0.8rem]"
              >
                <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
                  By Admin
                </div>
                <p className="text-gray-800 text-[.8rem]">12th May 2023</p>
              </div>
              <h4
                data-aos="fade-up"
                className="heading-2_1 leading-tight mt-[1rem] pb-[1.5rem]"
              >
                {/* {blog.title} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                iure neque nihil
              </h4>
              {/* <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                data-aos="fade-up"
                className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
              ></div> */}
              <p
                data-aos="fade-up"
                className="desc hyphen-auto leading-relaxed text-gray-800"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, porro excepturi et eos corrupti magnam vel voluptatibus
                aperiam atque voluptatum dolor ullam alias similique hic aliquam
                provident minima cumque doloremque! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat, porro excepturi et eos
                corrupti magnam vel voluptatibus aperiam atque voluptatum dolor
                ullam alias similique hic aliquam provident minima cumque
                doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat, porro excepturi et eos corrupti magnam vel
                voluptatibus aperiam atque voluptatum dolor ullam alias
                similique hic aliquam provident minima cumque doloremque! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                porro excepturi et eos corrupti magnam vel voluptatibus aperiam
                atque voluptatum dolor ullam alias similique hic aliquam
                provident minima cumque doloremque! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat, porro excepturi et eos
                corrupti magnam vel voluptatibus aperiam atque voluptatum dolor
                ullam alias similique hic aliquam provident minima cumque
                doloremque!
              </p>
            </div>
          </div>
          {latestBlogs.length > 0 && (
            <div className="pt-[3rem]">
              <SubHeading heading="Recent Blogs" />
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {blogs
                  .filter((item) => item.id !== blog.id)
                  .slice(0, 3)
                  .map((item) => (
                    <BlogItem key={item.id} blog={item} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
