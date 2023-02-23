# Work-in-progress

<!-- ABOUT THE PROJECT -->

## About The Project

This is a simple RESTful API. Initially thought of making a blog, but we'll see where this goes.
Take a look the the [ERD](https://prismaliser.app?code=Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIC8vIFRoaXMgaXMgdGhlIHByaW1hcnkga2V5CiAgbmFtZSAgICAgICAgICAgU3RyaW5nCiAgYWdlICAgICAgICAgICAgSW50CiAgZW1haWwgICAgICAgICAgU3RyaW5nICAgICAgICAgIEB1bmlxdWUKICByb2xlICAgICAgICAgICBSb2xlICAgICAgICAgICAgQGRlZmF1bHQoVVNFUikKICB3cml0dGVuUG9zdHMgICBQb3N0W10gICAgICAgICAgQHJlbGF0aW9uKCJXcml0dGVuUG9zdHMiKSAvLyBUaGlzIGlzIHRoZSBjdXN0b20gcmVsYXRpb24gYmV0d2VlbiBhIHVzZXIgYW5kIHRoZSBwb3N0cyB0aGV5IGhhdmUgd3JpdHRlbiAob25lLXRvLW1hbnkpCiAgZmF2b3VyaXRlUG9zdHMgUG9zdFtdICAgICAgICAgIEByZWxhdGlvbigiRmF2b3VyaXRlUG9zdHMiKQogIHVzZXJQcmVmZXJlbmNlIFVzZXJQcmVmZXJlbmNlPyAvLyBUaGlzIGlzIHRoZSBvcHRpb25hbCByZWxhdGlvbiBiZXR3ZWVuIGEgdXNlciBhbmQgdGhlaXIgcHJlZmVyZW5jZXMgKG9uZS10by1vbmUpCgogIEBAdW5pcXVlKFtuYW1lLCBhZ2VdKSAvLyBpZiBhIHVzZXIgaGFzIHRoZSBzYW1lIG5hbWUgYW5kIGFnZSwgdGhleSBhcmUgdGhlIHNhbWUgdXNlciwgYW5kIHRoZXJlZm9yZSBpdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cnkgdG8gY3JlYXRlIGFub3RoZXIgdXNlciB3aXRoIHRoZSBzYW1lIG5hbWUgYW5kIGFnZQogIEBAaW5kZXgoW2VtYWlsXSkKfQoKbW9kZWwgVXNlclByZWZlcmVuY2UgewogIGlkICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgZW1haWxVcGRhdGVzIEJvb2xlYW4KICB1c2VyICAgICAgICAgVXNlciAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkgLy8gVGhpcyBpcyB0aGUgcmVsYXRpb24gYmV0d2VlbiBhIHVzZXIgYW5kIHRoZWlyIHByZWZlcmVuY2VzIChvbmUtdG8tb25lKQogIHVzZXJJZCAgICAgICBTdHJpbmcgIEB1bmlxdWUgLy8gVGhpcyBpcyB0aGUgdW5pcXVlIGNvbnN0cmFpbnQgYmVjYXVzZSBhIHVzZXIgY2FuIG9ubHkgaGF2ZSBvbmUgc2V0IG9mIHByZWZlcmVuY2VzCn0KCm1vZGVsIFBvc3QgewogIGlkICAgICAgICAgICAgIFN0cmluZyAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjcmVhdGVkQXQgICAgICBEYXRlVGltZSAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lICAgQHVwZGF0ZWRBdAogIHRpdGxlICAgICAgICAgIFN0cmluZwogIGF2ZXJhZ2VSYXRpbmcgIEZsb2F0CiAgYXV0aG9yICAgICAgICAgVXNlciAgICAgICBAcmVsYXRpb24oIldyaXR0ZW5Qb3N0cyIsIGZpZWxkczogW2F1dGhvcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBhdXRob3JJZCAgICAgICBTdHJpbmcKICBmYXZvdXJpdGVkQnkgICBVc2VyPyAgICAgIEByZWxhdGlvbigiRmF2b3VyaXRlUG9zdHMiLCBmaWVsZHM6IFtmYXZvdXJpdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZmF2b3VyaXRlZEJ5SWQgU3RyaW5nPwogIGNhdGVnb3JpZXMgICAgIENhdGVnb3J5W10gLy8gVGhpcyBpcyB0aGUgcmVsYXRpb24gYmV0d2VlbiBhIHBvc3QgYW5kIHRoZSBjYXRlZ29yaWVzIGl0IGJlbG9uZ3MgdG8gKG1hbnktdG8tbWFueSkKfQoKbW9kZWwgQ2F0ZWdvcnkgewogIGlkICAgIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgIFN0cmluZyBAdW5pcXVlCiAgcG9zdHMgUG9zdFtdIC8vIFRoaXMgaXMgdGhlIHJlbGF0aW9uIGJldHdlZW4gYSBjYXRlZ29yeSBhbmQgdGhlIHBvc3RzIGl0IGJlbG9uZ3MgdG8gKG1hbnktdG8tbWFueSkKfQoKZW51bSBSb2xlIHsKICBVU0VSCiAgQURNSU4KfQo%3D)

## Tech Stack

- [Node.js](https://nodejs.org/en/) - An open-source, cross-platform JavaScript runtime environment.
- [Typescript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript
- [Fastify](https://www.fastify.io/) - Fast and low overhead web framework, for Node.js
- [PostgreSQL](https://www.postgresql.org/) - A powerful, open source object-relational database
- [Prisma ORM](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- [pNPM](https://pnpm.io/) - Fast, disk space efficient package manager

<!-- LIVE DEMO -->

## Live Demo

Not yet live 🥲

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- pNPM package manager (But you can use whichever you prefer)

If you are wondering why pnpm, take a look at this [article](https://www.atatus.com/blog/npm-vs-yarn-vs-pnpm/)

### Installation

1. Clone the repo 🌀

   ```sh
   git clone https://github.com/shyakadavis/fastify-api.git
   ```

2. Install packages 📦.

   ```sh
   pnpm install
   ```

3. Rename the `.env.example` file to `.env` and add the relevant keys

4. Start your local development server

   ```sh
   pnpm dev
   ```

<!-- CONTRIBUTING -->

## Contributing

To make contributions...

1. Clone the repo
1. Create your Feature Branch (`git checkout -b ft-some-feature`)
1. Commit your Changes (`git commit -m 'ft: add some feature'`)
1. Push to the Branch (`git push origin ft-some-feature`)
1. Open a Pull Request

<!-- LICENSE -->

## License

MIT

<!-- CONTACT -->

## Contact

I don't have a twitter account, yet 🥲
