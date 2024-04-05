

export interface User {
    language: string;
}

export function buildUser(language: string): User {
    return {
        language,
    }
}