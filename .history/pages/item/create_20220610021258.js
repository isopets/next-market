import { useState } from "react"
const CreateItem = () => {
    const 
  return (
    <div>
      <h1>アイテム作成</h1>
      <form>
        <input type="text" name="title" placeholder="アイテム名" required />
        <input type="text" name="price" placeholder="価格" required />
        <input type="text" name="image" placeholder="画像" required />
        <textarea
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
