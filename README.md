## Week 4: SpendWise Dashboard Shell

For Week 4, I transformed my Budget Tracker into a SpendWise financial dashboard shell.

### Dashboard Structure

The dashboard contains:

- A sidebar navigation menu
- A financial dashboard header
- A financial summary section
- Six spending category cards
- A recent transactions section

### Spending Categories

The dashboard displays six realistic financial categories:

- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

Each card contains a category name, description, spending amount, percentage, and progress bar.

### CSS Grid

CSS Grid is used to create the main dashboard structure with a sidebar and main content area.

CSS Grid is also used for the category cards.

### Flexbox

Flexbox is used for:

- Sidebar navigation
- Header content
- Profile section
- Summary cards
- Category card content
- Transaction rows

### CSS Custom Properties

The application uses CSS variables to define the theme, including:

- Brand color
- Accent color
- Background color
- Surface color
- Primary text color
- Secondary text color
- Border color

### Responsive Design

A media query at 768px changes the dashboard into a single-column layout for smaller screens.

The sidebar navigation also changes to a horizontal layout on smaller screens.

### Card Micro-interactions

The dashboard cards have hover and keyboard focus effects.

The animations use:

- `transform`
- `box-shadow`
- `transition`

The transitions are 200ms, which is below the required 250ms limit.

### Dark Theme

A dark theme was added using:

```css
@media (prefers-color-scheme: dark)
