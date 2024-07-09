interface MusicContainerProps {
  children: React.ReactNode,
  className: string
}

// wrapping children in a client component for more interactive ux
export default function MusicContainer({ children, className }: MusicContainerProps) {

  return (
    <div id="music-page"
      className={`${className}`}>
      {children}
    </div>
  )
}