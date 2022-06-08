import {useState} from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    try {
      fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: "ダミーデータ",
      });
    } catch (err) {}
  };
  return (
    <div>
      <h1> ユーザー登録 </h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={e => {
            setName(e.target.value);
            console.log(e);
          }}
          type="text"
          name="name"
          placeholder="名前"
          required
        />
        <input type="text" name="name" placeholder="名前" required />
        <input type="text" name="email" placeholder="メールアドレス" required />
        <input type="text" name="password" placeholder="パスワード" required />
        <button> 登録 </button>{" "}
      </form>
    </div>
  );
};

export default Register;
