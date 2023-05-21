1. Configure npmrc to use exact versions
2. Parse safely with Zod to avoid leaking process.ENV everywhere
3. Use path aliasing in tsconfig to avoid long relative directory chains (../../../)
4. Use .gitattributes to set EOL config for projec only
