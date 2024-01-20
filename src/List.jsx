const List = (props) => {
  const users = props.users;
  const style = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  };
  return (
    <section>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>
            <img style={style} src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </li>
        );
      })}
    </section>
  );
};

export default List;
