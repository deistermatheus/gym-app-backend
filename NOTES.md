1. Configure npmrc to use exact versions
2. Parse safely with Zod to avoid leaking process.ENV everywhere
3. Use path aliasing in tsconfig to avoid long relative directory chains (../../../)
4. Use .gitattributes to set EOL config for projec only
5. UUID insted of auto-increment may stop scanning sequentially (check app requirements)
6. Prisma does a lot of the heavy lifting (PK-relationship generation)
7. Dependency inversion helps with testing and isolating logic between Controllers, Use Cases (inject prisma)
