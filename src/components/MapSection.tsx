import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sensorLocations = [
  { name: 'غابة رغدان', coords: [18.2465, 42.5047], status: 'warning' },
  { name: 'وادي عرعر', coords: [18.1234, 42.4567], status: 'normal' },
  { name: 'منتزه عسير الوطني', coords: [18.2738, 42.3647], status: 'warning' },
  { name: 'جبل السودة', coords: [18.2738, 42.3647], status: 'normal' },
  { name: 'وادي لجب', coords: [17.7319, 43.3975], status: 'normal' },
  { name: 'قرية رجال ألمع', coords: [18.1972, 42.2653], status: 'normal' }
];

const MapSection = () => {
  const openFullMap = () => {
    // منطقة عسير - الإحداثيات التقريبية
    const asirCenter = "18.2465,42.5047";
    const url = `https://maps.google.com/maps?q=${asirCenter}&z=10`;
    window.open(url, '_blank');
  };

  const openLocationInMaps = (coords: number[]) => {
    const url = `https://maps.google.com/maps?q=${coords[0]},${coords[1]}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <MapPin className="h-6 w-6 text-primary" />
          خريطة مواقع الحساسات
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          مواقع شبكة الحساسات الذكية في منطقة عسير
        </p>
      </CardHeader>
      
      <CardContent>
        {/* خريطة مبسطة */}
        <div className="relative mb-6">
          <div className="w-full h-64 bg-gradient-to-br from-accent/30 to-primary/20 rounded-lg border-2 border-dashed border-primary/30 flex flex-col items-center justify-center">
            <MapPin className="h-12 w-12 text-primary mb-2" />
            <h3 className="text-lg font-semibold text-primary mb-2">منطقة عسير</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              شبكة الحساسات الذكية موزعة عبر المواقع الطبيعية الحساسة
            </p>
            <Button onClick={openFullMap} variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              عرض الخريطة التفاعلية
            </Button>
          </div>
        </div>

        {/* قائمة المواقع */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground">مواقع الحساسات:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sensorLocations.map((location, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    location.status === 'warning' ? 'bg-warning' : 'bg-success'
                  }`} />
                  <span className="text-sm font-medium">{location.name}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => openLocationInMaps(location.coords)}
                  className="text-xs"
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  موقع
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-primary/5 rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>ملاحظة:</strong> يمكن النقر على أي موقع لعرضه في خرائط جوجل مع الإحداثيات الدقيقة.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapSection;