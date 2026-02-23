# Contributing to Patchwork Library

First off, thank you for considering contributing to Patchwork Library! 🎉

This project is designed to help aspiring developers practice collaborative coding. Whether you're making your first open source contribution or you're an experienced developer, we're excited to have you here!

## 🧩 About Issue Structure: One Problem Per Issue

**Please note:** In this repository, you may notice that multiple issues are opened for similar or related problems (for example, each broken navigation link will have its own issue, rather than grouping all broken links together).

**Why?**

- This approach gives more people a chance to practice fixing similar bugs.
- It allows multiple contributors to work in parallel and learn from the same type of problem.
- It helps you focus on a single, well-defined task for your pull request.

**What does this mean for you as a contributor?**

- **Only fix what is requested in your assigned issue.**
- Do not fix related or similar problems that are not described in your issue, even if you notice them in the codebase.
- If you spot another instance of the same bug, open a new issue for it (unless one already exists) so someone else can work on it.

This is intentional and part of the learning experience! Thank you for helping us create more opportunities for everyone to practice and contribute.

## 🎯 The Learning Philosophy

**⚠️ IMPORTANT: This project intentionally contains bugs, broken features, and deliberate mistakes!**

This isn't your typical open source project. We don't believe in just reading tutorials - we believe in **learning by debugging, fixing, and building**. This repository is a sandbox where:

- **Bugs exist on purpose** - Broken links, layout issues, styling problems, logic errors are deliberately added
- **Features are incomplete** - Search missing? Filters broken? That's the point!
- **Code needs improvement** - Find inefficiencies, add error handling, enhance accessibility
- **Tests could be better** - Coverage gaps are learning opportunities

So if you find something broken, weird, or missing - **that's intentional!** It's not a mistake; it's your chance to:

- Practice debugging skills
- Learn how to write fixes and tests
- Experience the full cycle: discover → document → fix → test → PR → review → merge

### Why Intentional Bugs?

Real-world development means inheriting codebases with issues. By practicing on intentional bugs in a friendly environment, you build skills like:

- Code investigation and debugging
- Reading and understanding unfamiliar code
- Writing clear bug reports and fixes
- Communicating about technical issues

**Found something broken? Perfect! That's your first contribution waiting to happen.** 🚀

## 🌟 Code of Conduct

Be respectful, inclusive, and constructive. We're all here to learn and grow together.

## 🚀 Getting Started

## 🛠️ Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)

You can check your versions with:

```bash
node --version
npm --version
```

---

### 1. Fork and Clone

1. **Fork this repository** by clicking the "Fork" button at the top right
2. **Clone your fork** to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/patchwork-library.git
cd patchwork-library
```

3. **Add the upstream repository** (to keep your fork updated):

```bash
git remote add upstream https://github.com/ioanat94/patchwork-library.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

**Branch naming conventions:**

- `feature/add-search` - for new features
- `fix/broken-link` - for bug fixes
- `docs/update-readme` - for documentation
- `test/library-component` - for adding tests

## 🔍 Finding Work: Intentional Gaps & Learning Opportunities

Not sure what to work on? Here's where to look:

### 1. **Check the Issues Tab**

**How to claim an issue:**

- Before starting work, **comment on the issue asking to be assigned**. Wait for confirmation before you begin. This helps avoid multiple people working on the same issue and ensures your effort is not redundant.
- **Exception:** If the issue has the `infinite` tag, you do **not** need to ask for assignment or permission—anyone can work on it at any time!
- **Please only work on one issue at a time.** Once your pull request is merged or closed, feel free to claim another! This gives more people the opportunity to contribute and keeps things fair for everyone.

Thank you for helping us make Patchwork Library a welcoming and collaborative space!

Browse [Issues](https://github.com/ioanat94/patchwork-library/issues) for:

- `good first issue` - Perfect for beginners
- `help wanted` - Looking for contributors
- `enhancement` - New feature requests
- `bug` - Things that need fixing

### 2. **Find Bugs**

Click around the app and try to break things:

- **Broken links?** Some links might 404 or go nowhere - fix them!
- **Layout issues?** Things misaligned, overlapping, or responsive breakpoints broken?
- **Styling problems?** Wrong colors, missing hover states, poor contrast?
- **Logic errors?** Components not updating? Data not loading correctly?
- **Console errors?** Open DevTools - are there warnings or errors to fix?

**Pro tip:** If something looks wrong or doesn't work, it's probably intentional. Document it in an issue, then fix it!

### 3. **Look for Missing Features**

Try using the app and notice what's missing:

- Can't search for resources? **Build it!**
- No way to filter by tag? **Your chance to add it!**
- Resources not sorted? **Implement sorting!**
- UI could be prettier? **Show off your design skills!**

### 4. **Improve What's There**

Even "working" code can be better:

- Add tests for untested components
- Improve accessibility (ARIA labels, keyboard navigation)
- Enhance mobile responsiveness
- Refactor for better performance
- Add error handling

### 5. **Check Coverage Reports**

Run `npm test -- --coverage` to see what's not tested yet.

### 6. **Read the Code**

Browse the codebase and ask yourself:

- "What if I wanted to...?"
- "This could be more user-friendly if..."
- "I wonder why there's no..."

If you think of it, it might be an intentional gap waiting for someone like you!

## 📋 Types of Contributions

### Adding Learning Resources

The easiest way to contribute! Add educational resources to our library.

**How to add a resource:**

1. Open `src/data/resources.ts`
2. Add a new entry with a unique UUID:

```json
{
  "id": "YOUR_UNIQUE_UUID",
  "title": "Resource Title",
  "url": "https://example.com/resource",
  "tags": ["javascript", "beginner"]
}
```

3. Generate a UUID at [uuidgenerator.net](https://www.uuidgenerator.net/)
4. Use appropriate tags (tags are type-checked!):
   - **Topics**: html, css, javascript, typescript, react, nodejs, databases, testing, ci-cd, github
   - **Difficulty**: beginner, intermediate, advanced
   - **Resource type**: documentation, tutorial, interactive, video, course, book, free-book, tool
   - **Attributes**: official, comprehensive, patterns, best-practices, accessibility, layout, sql, nosql, devops

**Quality guidelines:**

- Ensure links are working and lead to quality content
- Use descriptive titles
- Add relevant tags to help others find resources
- Prefer free or freely accessible content

### Implementing Features

Want to add functionality? Great! Here are some ideas:

- **Search/Filter**: Add a search bar to filter resources by title or tags
- **Sorting**: Add options to sort resources (A-Z, newest, by category)
- **Categories**: Group resources by main topic
- **Dark Mode**: Implement theme switching
- **Pagination**: Break resources into pages

**Before starting a feature:**

1. Check [existing issues](https://github.com/ioanat94/patchwork-library/issues) to see if someone's working on it
2. Open an issue describing what you'd like to build
3. Wait for feedback/approval before investing significant time

### Writing Tests

Help us maintain code quality! We use Vitest and Testing Library.

**Test locations:**

- Component tests: `src/components/ComponentName.test.tsx`
- Integration tests: `src/App.test.tsx`

**Running tests:**

```bash
npm test                # Watch mode
npm test -- --run      # Run once
npm test -- --coverage # With coverage report
```

### Fixing Bugs

Found a bug? Awesome!

1. Check if there's already an [issue](https://github.com/ioanat94/patchwork-library/issues) for it
2. If not, open a new issue describing the bug
3. Fork, fix, and submit a PR referencing the issue

## 💻 Development Guidelines

### Code Style

We use ESLint and TypeScript for code quality. The pre-commit hook will catch issues.

**Key conventions:**

- Use functional components with TypeScript
- Prefer named exports for utilities, default exports for components
- Use Tailwind CSS for styling
- Write descriptive variable and function names
- Add comments for complex logic

**Example component structure:**

```tsx
import type { YourType } from '@/utils/types';
import { Button } from '@/components/ui/button';

type ComponentNameProps = {
  prop: string;
};

export default function ComponentName({ prop }: ComponentNameProps) {
  return <div className='container mx-auto'>{/* Component content */}</div>;
}
```

### Git Hooks

This project uses Husky for Git hooks:

- **pre-commit**: Runs `npm run lint` - catches code style issues
- **pre-push**: Runs `npm test -- --run` - ensures tests pass

If a hook fails, fix the issues before committing/pushing.

### Commit Messages

Write clear, descriptive commit messages:

```
Good:
✅ feat: add search functionality to library
✅ fix: correct broken link in resources.ts
✅ docs: update contributing guide with examples

Avoid:
❌ update stuff
❌ fix
❌ changes
```

**Format:** `type: description`

**Types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `contrib:` - Adding yourself to contributors or adding a resource link (for infinite tasks)

## 📝 Submitting Changes

### 1. Keep Your Fork Updated

Before starting work, sync with the upstream repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### 2. Make Your Changes

- Write clear, focused code
- Add tests for new features
- Update documentation if needed
- Ensure all tests pass: `npm test -- --run`
- Ensure linting passes: `npm run lint`

### 3. Commit and Push

```bash
git add .
git commit -m "feat: add your feature description"
git push origin your-branch-name
```

### 4. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request"
3. Select your branch and the main repository's `main` branch
4. Fill out the PR template with:
   - **Description**: What does this PR do?
   - **Related Issue**: Link any related issues (#123)
   - **Type of Change**: Feature, bug fix, docs, etc.
   - **Testing**: How did you test this?
   - **Screenshots**: If UI changes, include before/after

**Example PR description:**

```markdown
## Description

Adds search functionality to filter resources by title and tags.

## Related Issue

Closes #42

## Type of Change

- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Code style changes
- [ ] Code refactoring
- [ ] Adding or updating tests
- [ ] Maintenance tasks
- [ ] Contrib (infinite task: add yourself to contributors, add resource link)

## Testing

- [x] Added unit tests for search logic
- [x] Manual testing with various search terms
- [x] All existing tests pass

## Screenshots

[Include screenshot of search bar and filtered results]
```

### 5. Respond to Feedback

Reviewers may request changes. This is normal and part of the learning process!

- Be open to feedback
- Ask questions if something's unclear
- Make requested changes
- Push new commits to your branch (they'll appear in the PR)
- Reply to comments to keep discussion organized

## 🔍 Code Review

### Reviewing Others' PRs

Contributing isn't just about code! Reviewing pull requests helps everyone learn.

**How to review:**

1. Go to the [Pull Requests](https://github.com/ioanat94/patchwork-library/pulls) tab
2. Choose a PR to review
3. Read the description and related issues
4. Check out the code (optional but recommended):
   ```bash
   git fetch upstream pull/ID/head:pr-ID
   git checkout pr-ID
   npm install
   npm run dev
   ```
5. Test the changes
6. Leave constructive feedback

**What to look for:**

- ✅ Does the code work as described?
- ✅ Are there tests?
- ✅ Is the code readable and well-structured?
- ✅ Does it follow project conventions?
- ✅ Are there any edge cases not handled?
- ✅ Is documentation updated if needed?

**Feedback tips:**

- Be kind and constructive
- Explain _why_ you're suggesting changes
- Point out what's done well!
- Ask questions instead of making demands
- Offer to help if stuck

**Example feedback:**

```markdown
Good:
✅ "Great work on the search feature! One suggestion: could we add a debounce
to avoid filtering on every keystroke? This would improve performance with
large lists. Let me know if you'd like help implementing it!"

Avoid:
❌ "This is wrong."
❌ "You should use debounce."
```

## 🐛 Opening Issues

### Bug Reports

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**

1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**

- OS: [e.g. Windows, Mac, Linux]
- Browser: [e.g. Chrome, Firefox]
- Version: [e.g. 22]
```

### Feature Requests

```markdown
**Is your feature related to a problem?**
Describe the problem or limitation.

**Describe the solution you'd like**
Clear description of the feature.

**Describe alternatives you've considered**
Other approaches you thought about.

**Additional context**
Mockups, examples, or anything else helpful.
```

## 🎯 Good First Issues

New to open source? Look for issues labeled `good first issue` - these are designed for newcomers!

**Typical good first issues:**

- Adding a learning resource
- Fixing typos in documentation
- Adding tests for existing components
- Small UI improvements

## ❓ Questions?

Stuck? Need help? Don't hesitate to ask!

- **Comment on the issue** you're working on
- **Open a discussion** on GitHub
- **Ask in your PR** if you're unsure about something

Remember: asking questions is part of learning, and we're all here to help! 🤝

## 📚 Resources for Contributors

New to Git/GitHub? These resources can help:

- [GitHub's Hello World Guide](https://guides.github.com/activities/hello-world/)
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)

---

Thank you for contributing to Patchwork Library! Every contribution, no matter how small, makes a difference. 🎉
