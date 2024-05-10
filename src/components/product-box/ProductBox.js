import { ProductBoxContainer } from "./ProductBox.styles.js";

export default function ProductBox({ children }) {
  return (
    <ProductBoxContainer>
        <div style={{ width: '75%' }}>
            { children }
        </div>
    </ProductBoxContainer>
  )
}
