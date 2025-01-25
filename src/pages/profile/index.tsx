interface UserProfile {
  name: string;
  avatarUrl: string;
  email: string;
  bio: string;
}

const user: UserProfile = {
  name: "John Doe",
  avatarUrl: "https://example.com/avatar.jpg",
  email: "john.doe@example.com",
  bio: "Software Developer at XYZ Company",
};

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}
