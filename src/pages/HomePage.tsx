import ShowProducts from "../Components/ShowProducts";
import { useProducts } from "../hooks/useProducts";

export default function HomePage() {
    const { products } = useProducts();

    return (
        <>
            <div>
                {products.length > 0 && (
                    products.map((product) => (
                            <ShowProducts key={product.id} product={product} />
                    ))
                )}
            </div>
        </>
    )
}