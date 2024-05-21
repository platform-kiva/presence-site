import { ProductBoxContainer } from "./ProductBox.styles.js";

export default function ProductBox({ children }) {
  return (
    <ProductBoxContainer>
        <div>
            { children }
        </div>
    </ProductBoxContainer>
  )
}
