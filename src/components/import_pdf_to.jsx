import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const App = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (pdfFile) {
        const fileData = await readFileData(pdfFile);
        setContent(fileData);
      }
    };

    fetchData();
  }, [pdfFile]);

  const readFileData = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event.target.result;
        resolve(fileData);
      };
      reader.onerror = (event) => {
        reject(event);
      };
      reader.readAsText(file);
    });
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      {pdfFile && (
        <Document file={pdfFile} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
          <Page pageNumber={currentPage} />
        </Document>
      )}

      {numPages && (
        <div>
          <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Previous Page
          </button>
          <span>
            Page {currentPage} of {numPages}
          </span>
          <button disabled={currentPage >= numPages} onClick={() => setCurrentPage(currentPage + 1)}>
            Next Page
          </button>
        </div>
      )}

      <ReactQuill value={content} onChange={handleContentChange} />
    </div>
  );
};

export default App;
