const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("https://next-market-fullstack-app.vercel.app//api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("ログイン失敗");
    }
  };
  return (
    ＜div>
      <h1> ログイン </h1>
      <form>
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
        <button> ログイン </button>
      </form>
    </div>
  );
};

export default Login;
