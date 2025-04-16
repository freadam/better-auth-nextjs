# Better Auth Starter with Next.js and Prisma

A complete authentication solution using Better Auth, Next.js, and Prisma.

## Features

- 🔐 Complete authentication system
- 📧 Email/Password authentication
- 🔑 Social authentication (Google, GitHub, etc.)
- 🎯 Type-safe with TypeScript
- 🚀 Server Actions support
- 📱 Responsive design
- 🔄 Session management
- 🛡️ CSRF protection

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database

## Installation

1. **Create a new Next.js project**

```bash
git clone https://github.com/Kinfe123/better-auth-nextjs
cd better-auth-nextjs
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Env variables**

```bash
mv .env.example .env
```

4. **Run dev server**

```bash
pnpm dev
```

## Troubleshooting

Common issues and solutions:

1. **Database Connection Issues**

   - Verify your DATABASE_URL in .env
   - Ensure PostgreSQL is running
   - Check database permissions

2. **Authentication Errors**

   - Verify AUTH_SECRET is set
   - Check social provider credentials
   - Ensure proper CORS configuration

3. **Session Issues**
   - Check cookie settings
   - Verify nextCookies plugin is enabled
   - Ensure proper redirect handling

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
