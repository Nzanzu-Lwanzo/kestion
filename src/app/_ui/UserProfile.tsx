import placeholderImage from "@/assets/imgs/girl.jpg";

const UserProfile = () => {
  return (
    <div className="user__profile">
      <div className="image">
        <img src={placeholderImage.src} alt="Image" />
      </div>
      <span className="name">John Doe</span>
    </div>
  );
};

export default UserProfile;
