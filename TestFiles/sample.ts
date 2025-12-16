
// TypeScript Sample
interface User {
    id: number;
    name: string;
    role: 'admin' | 'user';
}

function greeting(user: User): string {
    return `Hello, ${user.name}! You are an ${user.role}.`;
}

const currentUser: User = {
    id: 1,
    name: "CodeGlimpse User",
    role: "admin"
};

console.log(greeting(currentUser));
