import React from 'react';
import { BiLogoTwitter, BiLogoGithub, BiLogoDiscordAlt } from 'react-icons/bi';
function Footer() {
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
    {
      title: 'Manage analytics',
      href: '/staking/',
    },
  ];
  return (
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
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <a href="https://twitter.com/aaveaave?s=11&t=ZixFmUt1SIHLEMvx18gUGw">
          <BiLogoTwitter size={27} />
        </a>
        <a href="https://github.com/aave">
          <BiLogoGithub size={27} />
        </a>
        <a href="https://discord.com/invite/aave">
          <BiLogoDiscordAlt size={27} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
