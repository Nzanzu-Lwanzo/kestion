import UserProfile from "@/app/_ui/UserProfile";
import { formatDate } from "@/libs/formatters";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="post__card shadow">
      <div className="top">
        <UserProfile />
      </div>
      <div className="post__image">
        <img src="/girl.jpg" alt="Image" />
      </div>
      <div className="details">
        <span className="title">Lorem Ipsum Dolor Sit Amet</span>
        <p className="prev__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nulla possimus reprehenderit deserunt et harum, voluptas incidunt est!
          Quidem laboriosam iusto illum voluptatibus placeat incidunt, nemo
          saepe ex rem dolore?
        </p>
        <span className="date">{formatDate(new Date())}</span>
        <div className="read__post">
          <Link href="/">Read</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;