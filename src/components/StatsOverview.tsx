import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Thermometer, Droplets, Wind, Zap } from 'lucide-react';

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">الحساسات النشطة</CardTitle>
          <Activity className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">24</div>
          <p className="text-xs text-muted-foreground">
            من إجمالي 30 حساس
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-temperature/10 to-temperature/5 border-temperature/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">متوسط الحرارة</CardTitle>
          <Thermometer className="h-4 w-4 text-temperature" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-temperature">35°س</div>
          <p className="text-xs text-muted-foreground">
            +2° من الأمس
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-humidity/10 to-humidity/5 border-humidity/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">متوسط الرطوبة</CardTitle>
          <Droplets className="h-4 w-4 text-humidity" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-humidity">68%</div>
          <p className="text-xs text-muted-foreground">
            ضمن المعدل الطبيعي
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">التنبيهات النشطة</CardTitle>
          <Zap className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">3</div>
          <p className="text-xs text-muted-foreground">
            تتطلب انتباه فوري
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsOverview;