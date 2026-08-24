const cvHtmlTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${data.name} - ${data.targetRole}</title>
  <style>
    @page {
      size: A4;
      margin: 0.35in 0.45in;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      line-height: 1.28;
      font-size: 8.7pt;
      background: #ffffff;
    }
    .header {
      text-align: center;
      margin-bottom: 7px;
    }
    .header h1 {
      font-size: 16pt;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #0f172a;
      margin-bottom: 2px;
      line-height: 1.1;
    }
    .header .subtitle {
      font-size: 8.8pt;
      font-weight: 600;
      color: #2563eb;
      margin-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }
    .header .contact {
      font-size: 8.4pt;
      color: #334155;
    }
    .header .contact a {
      color: #1d4ed8;
      text-decoration: none;
    }
    .section {
      margin-bottom: 6px;
    }
    .section-title {
      font-size: 9.2pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #0f172a;
      border-bottom: 1.2px solid #0f172a;
      padding-bottom: 1px;
      margin-bottom: 4px;
    }
    .summary-text {
      text-align: justify;
      color: #1e293b;
      font-size: 8.3pt;
      line-height: 1.26;
    }
    .skills-grid {
      display: table;
      width: 100%;
      font-size: 8.3pt;
      line-height: 1.26;
    }
    .skill-row {
      display: table-row;
    }
    .skill-category {
      display: table-cell;
      font-weight: 700;
      color: #0f172a;
      width: 155px;
      padding-bottom: 1.5px;
      white-space: nowrap;
    }
    .skill-list {
      display: table-cell;
      color: #334155;
      padding-bottom: 1.5px;
    }
    .item {
      margin-bottom: 4px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1px;
    }
    .item-title {
      font-weight: 700;
      font-size: 8.7pt;
      color: #0f172a;
    }
    .item-tech {
      font-style: italic;
      font-weight: 500;
      color: #475569;
      font-size: 8.2pt;
    }
    .item-links {
      font-size: 7.8pt;
      color: #1d4ed8;
      margin-top: -1px;
      margin-bottom: 2px;
    }
    .item-links a {
      color: #1d4ed8;
      text-decoration: underline;
    }
    .item-date {
      font-weight: 600;
      font-size: 8.2pt;
      color: #475569;
      white-space: nowrap;
    }
    .item-subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 8.3pt;
      font-style: italic;
      color: #334155;
      margin-bottom: 1px;
    }
    ul {
      margin-left: 14px;
      margin-top: 1px;
    }
    li {
      margin-bottom: 1.2px;
      color: #1e293b;
      font-size: 8.3pt;
      line-height: 1.25;
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

</body>
</html>
`;

module.exports = { cvHtmlTemplate };
