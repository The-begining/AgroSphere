export const mockCropData = [
  {
    id: 1,
    name: 'Wheat',
    health: 92,
    growthStage: 'Vegetative',
    area: 5.2,
    lastIrrigation: '2024-05-01',
    nextIrrigation: '2024-05-05',
    soilMoisture: 65,
    temperature: 24,
    humidity: 45,
    yieldPrediction: 3.8,
    issues: ['Low soil moisture', 'Potential pest activity'],
    recommendations: ['Increase irrigation frequency', 'Apply preventive pesticide']
  },
  {
    id: 2,
    name: 'Corn',
    health: 88,
    growthStage: 'Flowering',
    area: 3.8,
    lastIrrigation: '2024-05-02',
    nextIrrigation: '2024-05-06',
    soilMoisture: 72,
    temperature: 26,
    humidity: 50,
    yieldPrediction: 4.2,
    issues: ['High temperature stress'],
    recommendations: ['Increase irrigation', 'Apply foliar spray']
  },
  {
    id: 3,
    name: 'Soybean',
    health: 95,
    growthStage: 'Pod Development',
    area: 4.5,
    lastIrrigation: '2024-05-03',
    nextIrrigation: '2024-05-07',
    soilMoisture: 68,
    temperature: 22,
    humidity: 55,
    yieldPrediction: 3.5,
    issues: [],
    recommendations: ['Continue current practices']
  }
];

export const mockMarketplaceData = [
  {
    id: 1,
    name: 'Organic Fertilizer',
    type: 'Input',
    price: 45.99,
    unit: '50kg bag',
    supplier: 'GreenGrowth Ltd',
    rating: 4.8,
    reviews: 156,
    stock: 250,
    description: 'Premium organic fertilizer with slow-release nutrients',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Smart Irrigation System',
    type: 'Equipment',
    price: 299.99,
    unit: 'unit',
    supplier: 'AgriTech Solutions',
    rating: 4.6,
    reviews: 89,
    stock: 50,
    description: 'Automated irrigation system with soil moisture sensors',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e0e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Wheat Seeds',
    type: 'Seeds',
    price: 12.99,
    unit: 'kg',
    supplier: 'SeedMaster Inc',
    rating: 4.9,
    reviews: 234,
    stock: 1000,
    description: 'High-yield wheat seeds with disease resistance',
    image: 'https://images.unsplash.com/photo-1516257984-1c7b0b5e5e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const mockWeatherData = {
  current: {
    temperature: 24,
    humidity: 45,
    windSpeed: 12,
    precipitation: 0,
    condition: 'Sunny',
    icon: '☀️'
  },
  forecast: [
    {
      date: '2024-05-04',
      high: 26,
      low: 18,
      condition: 'Partly Cloudy',
      precipitation: 0
    },
    {
      date: '2024-05-05',
      high: 25,
      low: 17,
      condition: 'Sunny',
      precipitation: 0
    },
    {
      date: '2024-05-06',
      high: 23,
      low: 16,
      condition: 'Rain',
      precipitation: 5
    }
  ]
};

export const mockSoilData = {
  ph: 6.8,
  nitrogen: 45,
  phosphorus: 30,
  potassium: 40,
  organicMatter: 3.2,
  moisture: 65,
  temperature: 22,
  lastTested: '2024-04-28',
  recommendations: [
    'Add nitrogen-rich fertilizer',
    'Maintain current pH level',
    'Increase organic matter content'
  ]
};

export const mockAnalyticsData = {
  monthlyYield: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [3.2, 3.5, 3.8, 4.1, 4.3, 4.5]
  },
  resourceUsage: {
    water: 45000,
    fertilizer: 1200,
    pesticides: 800,
    energy: 2500
  },
  costAnalysis: {
    inputs: 15000,
    labor: 8000,
    equipment: 5000,
    maintenance: 3000
  },
  profit: 25000
};

export const mockNotifications = [
  {
    id: 1,
    type: 'alert',
    message: 'Low soil moisture detected in Wheat field',
    timestamp: '2024-05-03 14:30',
    read: false
  },
  {
    id: 2,
    type: 'recommendation',
    message: 'Time to apply fertilizer to Corn field',
    timestamp: '2024-05-03 10:15',
    read: false
  },
  {
    id: 3,
    type: 'market',
    message: 'New supplier offering discounted seeds',
    timestamp: '2024-05-02 16:45',
    read: true
  }
]; 