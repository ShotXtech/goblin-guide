export default function GoblinSelect({
    value,
    onChange,
    children,
    className = "",
    ...props
}) {
    const baseStyles =
        "w-full rounded-2xl border border-[#98A8D8]/30 bg-[#0f172a]/70 px-4 py-3 text-[#F7F4EE] focus:outline-none focus:ring-2 focus:ring-[#98A8D8]/40";

    return (
        <select
            value={value}
            onChange={onChange}
            className={`${baseStyles} ${className}`}
            {...props}
        >
            {children}
        </select>
    );
}