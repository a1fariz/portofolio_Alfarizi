const cvHtmlTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${data.name} - ${data.targetRole}</title>
  <style>
    @page {
      size: A4;
      margin: 0.28in 0.42in;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      line-height: 1.22;
      font-size: 8.3pt;
      background: #ffffff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .header {
      text-align: center;
      margin-bottom: 5px;
    }
    .header h1 {
      font-size: 15pt;
      font-weight: 700;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      color: #0f172a;
      margin-bottom: 1.5px;
      line-height: 1.1;
    }
    .header .subtitle {
      font-size: 8.5pt;
      font-weight: 600;
      color: #2563eb;
      margin-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }
    .header .contact {
      font-size: 8.1pt;
      color: #334155;
    }
    .header .contact a {
      color: #1d4ed8;
      text-decoration: none;
    }
    .section {
      margin-bottom: 4.5px;
    }
    .section-title {
      font-size: 8.8pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: #0f172a;
      border-bottom: 1.2px solid #0f172a;
      padding-bottom: 1px;
      margin-bottom: 3px;
    }
    .summary-text {
      text-align: justify;
      color: #1e293b;
      font-size: 8.0pt;
      line-height: 1.22;
    }
    .skills-grid {
      display: table;
      width: 100%;
      font-size: 8.0pt;
      line-height: 1.22;
    }
    .skill-row {
      display: table-row;
    }
    .skill-category {
      display: table-cell;
      font-weight: 700;
      color: #0f172a;
      width: 155px;
      padding-bottom: 1px;
      white-space: nowrap;
    }
    .skill-list {
      display: table-cell;
      color: #334155;
      padding-bottom: 1px;
    }
    .item {
      margin-bottom: 3px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.5px;
    }
    .item-title {
      font-weight: 700;
      font-size: 8.4pt;
      color: #0f172a;
    }
    .item-tech {
      font-style: italic;
      font-weight: 500;
      color: #475569;
      font-size: 7.9pt;
    }
    .item-links {
      font-size: 7.6pt;
      color: #1d4ed8;
      margin-top: -0.5px;
      margin-bottom: 1px;
    }
    .item-links a {
      color: #1d4ed8;
      text-decoration: underline;
    }
    .item-date {
      font-weight: 600;
      font-size: 8.0pt;
      color: #475569;
      white-space: nowrap;
    }
    .item-subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 8.0pt;
      font-style: italic;
      color: #334155;
      margin-bottom: 0.5px;
    }
    ul {
      margin-left: 13px;
      margin-top: 0.5px;
    }
    li {
      margin-bottom: 0.5px;
      color: #1e293b;
      font-size: 8.0pt;
      line-height: 1.21;
    }
    .cert-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 16px;
      row-gap: 1.5px;
      margin-top: 1px;
    }
    .cert-item {
      font-size: 7.9pt;
      color: #1e293b;
      line-height: 1.22;
    }
    .cert-title {
      font-weight: 600;
      color: #0f172a;
    }
    .cert-issuer {
      color: #475569;
    }
    .cert-year {
      color: #64748b;
      font-size: 7.5pt;
    }
  </style>
</head>
<body>

  <div class="header">
    <h1>${data.name}</h1>
    <div class="subtitle">${data.targetRole}</div>
    <div class="contact">
      ${data.location} | <a href="mailto:${data.email}">${data.email}</a> | 
      <a href="${data.github}">github.com/a1fariz</a> | 
      <a href="${data.portfolio}">alfarizi.my.id</a>
    </div>
  </div>

  <div class="section">
    <div class="section-title">${data.labels.summary}</div>
    <div class="summary-text">${data.summary}</div>
  </div>

  <div class="section">
    <div class="section-title">${data.labels.skills}</div>
    <div class="skills-grid">
      ${data.skills.map(s => `
        <div class="skill-row">
          <div class="skill-category">${s.category}:</div>
          <div class="skill-list">${s.items}</div>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="section">
    <div class="section-title">${data.labels.projects}</div>
    ${data.projects.map(p => `
      <div class="item">
        <div class="item-header">
          <div>
            <span class="item-title">${p.title}</span>
            ${p.tech ? `<span class="item-tech"> | ${p.tech}</span>` : ''}
          </div>
          <span class="item-date">${p.year}</span>
        </div>
        ${p.demo || p.github ? `
          <div class="item-links">
            ${p.demo ? `Demo: <a href="${p.demo}">${p.demo}</a>` : ''}
            ${p.demo && p.github ? ` | ` : ''}
            ${p.github ? `Code: <a href="${p.github}">${p.github.replace('https://', '')}</a>` : ''}
          </div>
        ` : ''}
        <ul>
          ${p.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">${data.labels.experience}</div>
    ${data.experience.map(e => `
      <div class="item">
        <div class="item-header">
          <span class="item-title">${e.role}</span>
          <span class="item-date">${e.period}</span>
        </div>
        <div class="item-subtitle">
          <span>${e.company}</span>
          <span>${e.location}</span>
        </div>
        <ul>
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">${data.labels.education}</div>
    ${data.education.map(edu => `
      <div class="item">
        <div class="item-header">
          <span class="item-title">${edu.institution}</span>
          <span class="item-date">${edu.period}</span>
        </div>
        <div class="item-subtitle">
          <span>${edu.degree}</span>
          <span>${edu.location}</span>
        </div>
        ${edu.bullets && edu.bullets.length ? `
          <ul>
            ${edu.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('')}
  </div>

  ${data.certifications && data.certifications.length ? `
  <div class="section">
    <div class="section-title">${data.labels.certifications}</div>
    <div class="cert-grid">
      ${data.certifications.map(c => `
        <div class="cert-item">
          <span class="cert-title">${c.title}</span> — <span class="cert-issuer">${c.issuer}</span> <span class="cert-year">(${c.year})</span>
        </div>
      `).join('')}
    </div>
  </div>
  ` : ''}

</body>
</html>
`;

module.exports = { cvHtmlTemplate };
