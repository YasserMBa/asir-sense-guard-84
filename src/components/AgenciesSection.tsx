import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Building2, Truck, Phone, Send } from 'lucide-react';

const agencies = [
  {
    name: 'الدفاع المدني',
    icon: Shield,
    description: 'للطوارئ البيئية والحرائق',
    status: 'متصل',
    color: 'bg-destructive'
  },
  {
    name: 'أمانة منطقة عسير',
    icon: Building2,
    description: 'للشؤون البلدية والبيئية',
    status: 'متصل',
    color: 'bg-primary'
  },
  {
    name: 'هيئة الأرصاد',
    icon: Truck,
    description: 'للحالة الجوية والمناخ',
    status: 'متصل',
    color: 'bg-air-quality'
  },
  {
    name: 'الهلال الأحمر',
    icon: Phone,
    description: 'للإسعافات والطوارئ الطبية',
    status: 'متصل',
    color: 'bg-destructive'
  }
];

const AgenciesSection = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Send className="h-6 w-6 text-primary" />
          الجهات المستفيدة
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          يتم إرسال التنبيهات تلقائياً إلى الجهات المختصة عبر لوحة التحكم
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agencies.map((agency, index) => {
            const IconComponent = agency.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition-all duration-200"
              >
                <div className={`p-2 rounded-lg ${agency.color} text-white`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{agency.name}</h3>
                    <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                      {agency.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{agency.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-accent/50 rounded-lg">
          <div className="flex items-start gap-3">
            <Send className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm mb-1">آلية الإرسال التلقائي</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                عند رصد أي تغيرات غير طبيعية، يقوم النظام بإرسال تنبيه فوري للجهات المختصة يحتوي على: 
                نوع الحساس، القراءة، الموقع الجغرافي، التوقيت، ودرجة الخطورة.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgenciesSection;