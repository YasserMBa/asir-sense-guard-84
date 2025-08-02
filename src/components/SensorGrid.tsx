import SensorCard from './SensorCard';

const mockSensorData = [
  {
    id: '1',
    type: 'temperature' as const,
    value: 42,
    unit: '°س',
    location: 'غابة رغدان - موقع 1',
    coordinates: [18.2465, 42.5047] as [number, number],
    timestamp: 'منذ دقيقتين',
    status: 'warning' as const,
    icon: '🔥'
  },
  {
    id: '2',
    type: 'humidity' as const,
    value: 65,
    unit: '%',
    location: 'وادي عرعر - موقع 2',
    coordinates: [18.1234, 42.4567] as [number, number],
    timestamp: 'منذ 3 دقائق',
    status: 'normal' as const,
    icon: '💧'
  },
  {
    id: '3',
    type: 'air-quality' as const,
    value: 85,
    unit: 'AQI',
    location: 'منتزه عسير الوطني',
    coordinates: [18.2738, 42.3647] as [number, number],
    timestamp: 'منذ دقيقة واحدة',
    status: 'warning' as const,
    icon: '💨'
  },
  {
    id: '4',
    type: 'vibration' as const,
    value: 1.2,
    unit: 'ريختر',
    location: 'جبل السودة',
    coordinates: [18.2738, 42.3647] as [number, number],
    timestamp: 'منذ 5 دقائق',
    status: 'normal' as const,
    icon: '⚠️'
  },
  {
    id: '5',
    type: 'temperature' as const,
    value: 38,
    unit: '°س',
    location: 'وادي لجب',
    coordinates: [17.7319, 43.3975] as [number, number],
    timestamp: 'منذ 4 دقائق',
    status: 'normal' as const,
    icon: '🔥'
  },
  {
    id: '6',
    type: 'humidity' as const,
    value: 78,
    unit: '%',
    location: 'قرية رجال ألمع',
    coordinates: [18.1972, 42.2653] as [number, number],
    timestamp: 'منذ 6 دقائق',
    status: 'normal' as const,
    icon: '💧'
  }
];

const SensorGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockSensorData.map((sensor) => (
        <SensorCard key={sensor.id} sensor={sensor} />
      ))}
    </div>
  );
};

export default SensorGrid;