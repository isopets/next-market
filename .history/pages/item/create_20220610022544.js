import {useState} from "react";
const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    try {
      fetch("http://localhost:3000/api/item/create",{
          method: "POST",
          headers: (
              "Acce"
          )
      });
    } catch (err) {}
  };

  return (
    <div>
      <h1>アイテム作成</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="アイテム名"
          required
        />
        <input
          value={price}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="price"
          placeholder="価格"
          required
        />
        <input
          value={image}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="image"
          placeholder="画像"
          required
        />
        <textarea
          value={description}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="description"
          rows="15"
          placeholder="商品説明"
          required></textarea>
        <button>作成</button>
      </form>
    </div>
  );
};

export default CreateItem;
