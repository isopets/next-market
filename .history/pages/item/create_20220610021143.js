
これでトップページからクリックして、個別のアイテムページへと行けるようになりました。

アイテムデータを作成するページ
アイテムデータの作成とは、ユーザーがデータを入力し、それをバックエンドに渡すことなので、流れとしては前章のユーザー登録とほぼ同じだと考えられます。

次のReactひな形コードをcreate.jsに打ちます。

// pages/item/create.js

const CreateItem = () => {
    return (
        <div>
            <h1>アイテム作成</h1>
        </div>
    )
}

export default CreateItem
次にアイテムデータの入力を受け付ける各項目を作ります。

// pages/item/create.js

const CreateItem = () => {
    return (
        <div>
            <h1>アイテム作成</h1>
            // ↓追加
            <form>
                <input type="text" name="title" placeholder="アイテム名" required/>
                <input type="text" name="price" placeholder="価格" required/>
                <input type="text" name="image" placeholder="画像" required/>
                <textarea type="text" name="description" rows="15" placeholder="商品説明" required></textarea>
                <button>作成</button>
            </form>
            // ↑追加
        </div>
    )
}

export default CreateItem