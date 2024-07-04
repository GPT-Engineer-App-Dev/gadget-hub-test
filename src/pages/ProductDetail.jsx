import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const sampleProducts = [
    { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg", description: "Latest smartphone with advanced features." },
    { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg", description: "High-performance laptop for all your needs." },
    { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg", description: "Noise-cancelling headphones for immersive sound." },
  ];

  const product = sampleProducts.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
        <p className="text-lg font-semibold">{product.price}</p>
        <p className="mt-4">{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductDetail;