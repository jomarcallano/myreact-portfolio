// Stub for next/navigation to prevent Vite build errors
// This is needed because @vercel/analytics includes Next.js exports
// that Vite tries to bundle even though we're only using the React export
export const useParams = () => ({});
export const usePathname = () => '';
export const useSearchParams = () => new URLSearchParams();
