export default function GoblinTextarea({
    value,
    onChange,
    placeholder = "",
    className = "",
    rows = 5,
    ...props
}) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={`w-full rounded-2xl border border-[#98A8D8]/30 bg-[#0f172a]/70 px-4 py-3 text-[#F7F4EE] placeholder:text-[#C9D3F0]/40 focus:outline-none focus:ring-2 focus:ring-[#98A8D8]/40 ${className}`}
            {...props}
        />
    );
}