export function Legal() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Legal & Terms</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600 text-sm space-y-8">
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">Master Ecosystem Terms apply</h2>
          <p className="leading-relaxed">
            The Transport app operates under the master legal terms, privacy policy, and open-source licenses of Rural Utility Cost. Please refer to <a href="https://ruralutilitycost.com/legal" className="text-[#1e3a8a] font-medium hover:underline">ruralutilitycost.com/legal</a> for the complete and authoritative terms governing this application.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">Disclaimer of Estimates</h2>
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
            <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-1">Decision Support Only</p>
            <p className="text-amber-800 text-xs leading-relaxed">
              All results provided by the Transport app—including but not limited to hauling costs, fuel estimates, route planning, and mileage figures—are estimates designed for general decision support. They do not constitute formal logistical, financial, or regulatory advice.
            </p>
          </div>
          <p className="leading-relaxed mt-4">
            Variables such as real-time fuel prices, vehicle maintenance status, road conditions, regulations, and exact payload weights limit the accuracy of our calculators. You must verify all important logistical, quoting, and financial decisions independently based on your specific operational data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-3">Privacy & Data (Local Storage)</h2>
          <p className="leading-relaxed">
            The Transport application uses basic local storage within your browser to save the tools you mark as "Favorites." We do not track, upload, or centrally store your favorite tool selections, nor do we track the specific inputs you use within the transport calculators outside of standard anonymous web analytics for the master site.
          </p>
        </section>
      </div>
    </div>
  );
}
