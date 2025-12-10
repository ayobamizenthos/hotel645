import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/data/roomDetails";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

interface RoomMenuProps {
  menuItems: MenuItem[];
  roomName: string;
}

const RoomMenu = ({ menuItems, roomName }: RoomMenuProps) => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(menuItems.map(item => item.category)))];

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: string) => {
    setCart(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    toast.success("Added to order");
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(i => i.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">In-Room Dining</h2>
        {totalItems > 0 && (
          <Badge variant="default" className="text-base px-4 py-2">
            <ShoppingCart className="w-4 h-4 mr-2" />
            {totalItems} items - ₦{getTotalPrice().toLocaleString()}
          </Badge>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer capitalize hover:bg-accent hover:text-accent-foreground transition-all"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map(item => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
                <Badge variant="secondary" className="ml-2">
                  ₦{item.price.toLocaleString()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="capitalize">
                  {item.category}
                </Badge>
                <div className="flex items-center gap-2">
                  {cart[item.id] > 0 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{cart[item.id]}</span>
                    </>
                  )}
                  <Button
                    variant="default"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => addToCart(item.id)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalItems > 0 && (
        <Card className="bg-accent/5 border-accent">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total Amount:</span>
              <span className="text-2xl font-bold text-accent">₦{getTotalPrice().toLocaleString()}</span>
            </div>
            <Button variant="luxury" size="lg" className="w-full">
              Place Order
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Orders can be paid online or charged to your booking
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RoomMenu;
