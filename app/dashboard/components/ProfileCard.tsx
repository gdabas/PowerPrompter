// app/components/ProfileCard.tsx
import Image from "next/image";
import { User } from "../../types/user";

interface ProfileCardProps {
  user: User;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => (
  <>
    <div className="card w-1/3 p-4 shadow-sm">
      <Image src={user.photoURL} alt="Profile" width={50} height={50} />
      <p>
        <strong>Name:</strong> {user.displayName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>UID:</strong> {user.uid}
      </p>
    </div>
  </>
);
