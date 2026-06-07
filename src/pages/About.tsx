export function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About</h1>
      
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="text-lg leading-relaxed mb-6">
          The Transport application is a specialized module belonging to the broader <strong>Rural Utility Cost</strong> ecosystem. It focuses explicitly on the logistics and operational costs of rural transport, including hauling, routing, mileage, and delivery planning.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mt-12 mb-4">Our Goal</h2>
        <p className="leading-relaxed mb-6">
          Our goal is to help users make practical, cost-effective transport decisions. Whether you are a farmer hauling grain locally, a rancher managing livestock transport, or an agricultural logistics manager planning regional deliveries, these simple tools provide clear estimates to support your operational planning.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-12 mb-4">The Rural Utility Cost Ecosystem</h2>
        <p className="leading-relaxed mb-6">
          By centralizing all transport-focused planners here, we maintain a clean and focused experience while sharing the core values of the Rural Utility Cost master site: simplicity, clarity, and practical utility.
        </p>
      </div>
    </div>
  );
}
