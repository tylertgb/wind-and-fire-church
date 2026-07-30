import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Wind and Fire Church Assemblies of God - Tamale, Ghana';
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
          background: 'linear-gradient(135deg, #1a0a0a 0%, #3a0d0d 50%, #1a0a0a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative background circles */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)',
            top: '-200px',
            right: '-200px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
            bottom: '-150px',
            left: '-150px',
          }}
        />

        {/* Logo - Flame Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, oklch(0.52 0.22 28) 0%, #ea580c 100%)',
            boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.5)',
            marginBottom: '40px',
          }}
        >
          {/* Flame SVG */}
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </svg>
        </div>

        {/* Church Name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            Wind & Fire
          </h1>
          <div
            style={{
              fontSize: '22px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Assemblies of God
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '20px',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: '1.4',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Experience the Power of Worship & Revival
        </div>

        {/* Location */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Tamale, Ghana</span>
        </div>

        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '8px',
            background: 'linear-gradient(90deg, oklch(0.52 0.22 28) 0%, #ea580c 50%, oklch(0.56 0.18 250) 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
