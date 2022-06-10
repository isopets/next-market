import {useState} from "react";
import Head from "next/head";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("https://next-market-fullstack-app.vercel.app//api/user/register", {
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
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("ユーザー登録失敗");
    }
  };
  return (
    <div>
    <Head><title>ユーザー登録</title></Head>
    <h1 className="page-title">ユーザー登録</h1>
    <form onSubmit={handleSubmit}>
    ...
// pages/item/login

import Head from "next/head"

...

<div>
    <Head><title>ログイン</title></Head>
    <h1 className="page-title">ログイン</h1>
    <form onSubmit={handleSubmit}>
    ...
// pages/index.js

import Head from "next/head"

...

<div>
    <Head><title>Next Market</title></Head>
    <div className="grid-container-in">
    {props.allItems.map(item =>
        <Link href={`/item/${item._id}`} key={item._id}>
            <a className="card">
                <Image src={item.image} width="750px" height="500px" alt="item-image"/>
                <div className="texts-area">
                    <h2>¥{item.price}</h2>
                    <h3>{item.title}</h3>

      <form onSubmit={handleSubmit}>
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
