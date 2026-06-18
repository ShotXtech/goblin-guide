export default function GoblinCard({
    children,
    className = "",
    variant = "default",
    size = "normal",
}) {
    const variants = {
        default: "border-[#98A8D8]/30 bg-[#0f172a]/60",
        warm: "border-[#F4A59E]/30 bg-[#241a28]/60",
        danger: "border-red-400/20 bg-red-950/20",
        success: "border-emerald-400/20 bg-emerald-950/20",
    };

    const sizes = {
        normal: "rounded-3xl p-6",
        compact: "rounded-2xl p-5",
    };

    return (
        <div
            className={`border ${variants[variant] || variants.default} ${sizes[size] || sizes.normal} ${className}`}
        >
            {children}
        </div>
    );
}