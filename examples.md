# MVP Activity Submission Examples

Complete examples for submitting each type of Microsoft MVP contribution using the CLI.

## Table of Contents

- [Blog](#blog)
- [Book/E-book](#booke-book)
- [Article](#article)
- [Podcast](#podcast)
- [Webinar/Online Training/Video/Livestream](#webinaronline-trainingvideolivestream)
- [Content Feedback and Editing](#content-feedback-and-editing)
- [Online Support](#online-support)
- [Open Source/Project/Sample code/Tools](#open-sourceprojectsample-codetools)
- [Product Feedback](#product-feedback)
- [Mentorship/Coaching](#mentorshipcoaching)
- [Speaker/Presenter at Microsoft event](#speakerpresenter-at-microsoft-event)
- [Speaker/Presenter at Third-party event](#speakerpresenter-at-third-party-event)
- [User Group Owner](#user-group-owner)

---

## Blog

Submit a blog post you've written.

### Interactive Mode
```sh
mvp-activity add
# Select: Blog
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t Blog \
  -T "Building AI Agents with TypeScript" \
  -D "A comprehensive guide to building AI agents using TypeScript and modern frameworks" \
  -u https://example.com/blog/ai-agents-typescript \
  -d 2025-11-24 \
  -a Developer \
  -r Author \
  --tech-area "Web Development" \
  --views 5000 \
  --subscribers 1200 \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Author")
- Technology Focus Area
- Number of Views

**Optional Fields:**
- Subscriber Base

---

## Book/E-book

Submit a book or e-book you've authored or contributed to.

### Interactive Mode
```sh
mvp-activity add
# Select: Book/E-book
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Book/E-book" \
  -T "Mastering Node.js CLI Development" \
  -D "A complete guide to building professional command-line tools with Node.js" \
  -u https://example.com/books/nodejs-cli \
  -d 2025-11-15 \
  -a "Developer,Student" \
  -r Author \
  --tech-area "Developer Tools" \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Author" or "Contributor")
- Technology Focus Area

---

## Article

Submit an article published in a magazine, journal, or online publication.

### Interactive Mode
```sh
mvp-activity add
# Select: Article
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t Article \
  -T "The Future of Web Development" \
  -D "An in-depth analysis of emerging trends in web development for 2025" \
  -u https://techmagazine.com/articles/future-web-dev \
  -d 2025-11-20 \
  -a "Developer,Technical Decision Maker" \
  -r Author \
  --tech-area "Web Development" \
  --views 8000 \
  --subscribers 5000 \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Author" or "Contributor")
- Technology Focus Area
- Number of Views

**Optional Fields:**
- Subscriber Base

---

## Podcast

Submit a podcast episode you've hosted or appeared on.

### Interactive Mode
```sh
mvp-activity add
# Select: Podcast
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t Podcast \
  -T "Building Scalable Cloud Applications" \
  -D "Discussion about best practices for building scalable applications on Azure" \
  -u https://podcast.example.com/episode/123 \
  -d 2025-11-18 \
  -a "Developer,IT Pro" \
  -r Host \
  --tech-area "Cloud & AI" \
  --listens 3500 \
  --subscribers 2000 \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Host", "Presenter", or "Panelist")
- Technology Focus Area
- Number of Listens

**Optional Fields:**
- Subscriber Base

---

## Webinar/Online Training/Video/Livestream

Submit a webinar, online training session, video tutorial, or livestream.

### Interactive Mode
```sh
mvp-activity add
# Select: Webinar/Online Training/Video/Livestream
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Webinar/Online Training/Video/Livestream" \
  -T "Introduction to Azure DevOps" \
  -D "A hands-on tutorial covering Azure DevOps pipelines and deployment strategies" \
  -u https://youtube.com/watch?v=example123 \
  -d 2025-11-22 \
  -a "Developer,IT Pro" \
  -r Host \
  --tech-area "DevOps" \
  --live-views 1200 \
  --on-demand-views 4500 \
  --sessions 1 \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Host" or "Presenter")
- Technology Focus Area
- Livestream Views
- On-demand Views
- Number of Sessions

---

## Content Feedback and Editing

Submit contributions where you've reviewed, edited, or provided feedback on technical content.

### Interactive Mode
```sh
mvp-activity add
# Select: Content Feedback and Editing
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Content Feedback and Editing" \
  -T "Technical Review for Azure Documentation" \
  -D "Provided comprehensive technical review and feedback for Azure Functions documentation" \
  -u https://docs.microsoft.com/azure/functions \
  -d 2025-11-10 \
  -a Developer \
  -r Reviewer \
  --tech-area "Cloud & AI" \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Reviewer" or "Contributor")
- Technology Focus Area

---

## Online Support

Submit contributions where you've provided online support through forums, Q&A sites, or community platforms.

### Interactive Mode
```sh
mvp-activity add
# Select: Online Support
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Online Support" \
  -T "Stack Overflow Azure Support" \
  -D "Answered 50+ questions about Azure services and helped developers solve deployment issues" \
  -u https://stackoverflow.com/users/12345 \
  -d 2025-11-24 \
  -a Developer \
  -r Contributor \
  --tech-area "Cloud & AI" \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Contributor")
- Technology Focus Area

---

## Open Source/Project/Sample code/Tools

Submit open source projects, sample code, or tools you've created or contributed to.

### Interactive Mode
```sh
mvp-activity add
# Select: Open Source/Project/Sample code/Tools
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Open Source/Project/Sample code/Tools" \
  -T "mvp-activity CLI Tool" \
  -D "Created a command-line tool for submitting Microsoft MVP contributions with support for all activity types" \
  -u https://github.com/ahmadawais/mvp-activity \
  -d 2025-11-24 \
  -a Developer \
  -r Author \
  --tech-area "Developer Tools" \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Author" or "Contributor")
- Technology Focus Area

---

## Product Feedback

Submit feedback you've provided on Microsoft products or services.

### Interactive Mode
```sh
mvp-activity add
# Select: Product Feedback
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Product Feedback" \
  -T "Azure Portal UX Improvements" \
  -D "Provided detailed feedback on Azure Portal user experience and suggested improvements for the deployment workflow" \
  -u https://feedback.azure.com/forums/12345 \
  -d 2025-11-15 \
  -a "Developer,IT Pro" \
  -r Contributor \
  --tech-area "Cloud & AI" \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Contributor")
- Technology Focus Area

---

## Mentorship/Coaching

Submit mentorship or coaching activities where you've helped others grow their technical skills.

### Interactive Mode
```sh
mvp-activity add
# Select: Mentorship/Coaching
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Mentorship/Coaching" \
  -T "Junior Developer Mentorship Program" \
  -D "Mentored 5 junior developers on web development best practices and career growth" \
  -u https://example.com/mentorship-program \
  -d 2025-11-24 \
  -a "Developer,Student" \
  -r Mentor \
  --tech-area "Web Development" \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Mentor")
- Technology Focus Area

---

## Speaker/Presenter at Microsoft event

Submit speaking engagements at Microsoft-organized events.

### Interactive Mode
```sh
mvp-activity add
# Select: Speaker/Presenter at Microsoft event
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Speaker/Presenter at Microsoft event" \
  -T "Microsoft Build 2025 - AI Agents Workshop" \
  -D "Delivered a workshop on building AI agents with Azure OpenAI Service" \
  -u https://mybuild.microsoft.com/sessions/12345 \
  -d 2025-11-20 \
  -a "Developer,IT Pro" \
  -r Speaker \
  --tech-area "Cloud & AI" \
  --attendees 300 \
  --live-views 1500 \
  --on-demand-views 5000 \
  --sessions 2 \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Speaker" or "Presenter")
- Technology Focus Area
- In-person Attendees
- Livestream Views
- On-demand Views
- Number of Sessions

---

## Speaker/Presenter at Third-party event

Submit speaking engagements at non-Microsoft events (conferences, meetups, user groups).

### Interactive Mode
```sh
mvp-activity add
# Select: Speaker/Presenter at Third-party event
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "Speaker/Presenter at Third-party event" \
  -T "Command.new - Agent of Agents" \
  -D "Presented on building AI agents without frameworks at a community conference" \
  -u https://www.youtube.com/watch?v=fcPUqxfrE6Y \
  -d 2025-11-24 \
  -a "Developer,Student" \
  -r Speaker \
  --tech-area "Web Development" \
  --attendees 700 \
  --live-views 700 \
  --on-demand-views 700 \
  --sessions 1 \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Speaker" or "Presenter")
- Technology Focus Area
- In-person Attendees
- Livestream Views
- On-demand Views
- Number of Sessions

---

## User Group Owner

Submit activities related to organizing and running user groups.

### Interactive Mode
```sh
mvp-activity add
# Select: User Group Owner
# Follow the prompts
```

### Non-Interactive Mode
```sh
mvp-activity add \
  -t "User Group Owner" \
  -T "Node.js Developers Meetup - November 2025" \
  -D "Organized monthly meetup with 3 speakers covering Node.js best practices and new features" \
  -u https://meetup.com/nodejs-developers/events/12345 \
  -d 2025-11-24 \
  -a Developer \
  -r Organizer \
  --tech-area "Web Development" \
  -x
```

**Required Fields:**
- Title
- Description
- URL
- Date
- Target Audience
- Role (typically "Organizer")
- Technology Focus Area

---

## Tips for All Submissions

### Date Format
Always use `YYYY-MM-DD` format:
```sh
-d 2025-11-24
```

### Multiple Target Audiences
Separate with commas (no spaces):
```sh
-a "Developer,Student,IT Pro"
```

### Technology Focus Areas
Common options include:
- Web Development
- Cloud & AI
- Developer Tools
- Data & Analytics
- Mobile Development
- DevOps
- Security
- IoT
- Mixed Reality
- Gaming
- Business Applications
- Other

### URLs
- Always include the full URL with `https://`
- Use the most specific URL possible (e.g., direct link to video, article, or event page)
- For ongoing activities (like user groups), link to the specific event or session

### Automation
For CI/CD pipelines or scripts, use the `-x` flag to disable interactive mode:
```sh
mvp-activity add -t Blog -T "Title" -D "Description" -u https://example.com -d 2025-11-24 -a Developer -r Author --tech-area "Web Development" --views 1000 -x
```

---

## Need Help?

Run the help command for any command:
```sh
mvp-activity help
mvp-activity help add
mvp-activity add --help
```
