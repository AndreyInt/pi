export namespace utils {
    export function findAllOverlapping(str: string, sub: string): string[] {
        const pattern = new RegExp(`(?=(${escapeRegex(sub)}))`, 'g');
        const result: string[] = [];
        let match;
        while ((match = pattern.exec(str)) !== null) {
            result.push(match[1]);
        }
        return result;
    }

// Экранируем специальные символы, если нужно искать что-то типа "+", "*", "." и т.п.
    function escapeRegex(s: string): string {
        return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}