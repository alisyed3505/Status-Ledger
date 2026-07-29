# CONCEPT: 'Ephemeral Containers'. We borrow a Linux environment that already has Node installed to run our 'npx' command, then throw it away immediately.
# IMPACT: You keep your host machine completely clean. No global Node installations required.

docker run --rm -it -v "${PWD}:/app" -w /app node:20 npx create-next-app@latest everything-dashboard

<!-- The above command is used to create a dockerized container that will run the npx create-next-app@latest command to create a new next.js application named everything-dashboard. This command is run in the current directory where the dockerfile is located. -->


## for running the container

- docker compose up

### CONCEPT: 'exec' runs commands inside an active container. 
### IMPACT: This installs the packages directly into the container's isolated node_modules volume, keeping your host machine clean.

- docker compose exec web npm install lucide-react framer-motion zustand clsx tailwind-merge

### creating src/ directory structure
# The 'src/app' directory already exists (created by Next.js).
# 'components', 'features', 'lib', and 'store' are folders we are adding manually inside 'src/' to organize our code.

- src/
  - app/          # Only routing files (page.tsx, layout.tsx)
  - components/   # "Dumb" UI components (e.g., standard Buttons, Inputs)
  - features/     # "Smart" components containing business logic (e.g., DashboardGrid, ChatWidget)
  - lib/          # Utility functions, database connections, and helper scripts
  - store/        # Zustand global state management files