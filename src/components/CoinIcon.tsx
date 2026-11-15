import type { CryptoAsset } from '../types';

interface CoinIconProps {
  symbol: CryptoAsset;
  size?: number;
}

export function CoinIcon({ symbol, size = 24 }: CoinIconProps) {
  if (symbol === 'BTC') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#F7931A" />
        <path
          d="M21.9 14.2c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.7-.4-.6 2.6-1.3-.3.6-2.6-1.7-.4-.7 2.7-1-.2-2.2-.6-.4 1.8s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.2-.2.8-1.1 4.4c-.1.2-.3.6-.8.4 0 0-1.2-.3-1.2-.3l-.8 1.9 2.1.5 1.2.3-.7 2.7 1.7.4.7-2.7 1.3.3-.7 2.7 1.7.4.7-2.7c2.9.5 5-.3 5.9-2.3.7-2-.1-3.2-1.5-4 1-.3 1.8-1 2-2.5zm-3.6 5c-.5 2-3.9.9-5 .6l.9-3.6c1.1.3 4.6.8 4.1 3zm.5-5.1c-.5 1.8-3.3.9-4.2.7l.8-3.2c.9.2 3.9.7 3.4 2.5z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (symbol === 'XMR') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#FF6600" />
        <path
          d="M6.5 21.5h3.9v-8.8l5.6 5.6 5.6-5.6v8.8h3.9v1.8h-6.6v-5.7l-2.9 2.9-2.9-2.9v5.7H6.5v-1.8z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (symbol === 'ETH') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#627EEA" />
        <path d="M16 5.5L9.8 15.8 16 19.5l6.2-3.7L16 5.5z" fill="#FFFFFF" fillOpacity="0.95" />
        <path d="M16 20.8l-6.2-3.7L16 26.5l6.2-9.4-6.2 3.7z" fill="#FFFFFF" fillOpacity="0.78" />
      </svg>
    );
  }

  if (symbol === 'USDT') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#26A17B" />
        <path
          d="M17.8 17.2v-.1c-.1 0-.7.1-1.8.1s-1.6-.1-1.8-.1v.1c-3.3-.2-5.7-.8-5.7-1.5s2.4-1.3 5.7-1.5v2.4c.2 0 .9.1 1.8.1s1.6-.1 1.8-.1v-2.4c3.3.2 5.7.8 5.7 1.5s-2.4 1.3-5.7 1.5zm0-3.3v-2.1h4.6V8.5H9.6v3.3h4.6v2.1c-3.7.2-6.5.9-6.5 1.8s2.8 1.6 6.5 1.8v6.3h3.6v-6.3c3.7-.2 6.5-.9 6.5-1.8s-2.8-1.6-6.5-1.8z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (symbol === 'LTC') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#345D9D" />
        <path
          d="M13.6 21l.9-3.3 2.1-.8.5-1.9-2.1.8 1.5-5.6h-3.4l-2 7.3-1.6.6-.5 1.9 1.6-.6-.9 3.4h9.6l.6-2.2-6.3.4z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (symbol === 'SOL') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#181F26" />
        <path d="M9.5 19.8h10.8l2.2-2.2H11.7l-2.2 2.2z" fill="#14F195" />
        <path d="M9.5 12.2h10.8l2.2-2.2H11.7l-2.2 2.2z" fill="#00C2FF" />
        <path d="M22.5 16H11.7l-2.2-2.2h10.8L22.5 16z" fill="#9945FF" />
      </svg>
    );
  }

  // USDC
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#2775CA" />
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="13"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        $
      </text>
    </svg>
  );
}
