import { useMemo, useState } from 'react';


const products = [
  { name: "아이폰 16", category: "전자제품" },
  { name: "맥북 프로", category: "전자제품" },
  { name: "에어팟", category: "전자제품" },
  { name: "삼성 갤럭시", category: "전자제품" },
  { name: "나이키 운동화", category: "의류" },
  { name: "아디다스 티셔츠", category: "의류" },
  { name: "믹서기", category: "가전제품" },
  { name: "전자레인지", category: "가전제품" },
];

const ProductFilter = () => {
  const [category, setCategory] = useState("");

  const filterProduct = useMemo(() => {
    if(category === ""){
      return products;
    }

    return products.filter(product => product.category === category);
  },[category])

  return (
    <>
    <h1>상품 목록</h1>

    <div>
      <button onClick={()=>setCategory("")}>모든 카테고리</button>
    </div>
    </>
  )
}