import styled from "styled-components";
import Link from "next/link";

const Picture = styled.img`
  border-radius: 50%;
  border: 3px solid white;
  width: 100px;
`;
const Wrapper = styled.section`
  background: cadetblue;
  color: seashell;
`;


function Profile({ user }) {
  return (
    <div>
    <Wrapper>
      <h2>
        <Picture src={user.picture} alt={user.displayName} /> Hello, {user.nickname}
      </h2>
      <ul>
       <p> Email: {user.displayName} </p>
      </ul>
      <ul>
      <Link href="/share-thought">
              <a className="nav-link">New Announcement </a>
            </Link>
      </ul>
      </Wrapper>
    </div>
  );
}

export default Profile;