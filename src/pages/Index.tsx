import Header from '@/components/Header';
import StatsOverview from '@/components/StatsOverview';
import SensorGrid from '@/components/SensorGrid';
import AlertsSection from '@/components/AlertsSection';
import MapSection from '@/components/MapSection';
import AgenciesSection from '@/components/AgenciesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* نظرة عامة على الإحصائيات */}
        <StatsOverview />
        
        {/* التنبيهات النشطة */}
        <div className="mb-8">
          <AlertsSection />
        </div>
        
        {/* قراءات الحساسات */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">قراءات الحساسات اللحظية</h2>
          <SensorGrid />
        </div>
        
        {/* خريطة المواقع والجهات المستفيدة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MapSection />
          <AgenciesSection />
        </div>
        
        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>رصد</strong> - نظام بيئي ذكي لمراقبة التغيرات البيئية في منطقة عسير
            </p>
            <p>
              تم تطوير المنصة باستخدام تقنيات إنترنت الأشياء (IoT) للحفاظ على البيئة الطبيعية
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
