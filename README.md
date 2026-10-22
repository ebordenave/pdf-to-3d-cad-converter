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

Setup instructions will be added as the application takes shape.
