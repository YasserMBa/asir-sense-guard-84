import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, MapPin, Clock, Bell } from 'lucide-react';

interface Alert {
  id: string;
  sensorType: string;
  value: number;
  unit: string;
  location: string;
  coordinates: [number, number];
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  icon: string;
  description: string;
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    sensorType: 'درجة الحرارة',
    value: 48,
    unit: '°س',
    location: 'غابة رغدان',
    coordinates: [18.2465, 42.5047],
    timestamp: 'منذ 5 دقائق',
    severity: 'high',
    icon: '🔥',
    description: 'درجة حرارة مرتفعة جداً - خطر حريق'
  },
  {
    id: '2',
    sensorType: 'جودة الهواء',
    value: 85,
    unit: 'AQI',
    location: 'وادي عرعر',
    coordinates: [18.1234, 42.4567],
    timestamp: 'منذ 12 دقيقة',
    severity: 'medium',
    icon: '💨',
    description: 'جودة هواء ضعيفة'
  },
  {
    id: '3',
    sensorType: 'اهتزاز',
    value: 3.2,
    unit: 'ريختر',
    location: 'جبل السودة',
    coordinates: [18.2738, 42.3647],
    timestamp: 'منذ 18 دقيقة',
    severity: 'high',
    icon: '⚠️',
    description: 'اهتزاز غير عادي - مراقبة مستمرة'
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high':
      return 'bg-destructive text-destructive-foreground';
    case 'medium':
      return 'bg-warning text-warning-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getSeverityText = (severity: string) => {
  switch (severity) {
    case 'high':
      return 'عالي 🔴';
    case 'medium':
      return 'متوسط 🟠';
    default:
      return 'منخفض ⚠️';
  }
};

const AlertsSection = () => {
  const openInMaps = (coordinates: [number, number]) => {
    const url = `https://maps.google.com/maps?q=${coordinates[0]},${coordinates[1]}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Bell className="h-6 w-6 text-warning" />
          التنبيهات النشطة
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          تنبيهات آلية من شبكة الحساسات الذكية
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div 
              key={alert.id}
              className="border rounded-lg p-4 hover:shadow-md transition-all duration-200 bg-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <span className="text-2xl">{alert.icon}</span>
                  
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{alert.sensorType}</h3>
                      <Badge className={getSeverityColor(alert.severity)}>
                        {getSeverityText(alert.severity)}
                      </Badge>
                    </div>
                    
                    <div className="text-2xl font-bold text-primary">
                      {alert.value}
                      <span className="text-sm text-muted-foreground ml-1">{alert.unit}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => openInMaps(alert.coordinates)}
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  الموقع
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {mockAlerts.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <AlertTriangle className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>لا توجد تنبيهات نشطة حالياً</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AlertsSection;