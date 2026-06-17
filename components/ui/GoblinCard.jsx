export default function GoblinCard({
    children,
    className = "",
    variant = "default",
}) {
    const variants = {
        default: "border-[#98A8D8]/30 bg-[#0f172a]/60",
        warm: "border-[#F4A59E]/30 bg-[#241a28]/60",
        danger: "border-red-400/20 bg-red-950/20",
        success: "border-emerald-400/20 bg-emerald-950/20",
    };

    return (
        <div
            className={`rounded-3xl border p-6 ${variants[variant]} ${className}`}
        >
            {children}
        </div>
    );
}