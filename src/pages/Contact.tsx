export function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Contact</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600 text-sm">
        <p className="leading-relaxed mb-8">
          The Transport app is maintained as part of the Rural Utility Cost ecosystem. For inquiries, feature requests, or support regarding our hauling, mileage, and logistics estimators, please reach out through our master contact channels.
        </p>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Get in Touch</h2>
          <p className="mb-6 leading-relaxed">
            For feedback regarding the Transport calculators, please mention "Transport Module" in your message so we can route it quickly.
          </p>
          
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">General Support</span>
              <a href="mailto:support@ruralutilitycost.com" className="text-[#1e3a8a] font-medium hover:underline">support@ruralutilitycost.com</a>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Master Website</span>
              <a href="https://ruralutilitycost.com/contact" className="text-[#1e3a8a] font-medium hover:underline">ruralutilitycost.com/contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
