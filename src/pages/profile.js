import styled from "styled-components";

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
        <Picture src={user.picture} alt={user.displayName} /> Hello, {user.displayName}
      </h2>
      <p>Welcome:</p>
      <ul>
        { Object.keys(user).map(key => (
          <li key={key}>{key}: {user[key].toString()}</li>
        ))}
      </ul>
      </Wrapper>
    </div>
  );
}

export default Profile;