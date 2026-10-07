function Tag({ children }) {
    return (
        <li className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink-2">
            {children}
        </li>
    );
}

export default Tag;
