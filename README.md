# Bug Report: Redirects Not Working Correctly with Middleware in Next.js

## Description
When redirects are set up in the `next.config.js` file, they work as expected. However, if a `middleware.ts` file is added to the project, clicking a link with a redirect will navigate the user to the page without any properties.

## Steps to Reproduce
1. Set up redirects in the `next.config.js` file.
2. Confirm that the redirects are working as expected.
3. Add a `middleware.ts` file to the project.
4. Click a link that should trigger a redirect.

## Expected Result
The user should be redirected to the intended page with all the expected properties.

## Actual Result
The user is redirected to the page, but it's rendered without any properties.

## Additional Information
- Next.js version: 13.5.3
- Node.js version: 18.14.2
