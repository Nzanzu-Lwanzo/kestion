import "@/assets/style/root.css";
import PostCard from "./post/_ui/PostCard";
import FilterTags from "./post/_ui/FilterTags";

export default function Home() {
  return (
    <section className="main__section">
      <FilterTags />
      <div className="list__posts">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}
