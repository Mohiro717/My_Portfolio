# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese portfolio website for mohiro, a UEFN (Unreal Editor for Fortnite) creator. The site features a watercolor-inspired design and tells the story of overcoming adversity while learning UEFN development. The site is built as a single-page application with a blog section for documenting the learning journey.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

The application requires a Gemini API key for the "word of hope" generation feature:
- Create `.env.local` file in project root
- Add `GEMINI_API_KEY=your_api_key_here`
- The app gracefully degrades if no API key is provided

## Architecture Overview

### Core Stack
- **Vite**: Build tool and dev server
- **React 19**: UI framework with React Router for routing
- **TypeScript**: Type safety throughout
- **Tailwind CSS**: Utility-first styling via CDN
- **Google Gemini AI**: For dynamic content generation

### Project Structure
```
├── components/           # Reusable UI components
│   ├── sections/        # Page sections (Hero, Story, Works, Blog, Contact)
│   └── [UI components]  # Header, Footer, Cards, Loading, etc.
├── pages/              # Route components
├── data/               # Static content (blog posts)
├── services/           # External API integrations (Gemini)
├── types.ts           # TypeScript type definitions
└── App.tsx            # Root component with routing
```

### Routing
Uses HashRouter for GitHub Pages compatibility:
- `/` - Home page with all sections
- `/blog/:slug` - Individual blog posts
- `/terms` - Terms of service
- `/privacy` - Privacy policy

### Data Management
- **Blog posts**: Static data in `data/posts.ts` with React elements for content
- **Works**: Hardcoded portfolio items
- **Dynamic content**: Gemini AI integration for generating inspirational Japanese words

## Design System

### Watercolor Theme
The site uses a sophisticated watercolor-inspired design system:
- **Custom CSS animations**: Watercolor drift effects, fade-in transitions
- **Color palette**: Soft pastels (watercolor-pink, watercolor-blue, etc.)
- **Typography**: Japanese font "Yomogi" for authentic feel
- **Components**: Watercolor cards with blur effects and subtle animations

### CSS Architecture
- **Inline styles**: Extensive custom CSS in `index.html` for watercolor effects
- **Tailwind config**: Extended with custom colors and fonts
- **Animations**: Complex keyframe animations for background effects and loading screens

### Key Visual Features
- Animated watercolor background with multiple layers
- Loading screen with progress ring and inspirational messages
- Scroll reveal animations for content sections
- Hover effects with enhanced shadows and transforms

## Component Patterns

### Section Components
All major page sections follow this pattern:
```typescript
// Located in components/sections/
// Self-contained with Layout wrapper
// Watercolor card styling
// Scroll reveal animations
```

### Content Structure
- **Hero**: Personal introduction with dynamic word generation
- **Story**: Narrative sections with medical context
- **Works**: Portfolio showcase
- **Blog**: Recent posts with excerpts
- **Contact**: Contact form (styled but functionality not implemented)

## Key Implementation Details

### Gemini AI Integration
- Service in `services/geminiService.ts`
- Generates Japanese inspirational words
- Graceful fallback to default words
- Error handling for API failures

### Blog System
- Posts defined as TypeScript objects with React.createElement content
- Slug-based routing
- Rich content support with custom styling

### Loading Experience
- Custom loading screen with animated progress ring
- Staged loading with multiple animation phases
- Smooth transition to main application

## Development Notes

- The app uses HashRouter for deployment compatibility
- All external fonts and dependencies loaded via CDN
- Vite config includes environment variable handling for API keys
- TypeScript path aliases configured (`@/*` maps to project root)
- Build targets modern ES2022 for optimal performance

# CLAUDE.md

This file provides guidance for development work. Please follow the guidelines and requirements below when proceeding with development.

## Conversation Guidelines
常に日本語で会話する

## AI Security Guidelines

### Secure Coding Principles

#### 1. Environment Variables and Secret Management
- **Absolutely Prohibited**: Hardcoding API keys, DB connections, or secrets
- **Client-side Exposure**: Handle sensitive information and personal data only on the server side
- **Service Role Keys, Secret Keys, Admin Keys** must be used only on the server side
- **Production Environment Credentials** must never be written directly in code

#### 2. Database Security
- Always enable Row Level Security
- Implement least privilege policies
- Use server-side validation for all database operations
- **Never perform SQL operations from frontend**, implement safe DB operations in backend
- Avoid direct SQL query concatenation, thoroughly implement SQL injection countermeasures

#### 3. API Implementation Security
- Mandatory input validation using schema validation
- Implement rate limiting
  - Per user: 100 requests/minute
  - Per IP: 1000 requests/hour
- Safe error handling that doesn't expose internal details
- Protection from user enumeration attacks
- Implement authentication for all API endpoints
- Filter unnecessary data with output filtering

#### 4. Authentication and Account Security
- Client secrets must be used only on the server side
- Implement CSRF protection
- Use cryptographically secure token generation
- Prohibit storing unencrypted passwords

#### 5. Authorization Management
- Implement Role-Based Access Control (RBAC)
- Protect admin actions
- Prevent privilege escalation
- Apply need-to-know principle

#### 6. Security Headers
- Implement strict security headers
- Implement CSP headers (must add if not implemented)
- Prevent clickjacking
- Control content type options
- Set referrer policy
- Restrict permissions policy

#### 7. XSS Prevention
- Always sanitize user-generated content
- Use libraries like DOMPurify
- Never insert HTML directly without sanitization
- Thoroughly apply SafeText component

#### 8. Log Management
- **Production Environment**: Remove console.log containing personal or sensitive information
- **Development Environment**: Display only necessary logs
- Never output API keys or passwords to logs
- Prohibit displaying debug information containing user personal data

#### 9. Data Protection and Privacy
- **Minimize Collection**: Collect only necessary minimum data
- **Encryption**: Encrypt at rest and in transit
- **Access Control**: Apply need-to-know principle
- **Retention Period**: Securely delete data when no longer needed

### Development Build Workflow

When implementing features or making major adjustments, always execute the following steps:

1. **After Code Changes**
   - Run `npm run build` to check for build errors

2. **If Errors Occur**
   - Report error details
   - Implement fixes
   - Check build again

3. **After Confirming Build Success**
   - Report "Build succeeded. Ready for deployment"

**Required Checks for**:
- After new feature implementation
- After multiple file changes
- After type definition changes
- After import/export changes
- After removing unnecessary code

### Secure Development Practices

#### Code Review Checklist
- [ ] Confirm input validation implementation
- [ ] Proper authentication and authorization implementation
- [ ] No sensitive information in error messages
- [ ] No personal information output to logs
- [ ] SQL injection countermeasures
- [ ] XSS countermeasures implemented
- [ ] CSRF countermeasures implemented
- [ ] Admin privilege takeover countermeasures
- [ ] Prevention of important information leaks from server

#### Implementation Checklist
- [ ] Use environment variables
- [ ] Enable RLS and set policies
- [ ] Validate all inputs
- [ ] Implement rate limiting
- [ ] Secure error messages
- [ ] Protect sensitive user data
- [ ] Server-side permission checks

### Prohibited Actions

#### Security - Things You Must Never Do
- ❌ Write production environment credentials directly in code
- ❌ Output API keys or passwords to logs
- ❌ Display debug information containing user personal data
- ❌ Direct SQL query concatenation (causes SQL injection)
- ❌ Store unencrypted passwords
- ❌ Ignore or work around security warnings
- ❌ Copy production data to development environment

#### Denied Command Permissions
- Strict security measures to prevent destructive bash commands
- Denied Commands:
  - `Bash(rm -rf /)`
  - `Bash(rm -rf ~)`
  - `Bash(rm -rf ~/*)`
  - `Bash(rm -rf /*)`

#### Code Quality - Things Not to Do
- ❌ Swallow errors (catch and do nothing)
- ❌ Meaningless try-catch abuse
- ❌ Easy use of 'any' in TypeScript
- ❌ Abuse of eslint-disable
- ❌ Implementation ignoring existing design patterns

#### Destructive Operations - Things Not to Execute Without Confirmation
- ❌ Database deletion or reset
- ❌ Direct deployment to production
- ❌ Bulk update/deletion of large amounts of data
- ❌ Migration without backup
- ❌ Major dependency changes (major version upgrades, etc.)

#### Performance - Implementations to Avoid
- ❌ Code with possibility of infinite loops
- ❌ Leaving N+1 query problems
- ❌ Loading huge data into memory at once
- ❌ Executing synchronous heavy processing on UI thread
- ❌ React implementations causing unnecessary re-renders

#### UX - Things Not to Do
- ❌ Delete data without user consent
- ❌ Discard unsaved changes
- ❌ Display nothing on error
- ❌ No progress display for long processes
- ❌ Implementation ignoring mobile compatibility
- ❌ Implementation not considering accessibility

#### Automation - Things Requiring Human Judgment
- ❌ Fully automated production deployment (approval process required)
- ❌ Automatic deletion of user data
- ❌ Automatic execution of billing or payments
- ❌ Automatic delivery of important notifications (content verification required)
- ❌ Automation of processes with legal implications

#### AI Behavior
- ❌ State uncertain things definitively
- ❌ Statements that downplay security risks
- ❌ Vague assurances like "probably okay"
- ❌ Hide errors or bugs
- ❌ Ignore user concerns

### Recommended Responses

#### Security Focus
- ✅ Always use environment variables
- ✅ Always validate input values
- ✅ Handle errors appropriately

#### Confirmation and Communication
- ✅ Always confirm destructive operations
- ✅ Ask questions when uncertain
- ✅ Explain risks in advance

#### Things to Always Confirm
- "Delete production database?"
- "This operation cannot be undone. Continue?"
- "X records will be affected. Execute?"

### Examples of Absolutely Bad Code

```javascript
// ❌ Absolutely Bad - Hardcoding
const apiKey = "sk-123example90abcdef";

// ❌ Absolutely Bad - Password logging
console.log(`Password: ${user.password}`);

// ❌ Absolutely Bad - SQL Injection
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ❌ Swallowing errors
try {
  await someFunction();
} catch (error) {
  // Do nothing - Absolutely bad
}

// ❌ Abuse of any
const data: any = await fetchData(); // Should be typed

// ❌ N+1 Problem
users.forEach(async (user) => {
  const posts = await db.query(`SELECT * FROM posts WHERE user_id = ${user.id}`);
});

// ❌ Bulk processing of huge arrays
const hugeArray = await fetchAllRecords(); // 1 million records
const processed = hugeArray.map(item => complexProcess(item));
```

**Security is not an afterthought but a core design principle integrated from the beginning.**