import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Alfa Rizi — Junior Backend Developer & Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0E14',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 99, 71, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(30, 144, 255, 0.05) 0%, transparent 50%)',
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 100px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}
          >
            Alfa Rizi
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 36,
              color: '#FF6347',
              marginBottom: 48,
              fontWeight: 500,
            }}
          >
            Junior Backend Developer · Software Engineer
          </div>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              justifyContent: 'center',
              maxWidth: 900,
            }}
          >
            {['Java Spring Boot', 'React', 'PostgreSQL', 'Microservices', 'Docker', 'AI/RAG'].map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: 'rgba(255, 99, 71, 0.1)',
                  border: '1px solid rgba(255, 99, 71, 0.3)',
                  borderRadius: 24,
                  padding: '12px 24px',
                  fontSize: 20,
                  color: '#E0E0E0',
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div
            style={{
              marginTop: 64,
              fontSize: 24,
              color: '#888888',
              fontWeight: 400,
            }}
          >
            alfarizi.my.id
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
