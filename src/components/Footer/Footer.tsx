import React, { useState } from 'react';
import { BiLogoTwitter, BiLogoGithub, BiLogoDiscordAlt } from 'react-icons/bi';
function Footer() {
  const [IsAnalytics, setIsAnalytics] = useState(false);
  const links = [
    {
      title: 'Terms',
      href: 'https://aave.com/term-of-use/',
    },
    {
      title: 'Privacy',
      href: 'https://aave.com/privacy-policy/',
    },
    {
      title: 'Docs',
      href: 'https://docs.aave.com/hub/',
    },
    {
      title: 'FAQs',
      href: 'https://docs.aave.com/faq/',
    },
    {
      title: 'Send Feedback ',
      href: 'https://discord.com/invite/7kHKnkDEUf',
    },
  ];
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#A5A8B6',
          fontSize: '0.775rem',
          flexWrap: 'wrap',
          padding: '20px 22px',
          border: '1px solid #0000000a',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {links.map((link, index: number) => (
            <>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={index}
                style={{ color: '#A5A8B6', textDecoration: 'none' }}
              >
                <p>{link.title}</p>
              </a>
            </>
          ))}
          <>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: '#A5A8B6', textDecoration: 'none' }}
              onClick={() => setIsAnalytics(true)}
            >
              <p>Manage analytics</p>
            </a>
          </>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a
            href="https://twitter.com/aaveaave?s=11&t=ZixFmUt1SIHLEMvx18gUGw"
            style={{ color: '#A5A8B6', textDecoration: 'none' }}
          >
            <BiLogoTwitter size={27} />
          </a>
          <a href="https://github.com/aave" style={{ color: '#A5A8B6', textDecoration: 'none' }}>
            <BiLogoGithub size={27} />
          </a>
          <a
            href="https://discord.com/invite/aave"
            style={{ color: '#A5A8B6', textDecoration: 'none' }}
          >
            <BiLogoDiscordAlt size={27} />
          </a>
        </div>
      </div>
      {IsAnalytics && (
        <div
          className="CookieConsent"
          style={{
            background: 'rgb(255, 255, 255)',
            bottom: 0,
            right: 24,
            left: 'auto',
            position: 'fixed',
            width: 400,
            gap: 16,
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgb(48, 53, 73)',
            marginBottom: 16,
            fontSize: 14,
            lineHeight: '20.02px',
            padding: 16,
            zIndex: 100,
            borderRadius: 12,
            border: '0.5px solid rgba(235, 235, 239, 0.42)',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px',
            transition: 'transform 0.5s ease-out 0s',
            transform: 'none',
          }}
        >
          <div>
            <div className="MuiBox-root css-0">
              We may employ on-the-spot tracking techniques during your browsing session to collect
              data on your interactions, preferences, and behaviour. This data helps us personalise
              your experience and improve our services. See our
              <a
                href="https://aave.com/privacy-policy/"
                target="_blank"
                style={{ color: '#0062D2' }}
              >
                &nbsp;Privacy Policy.
              </a>
            </div>
          </div>
          <div style={{ gap: '15px', display: 'flex' }}>
            <button
              style={{
                background: 'rgb(56, 61, 81)',
                color: 'rgb(247, 247, 249)',
                fontSize: 14,
                borderRadius: 4,
                margin: 0,
                border: '1px solid rgb(0, 0, 0)',
                width: 172,
                fontWeight: 700,
                cursor: 'pointer',
              }}
              onClick={() => setIsAnalytics(false)}
            >
              <p className="MuiTypography-root MuiTypography-description css-1nkijli">
                Allow analytics{' '}
              </p>
            </button>
            <button
              style={{
                background: 'rgb(247, 247, 249)',
                color: 'rgb(56, 61, 81)',
                fontSize: 14,
                borderRadius: 4,
                margin: 0,
                border: '1px solid rgb(0, 0, 0)',
                width: 172,
                fontWeight: 700,
                cursor: 'pointer',
              }}
              onClick={() => setIsAnalytics(false)}
            >
              <p className="MuiTypography-root MuiTypography-description css-1nkijli">Opt-out </p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
