import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock } from 'lucide-react';

interface SensorData {
  id: string;
  type: 'temperature' | 'humidity' | 'air-quality' | 'vibration';
  value: number;
  unit: string;
  location: string;
  coordinates: [number, number];
  timestamp: string;
  status: 'normal' | 'warning' | 'critical';
  icon: string;
}

interface SensorCardProps {
  sensor: SensorData;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'critical':
      return 'bg-destructive text-destructive-foreground';
    case 'warning':
      return 'bg-warning text-warning-foreground';
    default:
      return 'bg-success text-success-foreground';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'critical':
      return 'خطر عالي 🔴';
    case 'warning':
      return 'تحذير متوسط 🟠';
    default:
      return 'طبيعي ✅';
  }
};

const SensorCard = ({ sensor }: SensorCardProps) => {
  const openInMaps = () => {
    const url = `https://maps.google.com/maps?q=${sensor.coordinates[0]},${sensor.coordinates[1]}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <span className="text-2xl">{sensor.icon}</span>
            <span>{sensor.type === 'temperature' ? 'درجة الحرارة' : 
                    sensor.type === 'humidity' ? 'الرطوبة' :
                    sensor.type === 'air-quality' ? 'جودة الهواء' : 'الاهتزاز'}</span>
          </CardTitle>
          <Badge className={getStatusColor(sensor.status)}>
            {getStatusText(sensor.status)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center py-4">
          <div className="text-4xl font-bold text-primary">
            {sensor.value}
            <span className="text-lg text-muted-foreground ml-1">{sensor.unit}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{sensor.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{sensor.timestamp}</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={openInMaps}
          className="w-full"
        >
          <MapPin className="h-4 w-4 mr-2" />
          عرض الموقع على الخريطة
        </Button>
      </CardContent>
    </Card>
  );
};

export default SensorCard;