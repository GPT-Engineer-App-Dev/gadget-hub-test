import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg", quantity: 1 },
    { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg", quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
            <div>
              <p className="text-lg font-semibold">{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="text-right">
        <p className="text-lg font-semibold">Total: ${totalPrice}</p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;