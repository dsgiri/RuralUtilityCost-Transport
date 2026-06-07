export function Legal() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Legal & Terms</h1>
      
      <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Master Ecosystem Terms apply</h2>
          <p className="leading-relaxed">
            The Transport app operates under the master legal terms, privacy policy, and open-source licenses of Rural Utility Cost. Please refer to <a href="https://ruralutilitycost.com/legal" className="text-blue-600 hover:underline">ruralutilitycost.com/legal</a> for the complete and authoritative terms governing this application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Disclaimer of Estimates</h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <p className="font-medium text-orange-900 mb-2">Decision Support Only</p>
            <p className="text-orange-800 text-sm">
              All results provided by the Transport app—including but not limited to hauling costs, fuel estimates, route planning, and mileage figures—are estimates designed for general decision support. They do not constitute formal logistical, financial, or regulatory advice.
            </p>
          </div>
          <p className="leading-relaxed mt-4">
            Variables such as real-time fuel prices, vehicle maintenance status, road conditions, regulations, and exact payload weights limit the accuracy of our calculators. You must verify all important logistical, quoting, and financial decisions independently based on your specific operational data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacy & Data (Local Storage)</h2>
          <p className="leading-relaxed">
            The Transport application uses basic local storage within your browser to save the tools you mark as "Favorites." We do not track, upload, or centrally store your favorite tool selections, nor do we track the specific inputs you use within the transport calculators outside of standard anonymous web analytics for the master site.
          </p>
        </section>
      </div>
    </div>
  );
}
