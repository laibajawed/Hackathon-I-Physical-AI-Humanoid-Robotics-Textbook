## Phase 1: Setup (Shared Infrastructure)
Purpose: Confirm project initialization and foundational configuration.

- [X] T001 Confirm Docusaurus 3.x installation and project structure in project root (my-book folder)
- [X] T002 Confirm TypeScript strict mode is enabled in tsconfig.json
- [X] T003 Confirm Tailwind CSS v4 configured for styling in src/css/tailwind.css and docusaurus.config.js
- [X] T004 Confirm Node.js 18+ environment in package.json
- [X] T005 Review docusaurus.config.js for initial configuration

## Phase 2: Foundational (Blocking Prerequisites)
Purpose: Core infrastructure that MUST be complete before ANY user story can be implemented

⚠️ CRITICAL: No user story work can begin until this phase is complete

- [X] T006 Initialize custom Docusaurus theme in src/theme/
- [X] T007 Implement color tokens and variables in src/css/custom.css (or equivalent Tailwind config)
- [X] T008 Configure sidebars.js for initial navigation structure
- [X] T009 Create custom navbar component in src/components/Navbar.tsx
- [X] T010 Add mobile responsive menu in src/components/MobileMenu.tsx (linked from Navbar)
- [X] T011 Set up search functionality in docusaurus.config.js (using Docusaurus search plugin)

## Checkpoint: Foundation ready - user story implementation can now begin in parallel

## Phase 3: User Story 1 - Explore Robotics Curriculum (Priority: P1) 🎯 MVP
Goal: Users can navigate through an organized curriculum of Physical AI and Humanoid Robotics topics, from fundamentals to advanced applications.

Independent Test: A user can access the platform, browse the table of contents, and navigate to different chapters without issues.

### Implementation for User Story 1
- [X] T012 [US1] Create intro.md and welcome content in docs/intro.md
- [X] T013 [US1] Create Fundamentals section with 10 chapters in docs/fundamentals/
- [X] T014 [US1] Create Robotics section with 12 chapters in docs/robotics/
- [X] T015 [US1] Create Humanoid section with 8 chapters in docs/humanoid/
- [X] T016 [US1] Create Applications section with 6 chapters in docs/applications/
- [X] T017 [US1] Configure sidebars.js to include all new content sections
- [X] T018 [US1] Add breadcrumb navigation to Docusaurus theme config in docusaurus.config.js or src/theme/Layout.tsx

## Checkpoint: At this point, User Story 1 should be fully functional and testable independently

## Phase 4: User Story 4 - Access Platform Responsively (Priority: P1)
Goal: Users can access and interact with the learning platform seamlessly on various devices (desktop, tablet, mobile) with an optimized user experience.

Independent Test: The platform displays correctly and functions as expected on different screen sizes.

### Implementation for User Story 4
- [X] T019 [P] [US4] Review and optimize general responsive styling in src/css/tailwind.css and global styles
- [X] T020 [P] [US4] Ensure mobile-first responsive design principles are applied to all existing components in src/components/
- [X] T021 [P] [US4] Test core navigation and content display on various mobile device emulators

## Checkpoint: At this point, User Stories 1 AND 4 should both work independently

## Phase 5: User Story 2 - Utilize Interactive Learning Resources (Priority: P2)
Goal: Users can engage with integrated code examples, diagrams, and downloadable resources to deepen their understanding.

Independent Test: A user can view code examples, understand diagrams, and download provided resources.

### Implementation for User Story 2
- [X] T022 [US2] Build code example blocks component in src/components/CodeBlock.tsx (to support MDX)
- [X] T023 [US2] Design callout boxes (info, warning, tip, example) component in src/components/Callout.tsx (to support MDX)
- [X] T024 [US2] Create figure/image components with captions in src/components/Figure.tsx (to support MDX)
- [X] T025 [US2] Create resource download card component in src/components/DownloadCard.tsx
- [X] T026 [US2] Integrate MDX components into Docusaurus config
- [X] T027 [US2] Create Resources section with reference materials and integrate DownloadCard components in docs/resources/

## Checkpoint: At this point, User Stories 1, 4 AND 2 should all work independently

## Phase 6: User Story 3 - Search for Specific Content (Priority: P2)
Goal: Users can efficiently search the platform for specific keywords, topics, or code snippets to quickly find relevant information.

Independent Test: A user can use the search bar to find content across different chapters.

### Implementation for User Story 3
- [X] T028 [US3] Refine search functionality configuration in docusaurus.config.js
- [X] T029 [US3] Implement search results display component in src/components/SearchResults.tsx
- [X] T030 [US3] Test search functionality with various queries across all content

## Checkpoint: At this point, User Stories 1, 4, 2 AND 3 should all work independently

## Phase 7: User Story 5 - Customize Theme (Priority: P3)
Goal: Users can switch between dark and light themes to suit their viewing preference.

Independent Test: A user can toggle between dark and light modes, and the theme changes correctly across the site.

### Implementation for User Story 5
- [X] T031 [US5] Setup dark/light mode toggle component in src/components/ThemeToggle.tsx
- [X] T032 [US5] Implement dark/light mode styling for all components and global styles in src/css/tailwind.css and src/css/custom.css
- [X] T033 [US5] Integrate ThemeToggle into custom navbar in src/components/Navbar.tsx
- [X] T034 [US5] Test theme switching across all pages and components

## Checkpoint: All user stories should now be independently functional

## Phase N: Polish & Cross-Cutting Concerns
Purpose: Improvements that affect multiple user stories

- [X] T035 [P] Design sidebar styling in src/css/sidebar.css
- [X] T036 [P] Create custom components: Hero section in src/components/Hero.tsx
- [X] T037 [P] Create custom components: Cards in src/components/Cards.tsx
- [X] T038 [P] Create custom components: Call-to-Action (CTAs) in src/components/CTA.tsx
- [X] T039 [P] Create learning path component in src/components/LearningPath.tsx
- [X] T040 Review typography: Implement sans-serif for body and serif for headings in src/css/custom.css (or Tailwind config)
- [X] T041 Code cleanup and refactoring across the codebase
- [X] T042 Performance optimization across all stories
- [X] T043 Security hardening review
- [X] T044 Run quickstart.md validation (if created)

## Dependencies & Execution Order
### Phase Dependencies
Setup (Phase 1): No dependencies - can start immediately
Foundational (Phase 2): Depends on Setup completion - BLOCKS all user stories
User Stories (Phase 3+): All depend on Foundational phase completion
User stories can then proceed in parallel (if staffed)
Or sequentially in priority order (P1 → P1 → P2 → P2 → P3)
Polish (Final Phase): Depends on all desired user stories being complete

### User Story Dependencies
User Story 1 (P1): Can start after Foundational (Phase 2) - No dependencies on other stories
User Story 4 (P1): Can start after Foundational (Phase 2) - No dependencies on other stories
User Story 2 (P2): Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
User Story 3 (P2): Can start after Foundational (Phase 2) - May integrate with US1, US2, US4 but should be independently testable
User Story 5 (P3): Can start after Foundational (Phase 2) - May integrate with all previous stories but should be independently testable

### Within Each User Story
Models before services (N/A for this project as it's static)
Services before endpoints (N/A for this project as it's static)
Core implementation before integration
Story complete before moving to next priority

## Parallel Opportunities
All Setup tasks (T001-T005) can run in parallel (if confirmations are independent)
Foundational tasks (T006-T011) can run in parallel for initial setup
Once Foundational phase completes, User Stories 1 and 4 (P1) can start in parallel.
User Stories 2 and 3 (P2) can also run in parallel after Foundational.
User Story 5 (P3) can start after Foundational.
Many tasks within each user story marked [P] can run in parallel.
Polish & Cross-Cutting Concerns tasks (T035-T039) are often parallelizable.

### Parallel Example: User Story 1 (Explore Robotics Curriculum)
# Example for content creation, can be done in parallel by different content creators
Task: "Create intro.md and welcome content in docs/intro.md"
Task: "Create Fundamentals section with 10 chapters in docs/fundamentals/"
Task: "Create Robotics section with 12 chapters in docs/robotics/"

## Implementation Strategy
### MVP First (User Story 1 and 4 Only)
Complete Phase 1: Setup
Complete Phase 2: Foundational (CRITICAL - blocks all stories)
Complete Phase 3: User Story 1 (Explore Robotics Curriculum)
Complete Phase 4: User Story 4 (Access Platform Responsively)
STOP and VALIDATE: Test User Stories 1 and 4 independently
Deploy/demo if ready

### Incremental Delivery
Complete Setup + Foundational → Foundation ready
Add User Story 1 → Test independently → Deploy/Demo (MVP!)
Add User Story 4 → Test independently → Deploy/Demo
Add User Story 2 → Test independently → Deploy/Demo
Add User Story 3 → Test independently → Deploy/Demo
Add User Story 5 → Test independently → Deploy/Demo
Each story adds value without breaking previous stories

### Parallel Team Strategy
With multiple developers:
Team completes Setup + Foundational together
Once Foundational is done:
Developer A: User Story 1
Developer B: User Story 4
Developer C: User Story 2
Developer D: User Story 3
Developer E: User Story 5
Stories complete and integrate independently

## Notes
- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing (where applicable, for custom React components)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence