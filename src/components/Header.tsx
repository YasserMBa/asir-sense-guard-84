import { Leaf, Activity, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-glow/20 rounded-lg">
              <Leaf className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">رصد</h1>
              <p className="text-sm opacity-90">نظام بيئي ذكي لمراقبة التغيرات البيئية - منطقة عسير</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Activity className="h-4 w-4 text-success" />
              <span>متصل</span>
            </div>
            <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              لوحة التحكم
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;