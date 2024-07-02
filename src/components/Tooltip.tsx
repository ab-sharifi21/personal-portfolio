export function Tooltip({ message, children, styles }: any) {
    return (
    <div className="group relative flex">
        {children}
        <span className={`absolute ${styles} scale-0 transition-all rounded bg-skill-bg-color dark:bg-dark-secondary-bg-color p-2 text-xs  group-hover:scale-100`}>{message}</span>
    </div>
    )
}