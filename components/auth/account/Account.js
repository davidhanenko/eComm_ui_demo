import { AccountStyles } from './AccountStyles';

export default function Account({ user }) {
  return (
    <AccountStyles>
      Account
      <p>{user?.data?.attributes?.username}</p>
      <p>{user?.data?.attributes?.email}</p>
    </AccountStyles>
  );
}
