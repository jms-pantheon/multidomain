import React from 'react';

export default function App() {
  const getDomainInfo = () => {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');

    // Basic handling for "subdomain.domain.tld" or "domain.tld"
    let subdomain = parts.length > 2 ? parts[0] : 'No subdomain';
    let domain = parts.length > 2 ? parts[1] : parts[0];
    let tld = parts.length > 2 ? parts[2] : parts[1];

    // More complex scenarios might need additional handling
    return { subdomain, domain, tld };
  };

  const { subdomain, domain, tld } = getDomainInfo();

  return (
    <div>
      <h1>Current Site Information</h1>
      <p>Subdomain: {subdomain}</p>
      <p>Domain: {domain}</p>
      <p>Top-Level Domain (TLD): {tld}</p>
    </div>
  );
}
