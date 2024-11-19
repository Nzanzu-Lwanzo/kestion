import { createPostAction } from "@/libs/actions";

const Page = () => {
  return (
    <div className="new__post__page">
      <h1>New Post Form</h1>
      <form
        action={createPostAction}
        method="post"
        className="form"
        id="post__form"
      >
        <div className="wrap__input">
          <label htmlFor="title">A title for the blog post</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="A title for this beautiful blog post, please !"
          />
        </div>
        <div className="wrap__input">
          <label htmlFor="tags">Tags to ease search task</label>
          <input
            type="text"
            name="tags"
            id="tags"
            placeholder="Separate your tags with blank spaces"
          />
        </div>
        <div className="wrap__input">
          <label htmlFor="postContent">Post content</label>
          <textarea
            name="postContent"
            id="postContent"
            placeholder="What do you wanna share, today ?"
          ></textarea>
        </div>
        <div className="buttons">
          <button className="button">
            <span className="text">Post Now</span>
            <span className="icon center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="#000"
                viewBox="0 0 256 256"
              >
                <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM157.66,106.34a8,8,0,0,1-11.32,11.32L136,107.31V152a8,8,0,0,1-16,0V107.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path>
              </svg>
            </span>
          </button>
          <button className="button">
            <span className="text">Plan a post</span>
            <span className="icon center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
