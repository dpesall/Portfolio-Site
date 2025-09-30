import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navigation from '../components/layout/Navigation';

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <section className="min-h-screen bg-gray-900 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Resume</h1>
          </div>

          {/* PDF Viewer */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
            <div className="flex flex-col items-center">
              {isLoading && (
                <div
                  className="flex items-center justify-center bg-gray-700/30 rounded-lg animate-pulse"
                  style={{ width: '832px', height: '1139px', maxWidth: '100%' }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-gray-400 border-t-blue-400 rounded-full animate-spin mb-4 mx-auto"></div>
                    <div className="text-white text-lg">Loading Resume...</div>
                  </div>
                </div>
              )}

              <div style={{ display: isLoading ? 'none' : 'block' }}>
                <Document
                  file="/Drew-Pesall-Resume.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={null}
                  error={
                    <div className="text-center py-8">
                      <div className="text-red-400 text-lg">Failed to load PDF</div>
                    </div>
                  }
                  className="flex justify-center"
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(800, window.innerWidth - 100)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-lg"
                  />
                </Document>
              </div>


              {/* Download Button */}
              <div className="mt-6">
                <a
                  href="/Drew-Pesall-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;