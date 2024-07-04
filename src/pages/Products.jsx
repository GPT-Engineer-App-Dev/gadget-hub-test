import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const sampleProducts = [
    { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
    { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
    { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sampleProducts.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <p className="text-lg font-semibold">{product.price}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigate(`/products/${product.id}`)}>View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Products;