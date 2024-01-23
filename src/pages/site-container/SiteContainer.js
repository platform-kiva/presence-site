import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { selectProducts } from "../../store/products/products.selector";

export default function SiteContainer() {
    const navigate = useNavigate();
    const products = useSelector(selectProducts);

    useEffect(() => {
    if (products.length === 0) {
        navigate("/")
    }
    }, [navigate, products])

    return (
        <>
            <Outlet />
        </>
    )
}
