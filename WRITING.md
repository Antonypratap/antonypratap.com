# Updating the website without Claude

Everything on the site is plain text files in this repository. Edit a file on GitHub, commit,
and Cloudflare Pages rebuilds and publishes the site in about two minutes.

## Publish a new article

1. On github.com, open this repository, then the folder `src/content/insights/`.
2. Open `_template.md`, click the **copy** icon (Copy raw file), then go back to the folder.
3. Click **Add file → Create new file**. Name it like `my-article-title.md` (lowercase, hyphens).
4. Paste the template, fill in the fields and write the article. Delete the instruction comments.
5. Click **Commit changes**. Done: it is live in about two minutes.

If the build fails (for example a description that is too long), Cloudflare keeps the previous
version online and shows the reason in **Workers & Pages → antonypratap → Deployments**.

## Edit an existing page

| What | File |
|---|---|
| Articles | `src/content/insights/<name>.md` |
| Projects | `src/content/projects/<name>.md` (template: `_template.md`) |
| Services | `src/content/services/<name>.md` |
| Country pages | `src/content/markets/uae.md`, `new-zealand.md` |
| Home page text | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |

Open the file, click the **pencil** icon, edit, then **Commit changes**.

## Unpublish an article

Add `draft: true` to its fields and commit. Remove the line to publish it again.

## Rules that keep the site credible

- Never use a confidential client's real name. Use the pseudonym already on the site.
- Describe only what is implemented and tested; mark work in progress as such.
- No invented figures, testimonials or logos.
