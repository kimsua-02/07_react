import { useMemo, useState } from 'react'


const Category = () => {
    const [category, setCategory] = useState("");

    const all = []

      return (
        <>
            <h1>상품 목록</h1>
            <button>모든 카테고리</button>
            <button>전자제품</button>
            <button>의류</button>
            <button>가전제품</button>
        </>
      )
}

export default Category;