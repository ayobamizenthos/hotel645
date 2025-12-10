import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RoomArea } from "@/data/roomDetails";

interface RoomGalleryProps {
  areas: RoomArea[];
}

const RoomGallery = ({ areas }: RoomGalleryProps) => {
  const [selectedArea, setSelectedArea] = useState<RoomArea | null>(areas[0] || null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Room Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {areas.map((area, index) => (
            <Badge
              key={index}
              variant={selectedArea?.name === area.name ? "default" : "outline"}
              className="cursor-pointer py-2 justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              onClick={() => setSelectedArea(area)}
            >
              {area.name}
            </Badge>
          ))}
        </div>
      </div>

      {selectedArea && (
        <Card className="overflow-hidden animate-fade-in">
          <div className="aspect-video relative overflow-hidden bg-muted">
            <img
              src={selectedArea.image}
              alt={selectedArea.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2">{selectedArea.name}</h3>
            <p className="text-muted-foreground">{selectedArea.description}</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default RoomGallery;
