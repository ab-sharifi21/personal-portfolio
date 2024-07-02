export function Tooltip({ message, children }: any) {
    return (
    <div className="group relative flex">
        {children}
        <span className="absolute top-4 right-0 scale-0 transition-all rounded bg-skill-bg-color dark:bg-dark-secondary-bg-color p-2 text-xs  group-hover:scale-100">{message}</span>
    </div>
    )
}