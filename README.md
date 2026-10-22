# PDF to 3D CAD Converter

A browser-based application for turning 2D PDF component drawings into simplified 3D models and combining them into an assembly.

The initial focus is a guided workflow: users supply dimensions and identify shapes from drawings to create geometry, preview the result, and export an STL file.

## Project Status

Early development. Features below describe the planned MVP.

## Planned Features

- Upload and view PDF drawings.
- Define basic shapes using dimensions from the drawings.
- Generate simplified 3D components.
- Position components within an assembly.
- Preview the assembly in an interactive 3D viewer.
- Export the resulting geometry as an STL file.

## Intended Workflow

1. Upload a component drawing.
2. Identify the shapes to model and enter their dimensions.
3. Generate and inspect the 3D component.
4. Repeat for additional components.
5. Position the components to form an assembly.
6. Export the model.

## Initial Scope

The MVP will focus on basic geometry and user-assisted modeling without AI. Fully automatic reconstruction from arbitrary engineering drawings is outside the initial scope.

STL export will contain the model’s surface geometry. It will not preserve CAD features, assembly relationships, or drawing annotations.

## Getting Started

Follow these steps to set up the project locally and run the development tools.

### Prerequisites

Ensure you have **Node.js** (22.12+ or a newer compatible LTS release) and **npm** installed on your machine.

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone git@github.com:ebordenave/pdf-to-3d-cad-converter.git
   cd pdf-to-3d-cad-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Available Scripts

Once the installation is complete, you can run the following commands in the project directory:

- **Development Server**

  ```bash
  npm run dev
  ```

  Starts the local development server. Open [http://localhost:5173](http://localhost:5173) (or the port displayed in your terminal) to view it in your browser.

- **Production Build**

  ```bash
  npm run build
  ```

  Builds the application for production usage. The optimized output will be generated in the dist directory.

- **Linting**

  ```bash
  npm run lint
  ```

  Runs the linter to check the codebase for code quality, formatting issues, and potential errors.

- **Testing**
  ```bash
  npm test
  ```
  Runs the automated unit tests using Vitest. Integration tests are planned for a future milestone.
