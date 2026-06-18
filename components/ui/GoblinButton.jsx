export default function GoblinButton({
    children,
    onClick,
    type = "button",
    variant = "default",
    className = "",
}) {
    const baseStyles =
        "border transition disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        default:
            "rounded-xl px-4 py-2 text-sm border-white/20 text-[#C9D3F0]/80 hover:bg-white/10",

        primary:
            "rounded-xl px-4 py-2 text-sm border-[#F4A59E]/40 bg-[#241a28]/70 text-[#F7D8D2] hover:bg-[#2f2035]",

        danger:
            "rounded-xl px-4 py-2 text-sm border-red-400/30 bg-red-950/20 text-red-200 hover:bg-red-950/35",

        cta:
            "rounded-2xl px-6 py-4 text-base font-bold border-[#F4A59E]/40 bg-[#4C548F]/50 text-[#F7F4EE] shadow-[0_0_30px_rgba(152,168,216,0.18)] hover:-translate-y-1 hover:bg-[#4C548F]/70",

    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
        >
            {children}
        </button>
    );
}