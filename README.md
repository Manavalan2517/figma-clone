# Figma Clone

A minimalist Figma clone built with Next.js, Fabric.js, and Liveblocks for real-time collaboration. This project allows multiple users to simultaneously edit a canvas, demonstrating collaborative features like cursor tracking, shape manipulation, commenting, and reactions.

## Features

* **Real-time Collaboration:**  Multiple users can edit the canvas simultaneously with changes reflected in real-time thanks to Liveblocks.
* **Cursor Tracking:** See other users' cursors and their current activity (e.g., typing a message).
* **Shape Manipulation:** Create and manipulate basic shapes on the canvas.
* **Commenting:**  Threaded comments allow for collaborative discussions directly on the canvas.
* **Reactions:** React to specific elements on the canvas.
* **User Avatars:**  User avatars are displayed for each collaborator.
* **Export to PDF:** Download the canvas content as a PDF.
* **Responsive Design:**  Adapts to different screen sizes.


## Technologies Used

* **Next.js:**  React framework for server-side rendering and static site generation.
* **Fabric.js:**  JavaScript library for working with HTML5 canvas elements.
* **Liveblocks:**  Platform for building collaborative web applications.
* **Tailwind CSS:**  Utility-first CSS framework for styling.
* **TypeScript:**  Typed superset of JavaScript for enhanced code maintainability.


## Getting Started

### Prerequisites

* **Node.js and npm:** Make sure you have Node.js and npm installed.
* **Liveblocks API Key:** Obtain a Liveblocks API key by signing up for a free account at [liveblocks.io](https://liveblocks.io).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Manavalan2517/figma-clone.git 
cd Manavalan2517-figma-clone
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add your Liveblocks public key:

```
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<YOUR_LIVEBLOCKS_PUBLIC_KEY>
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

The project follows a standard Next.js structure:

* **`app/`:** Contains the main application logic, including the canvas component and Liveblocks integration.
* **`components/`:** Reusable UI components, such as the sidebar, navbar, cursor, and comments sections.
* **`hooks/`:** Custom React hooks for managing intervals and other functionalities.
* **`lib/`:** Utility functions for canvas manipulation, PDF export, and more.
* **`public/`:** Static assets, including images and the custom cursor SVG.
* **`types/`:** TypeScript definitions for improved type safety.


## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.  Please follow the existing code style and conventions.