const SideProjectIcon = ({ size = 24 }: { size?: number }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon"
        >
            <path d="M21 13a2 2 0 1 1 0-4h-3V5a2 2 0 0 0-2-2h-3a2 2 0 1 1-4 0H5a2 2 0 0 0-2 2v3a2 2 0 1 1 0 4v3a2 2 0 0 0 2 2h3a2 2 0 1 1 4 0h3a2 2 0 0 0 2-2v-3h3z" />
        </svg>
    )
}
export default SideProjectIcon
