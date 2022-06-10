import {useState} from "react";

const Register = () => {
  const [name, setName] = useState("");
  console.log(name);
  const handleSubmit = () => {
    try {
      fetch("https://next-market-fullstack-app.vercel.app//api/user/register", {
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
