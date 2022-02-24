const { jsPDF } = window.jspdf;


function createPdf(data) {
  const doc = new jsPDF();
  const headerFont = 25;
  const secFont = 14;
  const normalFont = 12;
  const lineH = 10;

  const currentLine = 20;

  // header

  doc.setFontSize(headerFont);
  doc.setFont('helvetica', 'bold');
  doc.text(data.fullName, 15, 20);

  // contact info

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(normalFont);
  doc.text(data.email, 15, 30);
  doc.textWithLink(data.linkedin, 15, 40, { url: data.linkedin });
  doc.text(data.phone, 130, 30);
  doc.textWithLink(data.website, 130, 40, { url: data.website });

  // summary

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(secFont);
  doc.text('Summary', 15, 50);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(normalFont);
  const textLines = doc.splitTextToSize(data.summary, 180);
  doc.text(textLines, 15, 60);

  // exp

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(secFont);
  let line = 50 + lineH * textLines.length;
  doc.text('Experience', 15, line);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(normalFont);
  doc.text(data['exp-list'], 15, (line += lineH));

  // education

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(secFont);
  line = line + lineH * data['exp-list'].length;
  doc.text('Education', 15, line);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(normalFont);
  doc.text(data['edu-list'], 15, (line += lineH));

  // cert

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(secFont);
  line = line + lineH * data['edu-list'].length;
  doc.text('Certificates', 15, line);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(normalFont);
  doc.text(data['cert-list'], 15, (line += lineH));

  // skills

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(secFont);
  line = line + lineH * data['cert-list'].length;
  doc.text('Skills', 15, line);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(normalFont);
  doc.text(data['skill-list'].join(', '), 15, (line += lineH));

  return doc;
}


const cleanData = (dirty) => {
  return DOMPurify.sanitize(dirty, { ALLOWED_TAGS: [] });
};




