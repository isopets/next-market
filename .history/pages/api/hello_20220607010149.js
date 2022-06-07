// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
const hello = (req, res) => {
    return res.status(200).json({ message: "こんにちは" });
};

export default hello;