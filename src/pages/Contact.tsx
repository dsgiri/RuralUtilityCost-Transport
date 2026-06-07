export function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact</h1>
      
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="text-lg leading-relaxed mb-8">
          The Transport app is maintained as part of the Rural Utility Cost ecosystem. For inquiries, feature requests, or support regarding our hauling, mileage, and logistics estimators, please reach out through our master contact channels.
        </p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <p className="mb-6">
            For feedback regarding the Transport calculators, please mention "Transport Module" in your message so we can route it quickly.
          </p>
          
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-gray-900 block">General Support</span>
              <a href="mailto:support@ruralutilitycost.com" className="text-blue-600 hover:underline">support@ruralutilitycost.com</a>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block">Master Website</span>
              <a href="https://ruralutilitycost.com/contact" className="text-blue-600 hover:underline">ruralutilitycost.com/contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
