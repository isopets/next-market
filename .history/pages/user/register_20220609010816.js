import {useState} from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    try {
      fetch("https://next-market-fullstack-app.vercel.app//api/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
    } catch (err) {
      alert("ユーザー登録失敗");
    }
  };
  return (
    <div>
      <h1> ユーザー登録 </h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="名前"
          required
        />
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="名前"
          required
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="メールアドレス"
          required
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="text"
          name="password"
          placeholder="パスワード"
          required
        />
        <button> 登録 </button>{" "}
      </form>
    </div>
  );
};

export default Register;
