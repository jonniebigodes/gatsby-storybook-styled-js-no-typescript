import React from "react";
const User = ({ userInfo }) => (
  <div className="container">
    <style jsx>
      {`
        .container {
          display: flex;
          align-items: center;
          margin: 0 auto 12px auto;
        }
        container:last-child {
          margin-bottom: 0;
        }
        .Avatar {
          flex: 0 0 96px;
          width: 96px;
          height: 96px;
          margin: 0;
        }
        .description {
          flex: 1;
          margin-left: 18px;
          padding: 12px;
        }
        .userName {
          margin: 0 0 12px 0;
          padding: 0;
        }
        .excerpt {
          margin: 0;
        }
      `}
    </style>
    <img src={userInfo.avatar} alt="boop" className="Avatar" />
    <div className="description">
      <h2 className="userName">{userInfo.username}</h2>
      <p className="excerpt">{userInfo.excerpt}</p>
    </div>
  </div>
);

export default User;
