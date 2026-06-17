export default function GoblinButton({
    children,
    onClick,
    type = "button",
    variant = "default",
    className = "",
}) {
    const variants = {
        default:
            "rounded-xl border-white/20 text-[#C9D3F0]/80 hover:bg-white/10",
        primary:
            "rounded-xl border-[#F4A59E]/40 bg-[#241a28]/70 text-[#F7D8D2] hover:bg-[#2f2035]",
        danger:
            "rounded-xl border-red-400/30 bg-red-950/20 text-red-200 hover:bg-red-950/35",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`border px-4 py-2 text-sm transition ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}