import { useSelector } from "react-redux";
import ChildrenComp from "./ChildrenComp";

function App() {

  const products = useSelector(store => store.products)
  // useEffect(() => {
  // }, [products])

  return (
    <>
      <ChildrenComp />
      <h1 >Below are all the products</h1>
      {
        products.map((p, id) =>
          <p key={id} >{p.type}</p>
        )
      }
    </>
  )
}

export default App
